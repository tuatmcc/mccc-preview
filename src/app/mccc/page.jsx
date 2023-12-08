'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stats, OrbitControls } from '@react-three/drei';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/mccc.gltf');
  return <primitive object={gltf.scene} />;
};

export default function Page() {
  return (
    <div className="h-screen">
      <Canvas>
        <Model />
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  );
}
