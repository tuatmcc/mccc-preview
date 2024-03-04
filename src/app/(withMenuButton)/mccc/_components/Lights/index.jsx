'use client';

import { useControls } from 'leva';
import { useRef } from 'react';

export const Lights = () => {
  const directionalRef = useRef();
  const ambientRef = useRef();

  useControls('Directional Light', {
    visible: {
      value: false,
      onChange: (v) => {
        directionalRef.current.visible = v;
      },
    },
    position: {
      x: 1,
      y: 1,
      z: 1,
      onChange: (v) => {
        directionalRef.current.position.copy(v);
      },
    },
  });

  useControls('Ambient Light', {
    visible: {
      value: true,
      onChange: (v) => {
        ambientRef.current.visible = v;
      },
    },
  });

  return (
    <>
      <ambientLight intensity={3} ref={ambientRef} />
      <directionalLight ref={directionalRef} />
    </>
  );
};
