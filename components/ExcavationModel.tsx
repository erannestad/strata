import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { Center } from '@react-three/drei';
import * as THREE from 'three';

export default function ExcavationModel() {
  const { scene } = useGLTF('/models/model.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (
        child instanceof THREE.Mesh &&
        child.material &&
        'map' in child.material &&
        child.material.map
      ) {
        child.material.map.anisotropy = 16;
        child.material.map.minFilter = THREE.LinearMipMapLinearFilter;
        child.material.map.magFilter = THREE.LinearFilter;
        child.material.map.generateMipmaps = true;
        child.material.map.needsUpdate = true;
      }
    });
  }, [scene]);
  

  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}
