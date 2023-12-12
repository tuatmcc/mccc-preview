'use client';

import { modelList } from '@/generated/mccc';
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Lights } from '../Lights';
import { Model } from '../Model';

export const PreviewScene = () => {
  return (
    <div className="h-screen-s">
      <Canvas camera={{ fov: 40 }}>
        {modelList.map((path, _index) => {
          return <Model path={path} />;
        })}
        <Lights />
        <OrbitControls />
        <axesHelper args={[5]} />
        <Stats />
      </Canvas>
    </div>
  );
};
