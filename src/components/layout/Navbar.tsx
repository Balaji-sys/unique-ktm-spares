'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);




    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-white/90 backdrop-blur-sm'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <motion.h1
                                className="text-2xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-ktm-orange to-orange-500"
                                whileHover={{ scale: 1.05 }}
                            >
                                UNIQUE KTM SPARES
                            </motion.h1>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-gray-700 hover:text-ktm-orange transition-colors font-medium relative group">
                                Home
                                <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ktm-orange group-hover:w-full transition-all duration-300" />
                            </Link>
                            <Link href="/products" className="text-gray-700 hover:text-ktm-orange transition-colors font-medium relative group">
                                Products
                                <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ktm-orange group-hover:w-full transition-all duration-300" />
                            </Link>
                            <Link href="/services" className="text-gray-700 hover:text-ktm-orange transition-colors font-medium relative group">
                                Services
                                <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ktm-orange group-hover:w-full transition-all duration-300" />
                            </Link>
                            <button
                                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                                className="text-gray-700 hover:text-ktm-orange transition-colors font-medium relative group"
                            >
                                Contact
                                <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ktm-orange group-hover:w-full transition-all duration-300" />
                            </button>
                        </div>

                        {/* Desktop Right Section */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link href="/#services">
                                <motion.button
                                    className="bg-gradient-to-r from-ktm-orange to-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Book Service
                                </motion.button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <motion.button
                                className="p-2 hover:bg-gray-100 rounded-lg"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AnimatePresence mode="wait">
                                    {mobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90 }}
                                            animate={{ rotate: 0 }}
                                            exit={{ rotate: 90 }}
                                        >
                                            <X className="w-6 h-6 text-gray-700" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90 }}
                                            animate={{ rotate: 0 }}
                                            exit={{ rotate: -90 }}
                                        >
                                            <Menu className="w-6 h-6 text-gray-700" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden bg-white border-t border-gray-200"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="container-custom py-4 space-y-2">
                                <Link
                                    href="/"
                                    className="block px-4 py-3 hover:bg-ktm-orange/10 rounded-lg transition-colors font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/products"
                                    className="block px-4 py-3 hover:bg-ktm-orange/10 rounded-lg transition-colors font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Products
                                </Link>
                                <Link
                                    href="/services"
                                    className="block px-4 py-3 hover:bg-ktm-orange/10 rounded-lg transition-colors font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Services
                                </Link>
                                <button
                                    onClick={() => {
                                        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                                        setMobileMenuOpen(false);
                                    }}
                                    className="block w-full text-left px-4 py-3 hover:bg-ktm-orange/10 rounded-lg transition-colors font-medium"
                                >
                                    Contact
                                </button>
                                <Link
                                    href="/#services"
                                    className="block px-4 py-3 bg-ktm-orange text-white rounded-lg font-semibold text-center"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Book Service
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>


        </>
    );
}
