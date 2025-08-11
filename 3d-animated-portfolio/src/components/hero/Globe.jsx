
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { Canvas,  useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls } from '@react-three/drei';
import MatrixRain from './MatrixRain';

const EarthMesh = () => {
  const globeRef = useRef();
  const texture = useLoader(TextureLoader, '/textures/earthmap.jpg');

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0025;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1.8, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        emissive={'#1b2735'}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const Globe = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -2, // 🔽 más abajo que contenido
        pointerEvents: 'none' 
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <hemisphereLight skyColor={'#ffffff'} groundColor={'#222222'} intensity={1} />
        <directionalLight position={[5, 3, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <MatrixRain   /> 
          <EarthMesh />  
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Globe;
