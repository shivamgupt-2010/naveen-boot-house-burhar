import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'men', name: 'Men', image: '/assets/leather_boot.png', colSpan: 'md:col-span-2' },
  { id: 'women', name: 'Women', image: '/assets/womens_block_heels.png', colSpan: 'md:col-span-1' },
  { id: 'sports', name: 'Sports', image: '/assets/skechers_runner.png', colSpan: 'md:col-span-1' },
  { id: 'school', name: 'School', image: '/assets/action_school.png', colSpan: 'md:col-span-2' },
];

const CategoryExperience = () => {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl text-brand-gray-light mb-4"
          >
            Curated <span className="italic text-brand-gold">Collections</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-gray-light/50 tracking-widest uppercase text-sm"
          >
            Find your perfect fit
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-brand-black rounded-sm aspect-[4/3] md:aspect-auto ${cat.colSpan} cursor-pointer`}
            >
              {/* Image with extreme zoom on hover */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover object-center opacity-60 group-hover:opacity-40 transition-opacity duration-500" 
                  onError={(e) => {
                    // Fallback to a gradient if image fails
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(45deg, #121212, #2a2a2a)';
                  }}
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-heading text-3xl text-brand-gray-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {cat.name}
                </h3>
                <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-500 ease-out">
                  <span className="text-brand-gold text-sm tracking-widest uppercase flex items-center gap-2">
                    Explore <span className="text-lg leading-none">&rarr;</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryExperience;
