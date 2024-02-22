'use client';

import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { useControls } from 'leva';

export const Model = ({ path }) => {
  const ref = useRef();
  const name = path.replace(/^\/models\/|\..*/g, '');
  useControls('Models', {
    [name]: {
      value: !name.startsWith('_'),
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
