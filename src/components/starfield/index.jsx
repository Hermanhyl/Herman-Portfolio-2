import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export default function Starfield() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1]">
      <Canvas>
        <Stars
          radius={100}     // Size of the sphere
          depth={50}       // Depth of area where stars appear
          count={5000}     // Number of stars
          factor={4}       // Star size factor
          saturation={0}
          fade
          speed={1}        // Rotation speed
        />
      </Canvas>
    </div>
  );
}