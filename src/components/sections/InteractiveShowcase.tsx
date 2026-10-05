import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, Stage, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function Shoe(props: any) {
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/shoe-draco/model.gltf') as any;
  const ref = useRef<THREE.Group>(null);
  
  // Create a stunning white/gold sneaker for this showcase
  React.useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((mat: any) => {
        // Base white leather
        if (mat.name === 'laces' || mat.name === 'mesh' || mat.name === 'caps' || mat.name === 'inner' || mat.name === 'patch') {
          mat.color.setHex(0xffffff);
          mat.roughness = 0.5;
        }
        // Sole
        if (mat.name === 'sole') {
          mat.color.setHex(0xeeeeee);
        }
        // Gold accents
        if (mat.name === 'stripes' || mat.name === 'band') {
          mat.color.setHex(0xd4af37);
          mat.roughness = 0.1;
          mat.metalness = 1.0;
        }
      });
    }
  }, [materials]);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
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
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <Environment preset="studio" />
            <PresentationControls 
              speed={1.5} 
              global 
              zoom={0.7} 
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage environment={null} intensity={0.5} shadows={{ type: 'contact', opacity: 0.8, blur: 3 }}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                  <Shoe />
                </Float>
              </Stage>
            </PresentationControls>
          </Suspense>
        </Canvas>
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
