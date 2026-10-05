import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Gem, Users, ShoppingBag } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Trusted Local Store',
    description: 'Serving the Burhar community since 1973 with uncompromising honesty.'
  },
  {
    icon: <Gem size={32} strokeWidth={1.5} />,
    title: 'Premium Quality',
    description: 'Curated selections of the finest materials and masterful craftsmanship.'
  },
  {
    icon: <ShoppingBag size={32} strokeWidth={1.5} />,
    title: 'Wide Selection',
    description: 'From formal leather to casual sneakers, we have styles for every occasion.'
  },
  {
    icon: <Users size={32} strokeWidth={1.5} />,
    title: 'Personal Assistance',
    description: 'Our experienced staff helps you find the perfect fit and style.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 md:py-32 bg-brand-dark border-t border-b border-white/5 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl text-brand-gray-light"
          >
            The Naveen <span className="italic text-brand-gold">Standard</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-black transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl text-brand-gray-light mb-4">{feature.title}</h3>
              <p className="text-brand-gray-light/60 font-light text-sm leading-relaxed max-w-[250px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
