import React, { Suspense, lazy, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy loaded components for better performance
const Hero = lazy(() => import('./components/sections/Hero'));
const Navbar = lazy(() => import('./components/layout/Navbar'));
const BrandIntro = lazy(() => import('./components/sections/BrandIntro'));
const CategoryExperience = lazy(() => import('./components/sections/CategoryExperience'));
const FeaturedCollection = lazy(() => import('./components/sections/FeaturedCollection'));
const InteractiveShowcase = lazy(() => import('./components/sections/InteractiveShowcase'));
const StoreExperience = lazy(() => import('./components/sections/StoreExperience'));
const WhyChooseUs = lazy(() => import('./components/sections/WhyChooseUs'));
const Footer = lazy(() => import('./components/layout/Footer'));

// A simple loading screen
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-brand-black z-[100] flex items-center justify-center flex-col">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-24 h-24 rounded-full border-4 border-brand-gray border-t-brand-gold animate-spin mb-8"
    />
    <motion.h1 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="font-heading text-2xl text-brand-gold tracking-widest uppercase"
    >
      Naveen
    </motion.h1>
  </div>
);

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Artificial minimum load time to show off the loader and wait for 3D assets to start loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loader" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Suspense fallback={<LoadingScreen />}>
                <Navbar />
                <main>
                  <Hero />
                  <BrandIntro />
                  <CategoryExperience />
                  <InteractiveShowcase />
                  <FeaturedCollection />
                  <WhyChooseUs />
                  <StoreExperience />
                </main>
                <Footer />
              </Suspense>
            </motion.div>
          )}
        </AnimatePresence>
      </ErrorBoundary>
    </div>
  );
}

export default App;
