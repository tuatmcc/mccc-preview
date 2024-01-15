'use client';

import { useControls } from 'leva';
import React, { useRef } from 'react';
import * as three from 'three';

export const Lights = () => {
  const ambientRef = useRef();
  const directionalRef = useRef();

  useControls('Ambient Light', {
    visible: {
      value: true,
      onChange: (v) => {
        ambientRef.current.visible = v;
      },
    },
    intensity: {
      value: 3,
      onChange: (v) => {
        ambientRef.current.intensity = v;
      },
    },
    color: {
      value: 'white',
      onChange: (v) => {
        ambientRef.current.color = new three.Color(v);
      },
    },
  });

  useControls('Directional Light', {
    visible: {
      value: false,
      onChange: (v) => {
        directionalRef.current.visible = v;
      },
    },
    intensity: {
      value: 1,
      onChange: (v) => {
        ambientRef.current.intensity = v;
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

  return (
    <>
      <ambientLight intensity={3} ref={ambientRef} />
      <directionalLight ref={directionalRef} />
    </>
  );
};
