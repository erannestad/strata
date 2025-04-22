import React from 'react';
import { Center } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

// SIMPLIFYING 3D MODELS
// https://vraulet.medium.com/simplifying-glb-files-for-use-in-unity-bd34f7748fae

export default function ExcavationModel() {
  const { scene } = useGLTF('/models/scene_min3.gltf') as { scene: Group };

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}