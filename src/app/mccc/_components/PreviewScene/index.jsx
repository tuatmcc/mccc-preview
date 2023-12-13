'use client';

import { modelList } from '@/generated/mccc';
import { OrbitControls, Stats } from '@react-three/drei';
import { useControls } from 'leva';
import { Canvas } from '@react-three/fiber';
import { Lights } from '../Lights';
import { Model } from '../Model';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as Three from 'three';
import { ToggleDarkMode } from '../ToggleDarkMode';

export const PreviewScene = () => {
  return (
    <div className="h-screen-s">
      <Canvas camera={{ fov: 40 }}>
        {modelList.map((path, _index) => {
          return <Model path={path} />;
        })}
        ty
        <Lights />
        <OrbitControls />
        <axesHelper args={[5]} />
        <EffectComposer>
          <Bloom luminanceThreshold={1} mipmapBlur={true} />
        </EffectComposer>
      </Canvas>
      <ToggleDarkMode />
    </div>
  );
};
