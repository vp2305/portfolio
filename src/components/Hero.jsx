import React, { useRef, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowRight } from 'lucide-react';

// ── Pauses the R3F render loop when modal is open ────────
const RenderController = () => {
  const { gl, invalidate, scene, camera } = useThree();

  useEffect(() => {
    const onModal = (e) => {
      if (e.detail.open) {
        gl.setAnimationLoop(null); // stop the RAF loop entirely
      } else {
        // Restore R3F's default managed loop
        gl.setAnimationLoop(() => {
          gl.render(scene, camera);
        });
        invalidate(); // kick R3F back into its own loop
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

// ── Role Cycler ──────────────────────────────────────────
const RoleCycler = ({ roles }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 350);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span
      style={{
        display: 'inline-block',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        color: '#F59E0B',
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
      }}
    >
      {roles[index]}
    </span>
  );
};

// ── Hero Section ─────────────────────────────────────────
const Hero = ({ data }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center pt-24 pb-12 px-6 max-w-7xl mx-auto z-10 gap-8 md:gap-0"
    >
      {/* Left — Text */}
      <div className="w-full md:w-1/2 z-20 flex flex-col items-start">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/8 border border-amber-500/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-amber-400/90 uppercase">
            {data.status}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-400 text-lg font-light mb-2 tracking-wide"
        >
          {data.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient-subtle leading-none mb-4"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          {data.name}
        </motion.h1>

        {/* Role Cycler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7"
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.9rem)',
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          <RoleCycler roles={data.roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-400 font-light leading-relaxed max-w-lg mb-10 text-base md:text-lg"
        >
          {data.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-amber-400 text-[#0A0F1E] font-semibold rounded-full hover:bg-amber-300 transition-all duration-200 shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] text-sm cursor-pointer"
          >
            {data.cta1}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-slate-300 font-semibold rounded-full border border-white/10 hover:border-amber-500/30 hover:text-white hover:bg-amber-500/5 transition-all duration-200 text-sm cursor-pointer"
          >
            {data.cta2}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden md:flex items-center gap-3 mt-16 text-slate-600"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-600" />
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        </motion.div>
      </div>

      {/* Right — 3D Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2 h-[55vw] max-h-[560px] min-h-[320px] relative"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,158,11,0.10) 0%, transparent 70%)',
          }}
        />
        <Canvas camera={{ position: [0, 0, 5.5], fov: 50 }}>
          <RenderController />
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#F59E0B" />
          <pointLight position={[-4, -4, 3]} intensity={0.4} color="#3B82F6" />
          <Suspense fallback={null}>
            <GoldIcosahedron />
          </Suspense>
        </Canvas>
      </motion.div>
    </section>
  );
};

export default Hero;
