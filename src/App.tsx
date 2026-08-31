import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Programs from './pages/Programs';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    // Redirect to default home route hash if empty on load
    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo(0, 0); // Scroll to top on page change
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    // Normalize hash: lowercase and remove the forward slash (e.g. #/about -> #about)
    const hash = currentHash.toLowerCase().replace('#/', '#');
    if (hash === '#about') return <About />;
    if (hash === '#services') return <Services />;
    if (hash === '#programs') return <Programs />;
    if (hash === '#why-us') return <WhyChooseUs />;
    if (hash === '#contact') return <Contact />;
    return <Home />; // Default fallback
  };

  return (
    <div className="min-h-screen bg-brand-gray flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHash}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
