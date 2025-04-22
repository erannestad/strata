import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, Bounds } from '@react-three/drei';
import ExcavationModel from './ExcavationModel';
import { useRef, useEffect } from 'react';
import { Grid } from '@react-three/drei';
import * as THREE from 'three';



export default function Home({ showControls = true }) {


  const showLights = false;

  const lights = [
    { pos: [200, 200, 210], color: 'orange' },
    { pos: [-300, 200, 0], color: 'orange' },
  ];

  const polarAngle = (Math.PI / 4 + Math.PI / 3) / 2; // midpoint between min/max
  const radius = 10;

  // Camera positioned at a good angle (between min/max polar)
  const initialCameraPos = [
    radius * Math.sin(polarAngle) * Math.cos(0),
    radius * Math.cos(polarAngle),
    radius * Math.sin(polarAngle) * Math.sin(0),
  ];

  const CustomControls = () => {
    const ref = useRef();
    useFrame(() => ref.current?.update());

    return (
      <OrbitControls
        ref={ref}
        makeDefault
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.15}
        minDistance={1}
        maxDistance={5000}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 3}
      />
    );
  };

  return (
    <div className="bg-canvas">
      <Canvas camera={{ position: initialCameraPos, fov: 40, near: 0.1, far: 1000 }}>
        <ambientLight intensity={0.75} />

          {/* <color attach="background" args={[ '#e4570c' ]} /> */}
          <mesh>
            <sphereGeometry args={[2000, 32, 32]} />
            <meshStandardMaterial
              color="#e4570c"
              side={THREE.BackSide}
              metalness={0.2}
              roughness={10}
              transparent={true}
              opacity={0.45} // ← adjust this
            />
          </mesh>


          {/* Subtle background grid */}
          <Grid
            position={[0, -3000, 0]}
            args={[2000, 2000]}
            cellSize={700}
            cellThickness={0.1}
            sectionSize={700}
            sectionThickness={.7}
            sectionColor={'black'}
            // cellColor={'#white'}
            fadeDistance={20000}
            fadeStrength={2}
            infiniteGrid
          />

        {lights.map((light, i) => (
          <group key={i}>
            <directionalLight position={light.pos} intensity={0.4} castShadow />
            {showLights && (
              <>
                <Sphere args={[50, 8, 8]} position={light.pos}>
                  <meshBasicMaterial attach="material" color={light.color} />
                </Sphere>
                <Line
                  points={[light.pos, [0, 0, 0]]}
                  color={light.color}
                  lineWidth={2}
                  dashed={false}
                />
              </>
            )}
          </group>
        ))}

        <Bounds fit clip margin={0.75}>
          <ExcavationModel />
          {showControls && <CustomControls />}
        </Bounds>
      </Canvas>
    </div>
  );
}
