import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';

// ── Pauses the R3F render loop when modal is open ────────
const RenderController = () => {
  const { gl, invalidate, scene, camera } = useThree();

  useEffect(() => {
    const onModal = (e) => {
      if (e.detail.open) {
        gl.setAnimationLoop(null);
      } else {
        gl.setAnimationLoop(() => {
          gl.render(scene, camera);
        });
        invalidate();
      }
    };
    window.addEventListener('modal', onModal);
    return () => window.removeEventListener('modal', onModal);
  }, [gl, invalidate, scene, camera]);

  return null;
};

// ── Gold Wireframe Icosahedron ───────────────────────────
const GoldIcosahedron = () => {
  const outerRef = useRef();
  const innerRef = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.05 + mouse.current.y * 0.08;
      outerRef.current.rotation.y = t * 0.08 + mouse.current.x * 0.08;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.07;
      innerRef.current.rotation.y = -t * 0.05;
    }
  });

  return (
    <Float speed={1.0} rotationIntensity={0.08} floatIntensity={0.6}>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color="#F59E0B" wireframe transparent opacity={0.45} />
      </mesh>
      <mesh ref={innerRef} scale={0.72}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color="#FCD34D" wireframe transparent opacity={0.25} />
      </mesh>
      <mesh scale={0.55}>
        <icosahedronGeometry args={[1.55, 0]} />
        <meshStandardMaterial
          color="#0A0F1E"
          emissive="#F59E0B"
          emissiveIntensity={0.12}
          transparent
          opacity={0.85}
          roughness={0.8}
          metalness={0.3}
        />
      </mesh>
    </Float>
  );
};

const HeroCanvas = () => (
  <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
    <RenderController />
    <ambientLight intensity={0.2} />
    <pointLight position={[5, 5, 5]} intensity={1.2} color="#F59E0B" />
    <pointLight position={[-4, -4, 3]} intensity={0.4} color="#3B82F6" />
    <Suspense fallback={null}>
      <GoldIcosahedron />
    </Suspense>
  </Canvas>
);

export default HeroCanvas;
