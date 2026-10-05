import React, { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Float, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';
import ErrorBoundary from '../ErrorBoundary';

// Procedural Premium Cubist Shoe Sculpture (Zero Network Dependencies)
function ProceduralShoe(props: any) {
  const ref = useRef<THREE.Group>(null);
  
  // Subtle auto-rotation and floating
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1 - 0.2;
    }
  });

  return (
    <group ref={ref} {...props}>
      {/* Elegant minimalist shoe structure */}
      
      {/* Sole (Gold) */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[2.4, 0.08, 0.8]} />
        <meshPhysicalMaterial color={0xd4af37} metalness={1} roughness={0.2} clearcoat={1} />
      </mesh>

      {/* Heel (Gold) */}
      <mesh position={[-0.9, -0.1, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.75]} />
        <meshPhysicalMaterial color={0xd4af37} metalness={1} roughness={0.2} clearcoat={1} />
      </mesh>

      {/* Main Body (Matte Black) */}
      <mesh position={[-0.1, 0.2, 0]}>
        <boxGeometry args={[1.8, 0.6, 0.78]} />
        <meshPhysicalMaterial color={0x111111} metalness={0.5} roughness={0.8} />
      </mesh>

      {/* Toe Box (Matte Black, Sloped) */}
      <mesh position={[0.9, 0.05, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <boxGeometry args={[0.7, 0.45, 0.78]} />
        <meshPhysicalMaterial color={0x111111} metalness={0.5} roughness={0.8} />
      </mesh>

      {/* High Top / Collar (Glossy Black) */}
      <mesh position={[-0.5, 0.7, 0]}>
        <cylinderGeometry args={[0.35, 0.45, 0.6, 32]} />
        <meshPhysicalMaterial color={0x0a0a0a} metalness={0.8} roughness={0.2} clearcoat={1} />
      </mesh>
      
      {/* Decorative Gold Accent Stripe */}
      <mesh position={[0.2, 0.2, 0.4]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.8, 0.05, 0.05]} />
        <meshPhysicalMaterial color={0xd4af37} metalness={1} roughness={0.1} emissive={0xd4af37} emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.2, 0.2, -0.4]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.8, 0.05, 0.05]} />
        <meshPhysicalMaterial color={0xd4af37} metalness={1} roughness={0.1} emissive={0xd4af37} emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-black">
      
      {/* 3D Canvas Background */}
      <ErrorBoundary>
        <div className="absolute inset-0 z-0 opacity-80 mt-10 md:mt-0">
          <Canvas camera={{ position: [0, 0, 4], fov: 40 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Suspense fallback={null}>
              <Environment preset="city" />
              <PresentationControls 
                global 
                zoom={0.8} 
                rotation={[0, -Math.PI / 4, 0]} 
                polar={[-Math.PI / 4, Math.PI / 4]} 
                azimuth={[-Math.PI / 4, Math.PI / 4]}
              >
                <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                  <ProceduralShoe scale={1.5} position={[0, -0.2, 0]} />
                </Float>
              </PresentationControls>
              {/* Simple robust shadow instead of ContactShadows to prevent WebGL crashes */}
              <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry args={[1.5, 32]} />
                <meshBasicMaterial color="#000000" transparent opacity={0.3} />
              </mesh>
            </Suspense>
          </Canvas>
        </div>
      </ErrorBoundary>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between pointer-events-none mt-20">
        
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[1px] bg-brand-gold"></span>
            <span className="text-brand-gold uppercase tracking-[0.3em] text-xs font-semibold">Premium Footwear</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-brand-gray-light leading-[1.1] mb-6"
          >
            Step Into <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light italic pr-4">Excellence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-brand-gray-light/70 text-lg max-w-md mb-10 font-light"
          >
            Crafted for style, designed for comfort. Explore Burhar's finest collection of premium footwear for every occasion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4 pointer-events-auto"
          >
            <a href="#collections" className="premium-btn">Explore Collection</a>
            <a href="#store" className="premium-btn-outline">Visit Store</a>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-gray-light/40">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
