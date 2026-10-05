import React from 'react';
import { motion } from 'framer-motion';

const BrandIntro = () => {
  return (
    <section id="brand" className="py-24 md:py-32 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Image/Graphic */}
        <div className="w-full md:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="aspect-[4/5] relative overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay z-10" />
            <img 
              src="/assets/naveen_storefront.png" 
              alt="Naveen Boot House Heritage" 
              className="w-full h-full object-cover filter grayscale-[30%] contrast-125"
            />
          </motion.div>
          {/* Accent Element */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -bottom-8 -right-8 w-48 h-48 border border-brand-gold/30 rounded-full flex items-center justify-center p-4 bg-brand-dark backdrop-blur-sm shadow-2xl"
          >
             <div className="w-full h-full border border-brand-gold border-dashed rounded-full flex flex-col items-center justify-center text-center">
                <span className="text-brand-gold font-heading text-3xl italic">1973</span>
                <span className="text-[9px] uppercase tracking-widest text-brand-gray-light/60 mt-1">Established</span>
             </div>
          </motion.div>
        </div>

        {/* Right: Typography & Content */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-brand-gray-light mb-8 leading-tight">
              A Legacy of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-[#fff] italic pr-4">Craftsmanship</span>
            </h2>
            
            <p className="text-brand-gray-light/60 text-lg mb-6 font-light leading-relaxed">
              For over five decades, Naveen Boot House has been the cornerstone of premium footwear in Burhar. What began as a humble storefront has evolved into a symbol of uncompromising quality and trust.
            </p>
            
            <p className="text-brand-gray-light/60 text-lg mb-10 font-light leading-relaxed">
              We curate collections that bridge the gap between timeless elegance and modern comfort, ensuring that every step you take is supported by excellence.
            </p>

            <a href="#store" className="inline-flex items-center gap-3 text-brand-gold uppercase tracking-widest text-sm font-semibold group hover:text-white transition-colors duration-300">
              <span className="w-8 h-[1px] bg-brand-gold group-hover:w-12 transition-all duration-300"></span>
              Visit Our Store
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BrandIntro;
