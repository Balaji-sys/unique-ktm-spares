'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ArrowRight, Settings } from 'lucide-react'; // Added Settings for the wheel icon
import { motion } from 'framer-motion';
import Image from 'next/image';
import { bikeImages } from '@/lib/images';
import SearchBar from '@/components/ui/SearchBar';

// New Wheel Logo Animation Component
const WheelLogo = () => (
  <motion.div 
    className="relative w-16 h-16 mb-6 flex items-center justify-center"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Rotating Outer Gear */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      className="text-ktm-orange opacity-80"
    >
      <Settings size={64} strokeWidth={1} />
    </motion.div>
    
    {/* Pulsing Inner Hub */}
    <motion.div 
      className="absolute w-4 h-4 bg-ktm-orange rounded-full shadow-[0_0_15px_rgba(255,102,0,0.8)]"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    />
  </motion.div>
);


export default function HeroSection() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-ktm-black via-ktm-black-light to-ktm-black flex items-center">
      <div className="container-custom relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="text-white">
            {/* Integrated the Wheel Logo here */}
            <WheelLogo />

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Genuine{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ktm-orange to-orange-500">
                KTM Spare Parts
              </span>
              <br />
              <span className="text-white">Built for Performance Riders</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
              <span className="text-ktm-orange font-semibold">100% Genuine KTM Parts</span>{' '}
              trusted by <span className="text-white font-semibold">1000+ riders</span>. 
              Engine, brake, suspension & performance accessories available.
            </p>

            <div className="mb-8 max-w-lg">
              <SearchBar />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button variant="primary" size="lg" className="flex items-center gap-2">
                  Explore KTM Parts <ArrowRight />
                </Button>
              </Link>
              <Link href="/#services">
                <Button variant="outline" size="lg" className="opacity-80 hover:opacity-100" style={{ borderColor: 'rgba(255, 102, 0, 0.7)', color: 'rgba(255, 102, 0, 0.7)' }}>
                  Book Service
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src={bikeImages.hero}
              alt="KTM Bike"
              width={900}
              height={700}
              className="w-full h-auto object-contain"
              style={{ filter: 'drop-shadow(0 0 40px rgba(255,102,0,.6))' }}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}