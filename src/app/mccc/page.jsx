'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Stats, OrbitControls } from '@react-three/drei';
import { Lights } from './_components/Lights';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/mccc.gltf');
  return <primitive object={gltf.scene} />;
};

export default function Page() {


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
}
