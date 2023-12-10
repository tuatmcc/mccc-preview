import { join } from 'path';
import { copyFile, mkdir, rm } from 'fs/promises';
import { writeFile } from 'fs/promises';
import { glob } from 'glob';
import { simpleGit } from 'simple-git';

const modelRepo = 'https://github.com/tuatmcc/mccc.git';
const cloneDir = 'tmp';
const targetPublicModelDir = 'models';
const targetModelListFile = 'src/generated/mccc.mjs';

const git = simpleGit({
  baseDir: process.cwd(),
  binary: 'git',
});

/**
 * @returns {Promise<void>}
 */
async function fetchModel() {
  try {
    console.info('Cloning the model repo...');
    await git.clone(modelRepo, cloneDir, ['--depth=1']);
    console.info('Successfully cloned the repo!');

    // copy the *.gltf  file to the public directory
    // WARN: this will overwrite the existing file
    const files = await searchModels();
    const resolvedFiles = await copyModles(files);

    // remove the temporary directory
    await rm(cloneDir, { recursive: true, force: true });
    console.info('Successfully moved models to the public directory!');

    // generate the model list
    await generateModelList(resolvedFiles);
    console.info(
      `Successfully generated the model list at ${targetModelListFile}!`,
    );
  } catch (error) {
    // remove the temporary directory
    await rm(cloneDir, { recursive: true, force: true });
    console.error(error);
  }

  return;
}

/**
 * @returns {Promise<string[]>}
 */
async function searchModels() {
  const files = await glob(`${cloneDir}/**/*.{gltf,glb}`);
  return files;
}

/**
 * @argument {string[]} files
 * @returns {Promise<string[]>}
 */
async function copyModles(files) {
  const resolvedFiles = files.map(async (file) => {
    const resolvedPath = file.replace(cloneDir, targetPublicModelDir);
    const dest = join('public', resolvedPath);
    await copyFile(file, dest);
    return `/${resolvedPath}`;
  });
  return Promise.all(resolvedFiles);
}

/**
 * @argument {string[]} files
 * @returns {Promise<void>}
 */
async function generateModelList(files) {
  const content = `export const modelList = ${JSON.stringify(files)};`;
  await mkdir('src/generated', { recursive: true });
  await writeFile(targetModelListFile, content, 'utf8');
}

fetchModel();
