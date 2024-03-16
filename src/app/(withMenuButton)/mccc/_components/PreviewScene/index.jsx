"use client";

import { modelList } from "@/generated/mccc";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Lights } from "../Lights";
import { Model } from "../Model";

export const PreviewScene = () => {
  return (
    <div className="h-screen-s">
      <Canvas camera={{ fov: 40 }}>
        {modelList.map((path, _index) => {
          return <Model key={path} path={path} />;
        })}
        <Lights />
        <OrbitControls />
        <axesHelper args={[5]} />
        <EffectComposer>
          <Bloom luminanceThreshold={1} mipmapBlur={true} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
