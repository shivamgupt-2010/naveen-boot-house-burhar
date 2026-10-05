import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

const StoreExperience = () => {
  return (
    <section id="store" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-4xl md:text-6xl text-brand-gray-light mb-8 leading-tight">
                Experience it <br/>
                <span className="italic text-brand-gold">in Person</span>
              </h2>
              
              <p className="text-brand-gray-light/60 text-lg mb-12 font-light leading-relaxed max-w-lg">
                Step into our Burhar showroom to explore our entire collection. Feel the materials, experience the comfort, and let our experts guide you to the perfect pair.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-brand-gray-light mb-1">Location</h4>
                    <p className="text-brand-gray-light/60 font-light text-sm">Railway Market, Burhar<br/>Madhya Pradesh, 484110<br/>India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-brand-gray-light mb-1">Hours</h4>
                    <p className="text-brand-gray-light/60 font-light text-sm">Monday - Saturday: 10:00 AM - 9:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://goo.gl/maps/something" 
                target="_blank"
                rel="noreferrer"
                className="premium-btn inline-flex"
              >
                Get Directions
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px]">
             {/* Editorial Image Composition */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95, y: 20 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="absolute inset-0 bg-brand-dark overflow-hidden rounded-sm border border-white/5"
             >
                <img 
                  src="/assets/naveen_storefront.png" 
                  alt="Naveen Boot House Storefront" 
                  className="w-full h-full object-cover opacity-80"
                />
             </motion.div>

             {/* Floating Info Box */}
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="absolute -left-6 bottom-12 md:-left-12 glass-panel p-6 md:p-8 max-w-[250px]"
             >
                <h4 className="font-heading text-lg text-brand-gray-light mb-2">Since 1973</h4>
                <p className="text-brand-gray-light/60 text-xs leading-relaxed">
                  Over 50 years of outfitting our community with the finest footwear.
                </p>
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default StoreExperience;
