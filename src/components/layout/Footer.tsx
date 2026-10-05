import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/assets/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full border border-brand-gold/30" />
              <div>
                <h3 className="font-heading font-bold text-xl text-brand-gray-light">NAVEEN</h3>
                <p className="font-sans text-xs tracking-widest text-brand-gold uppercase">Boot House</p>
              </div>
            </div>
            <p className="text-brand-gray-light/60 text-sm leading-relaxed">
              Establishing trust and delivering premium footwear to the community since 1973.
            </p>
          </div>

          {/* Links Col */}
          <div className="md:col-span-1">
            <h4 className="font-heading text-lg text-brand-gray-light mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#collections" className="text-brand-gray-light/60 hover:text-brand-gold text-sm transition-colors">Collections</a></li>
              <li><a href="#brand" className="text-brand-gray-light/60 hover:text-brand-gold text-sm transition-colors">Our Heritage</a></li>
              <li><a href="#store" className="text-brand-gray-light/60 hover:text-brand-gold text-sm transition-colors">Visit Store</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-1">
            <h4 className="font-heading text-lg text-brand-gray-light mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brand-gray-light/60 text-sm">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" />
                <span>Railway Market, Burhar<br/>Madhya Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 text-brand-gray-light/60 text-sm">
                <Phone size={18} className="text-brand-gold shrink-0" />
                <a href="tel:+917000451211" className="hover:text-brand-gold transition-colors">+91 70004 51211</a>
              </li>
            </ul>
          </div>

          {/* Action Col */}
          <div className="md:col-span-1 flex flex-col items-start">
            <h4 className="font-heading text-lg text-brand-gray-light mb-6">Direct Inquiry</h4>
            <a href="https://wa.me/917000451211" target="_blank" rel="noreferrer" className="flex items-center gap-2 premium-btn-outline w-full justify-center">
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray-light/40 text-xs">
            &copy; {new Date().getFullYear()} Naveen Boot House. All rights reserved.
          </p>
          <p className="text-brand-gray-light/40 text-xs flex items-center gap-1">
            Designed by <a href="https://wa.me/916267686575" className="text-brand-gray-light/60 hover:text-brand-gold transition-colors">Krishn Gupta</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
