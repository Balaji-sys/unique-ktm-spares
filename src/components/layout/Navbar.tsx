'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = (path: string) => {
    const basePath = path.split('#')[0];
    const isActive = pathname === basePath;
    return `font-medium transition-colors relative ${isActive ? 'text-ktm-orange after:w-full' : 'text-gray-700 hover:text-ktm-orange'} after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-ktm-orange after:w-0 hover:after:w-full after:transition-all`;
  };

  return (
    <motion.nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur'
        }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ktm-orange to-orange-500">
            UNIQUE KTM SPARES
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/products" className={linkClass('/products')}>Products</Link>
            <Link href="/services" className={linkClass('/services')}>Services</Link>
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="font-medium text-gray-700 hover:text-ktm-orange"
            >
              Contact
            </button>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/#services" className="bg-ktm-orange text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition">
              Book Service
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      



      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-6 py-4 space-y-3">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`${linkClass('/')} block py-3 text-base transition-colors duration-200`}>Home</Link>
              <Link href="/products" onClick={() => setMobileMenuOpen(false)} className={`${linkClass('/products')} block py-3 text-base transition-colors duration-200`}>Products</Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={`${linkClass('/services')} block py-3 text-base transition-colors duration-200`}>Services</Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={`${linkClass('/services')} block py-3 text-base transition-colors duration-200`}>Book Service</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Active link highlight ensured via pathname match
