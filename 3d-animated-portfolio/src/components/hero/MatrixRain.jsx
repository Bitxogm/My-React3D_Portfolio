import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MatrixRain = () => {
  const meshRef = useRef();

  const texture = useMemo(() => {
    const size = 512;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Dibuja texto aleatorio estilo Matrix
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, size, size);
    ctx.font = '16px monospace';
    ctx.fillStyle = '#0f0';

    for (let i = 0; i < 400; i++) {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      const char = String.fromCharCode(0x30A0 + Math.random() * 96);
      ctx.fillText(char, x, y);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 2);
    return tex;
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.map.offset.y -= 0.003;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <planeGeometry args={[20, 10]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

export default MatrixRain;
