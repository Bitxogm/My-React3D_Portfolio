import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import MatrixRain from './MatrixRain';

const RotatingBox = () => {
  const outerRef = useRef();
  const innerRef = useRef();

  useFrame((_, delta) => {
    if (outerRef.current) outerRef.current.rotation.y += delta * 0.4; // rotación orbital
    if (innerRef.current) innerRef.current.rotation.z += delta * 1;   // rotación local
  });

  return (
    <group ref={outerRef}>
      <mesh ref={innerRef}>
        <Sphere args={[2, 300, 100]} scale={1}>

          <MeshDistortMaterial color="pink" distort={0.6} speed={0.5} />
        </Sphere>
      </mesh>
    </group>
  );
};


const Shape = () => {
  return (

    <section style={{ height: '100vh', background: '#0a0a0a' }}>
  

      <Canvas camera={{ position: [8, 3, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <MatrixRain />
        <RotatingBox />
        <OrbitControls enableZoom enablePan={false} maxPolarAngle={Math.PI} />
      </Canvas>
      </section >

      );
    };

export default Shape;


















