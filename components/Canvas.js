import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, Bounds } from '@react-three/drei';
import ExcavationModel from './ExcavationModel';
import { useRef, useEffect } from 'react';

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
