import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, Stage, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import ErrorBoundary from '../ErrorBoundary';

// Procedural Premium Cubist Shoe Sculpture (Zero Network Dependencies)
// White and Gold theme for the Interactive Showcase
function Shoe(props: any) {
  const ref = useRef<THREE.Group>(null);
  
  // Subtle auto-rotation
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={ref} {...props}>
      {/* Elegant minimalist shoe structure - White & Gold */}
      
      {/* Sole (Light Gray) */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[2.4, 0.08, 0.8]} />
        <meshPhysicalMaterial color={0xeeeeee} roughness={0.8} />
      </mesh>

      {/* Heel (Light Gray) */}
      <mesh position={[-0.9, -0.1, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.75]} />
        <meshPhysicalMaterial color={0xeeeeee} roughness={0.8} />
      </mesh>

      {/* Main Body (Premium White Leather) */}
      <mesh position={[-0.1, 0.2, 0]}>
        <boxGeometry args={[1.8, 0.6, 0.78]} />
        <meshPhysicalMaterial color={0xffffff} roughness={0.2} clearcoat={0.5} />
      </mesh>

      {/* Toe Box (White, Sloped) */}
      <mesh position={[0.9, 0.05, 0]} rotation={[0, 0, -Math.PI / 8]}>
        <boxGeometry args={[0.7, 0.45, 0.78]} />
        <meshPhysicalMaterial color={0xffffff} roughness={0.2} clearcoat={0.5} />
      </mesh>

      {/* High Top / Collar (White) */}
      <mesh position={[-0.5, 0.7, 0]}>
        <cylinderGeometry args={[0.35, 0.45, 0.6, 32]} />
        <meshPhysicalMaterial color={0xffffff} roughness={0.5} />
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

const InteractiveShowcase = () => {
  return (
    <section className="h-screen min-h-[700px] w-full bg-brand-gray relative flex items-center justify-center overflow-hidden">
      
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-5">
        <h2 className="font-heading text-[20vw] whitespace-nowrap text-white leading-none">SIGNATURE</h2>
      </div>

      <div className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing">
        <ErrorBoundary>
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <Environment preset="studio" />
              <PresentationControls 
                speed={1.5} 
                global 
                zoom={0.7} 
                polar={[-0.1, Math.PI / 4]}
              >
                <Stage environment={null} intensity={0.5} shadows={false}>
                  <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <Shoe />
                  </Float>
                </Stage>
              </PresentationControls>
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>

      {/* Interactive Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-brand-black/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-2"
        >
          <span className="text-brand-gray-light text-xs tracking-widest uppercase">Drag to Rotate</span>
        </motion.div>
      </div>

    </section>
  );
};

export default InteractiveShowcase;
