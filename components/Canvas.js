import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ExcavationModel from './ExcavationModel';

export default function Home() {
  return (
    <div style={{ height: '75vh' }}>
      <Canvas camera={{ position: [5000, 5000, 5000], fov: 45, near: 0.01, far: 10000 }}>
        <ambientLight intensity={0.5} />
        <ExcavationModel />
        <OrbitControls
          enableZoom
          minDistance={2}
          maxDistance={5000}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}