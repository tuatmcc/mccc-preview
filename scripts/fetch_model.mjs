import { copyFile, rm } from 'fs/promises';
import { simpleGit } from 'simple-git';

const git = simpleGit({
  baseDir: process.cwd(),
  binary: 'git',
});

async function fetchModel() {
  try {
    // clone the repo to a temporary directory
    await git.clone('https://github.com/tuatmcc/mccc.git', 'tmp');

    // copy the mccc.gltf  file to the public directory
    // WARN: this will overwrite the existing file
    await copyFile('tmp/mccc.gltf', 'public/models/mccc.gltf');

    // remove the temporary directory
    await rm('tmp', { recursive: true, force: true });
  } catch (error) {
    // remove the temporary directory
    await rm('tmp', { recursive: true, force: true });
    console.error(error);
  } finally {
    console.info('Successfully fetched the model');
  }
  return 0;
}

fetchModel();
