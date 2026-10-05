import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

const FeaturedCollection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        // Show only the first 8 products for the featured section
        setProducts(data.slice(0, 8));
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  return (
    <section id="collections" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl text-brand-gray-light mb-4"
            >
              Featured <span className="italic text-brand-gold">Arrivals</span>
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://wa.me/917000451211" 
            target="_blank" 
            rel="noreferrer"
            className="text-brand-gray-light/60 hover:text-brand-gold uppercase tracking-widest text-sm flex items-center gap-2 transition-colors"
          >
            Order via WhatsApp <span className="text-xl leading-none">&rarr;</span>
          </motion.a>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 text-brand-gray-light/40">
            <p>New collections arriving soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] bg-brand-dark rounded-sm overflow-hidden mb-6">
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x500/121212/d4af37?text=Naveen';
                    }}
                  />

                  {/* Add to cart / Buy button overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                    <a 
                      href={`https://wa.me/917000451211?text=Hi! I am interested in buying ${encodeURIComponent(product.name)} from your website.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-brand-gold text-brand-black py-3 font-semibold uppercase tracking-wider text-xs"
                    >
                      <ShoppingBag size={16} />
                      Enquire Now
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center px-4">
                  <span className="text-[10px] text-brand-gray-light/40 uppercase tracking-widest mb-2">{product.category}</span>
                  <h3 className="font-heading text-lg text-brand-gray-light group-hover:text-brand-gold transition-colors duration-300 line-clamp-1">{product.name}</h3>
                  {product.price && product.price !== '0' && (
                    <p className="mt-2 text-brand-gray-light/80 font-medium tracking-wide">₹{product.price}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCollection;
