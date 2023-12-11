'use client';

import { modelList } from '@/generated/mccc';
import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { useControls } from 'leva';
import { Lights } from '../Lights';

const Model = ({ path }) => {
  const ref = useRef();
  useControls('Models', {
    [path.replace(/^\/models\/|\..*/g, '')]: {
      value: true,
      onChange: (v) => {
        if (ref.current) {
          ref.current.visible = v;
        }
      },
    },
  });
  const gltf = useLoader(GLTFLoader, path);
  return (
    <group ref={ref}>
      <primitive object={gltf.scene} />;
    </group>
  );
};

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
