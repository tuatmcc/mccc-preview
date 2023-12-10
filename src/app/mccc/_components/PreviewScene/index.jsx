'use client';

import { OrbitControls, Stats } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import { Lights } from '../Lights';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/mccc.gltf');
  return <primitive object={gltf.scene} />;
};

export const PreviewScene = () => {
  return (
    <div className="h-screen">
      <Canvas camera={{ fov: 40 }}>
        <Lights />
        <pointLight position={[0, 5, 10]} intensity={5} />
        <Model />
        <OrbitControls />
        <axesHelper args={[5]} />
        <Stats />
      </Canvas>
    </div>
  );
};
