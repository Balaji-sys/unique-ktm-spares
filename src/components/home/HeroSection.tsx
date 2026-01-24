'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Zap, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { bikeImages } from '@/lib/images';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SearchBar from '@/components/ui/SearchBar';

export default function HeroSection() {
    const ref = useRef(null);

    return (
        <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-ktm-black via-ktm-black-light to-ktm-black flex items-center">
            {/* Background Wrapper */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Animated Grid Background */}
                <motion.div
                    className="absolute inset-0 opacity-10"
                >
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FF6600' stroke-width='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }} />
                </motion.div>

                {/* Floating Particles - Fixed positions to avoid hydration errors */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-ktm-orange rounded-full"
                        style={{
                            left: `${(i * 13 + 17) % 100}%`,
                            top: `${(i * 23 + 31) % 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 3 + (i % 3),
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}

                {/* Animated Background Orbs */}
                <motion.div
                    className="absolute inset-0"
                >
                    <motion.div
                        className="absolute top-20 right-20 w-96 h-96 bg-ktm-orange rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            rotate: [0, 90, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-20 left-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.4, 1],
                            x: [0, -80, 0],
                            y: [0, 80, 0],
                            rotate: [0, -90, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>

            <div className="container-custom relative z-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        {/* Badge with Animation */}
                        <motion.div
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-ktm-orange/30 to-orange-500/30 px-6 py-3 rounded-full mb-8 backdrop-blur-md border border-ktm-orange/30"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, type: "spring" }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 102, 0, 0.5)" }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            >
                                <Sparkles className="w-5 h-5 text-ktm-orange" />
                            </motion.div>
                            <span className="text-sm font-semibold text-white tracking-wide">READY TO RACE</span>
                            <Zap className="w-4 h-4 text-ktm-orange" />
                        </motion.div>

                        {/* Main Heading with Stagger */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
                                <motion.span
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                >
                                    Genuine{' '}
                                </motion.span>
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-ktm-orange via-orange-500 to-ktm-orange-light"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                                >
                                    KTM Parts
                                </motion.span>
                                <br />
                                <motion.span
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                >
                                    For Your Beast
                                </motion.span>
                            </h1>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <span className="font-semibold text-ktm-orange">100% Genuine KTM Parts</span> - All types available:
                            Engine, Brakes, Suspension, Electrical & Accessories. Professional service for all KTM models.
                        </motion.p>

                        {/* Search Bar */}
                        <motion.div
                            className="mb-8 max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                        >
                            <SearchBar />
                        </motion.div>

                        {/* CTA Buttons - Enhanced */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <Link href="/products">
                                <motion.div
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-ktm-orange to-orange-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300" />
                                    <Button variant="primary" size="lg" className="relative w-full sm:w-auto flex items-center justify-center">
                                        Browse Parts
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </motion.div>
                                    </Button>
                                </motion.div>
                            </Link>
                            <Link href="/#services">
                                <motion.div
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-2 border-white hover:bg-white hover:text-ktm-black transition-all duration-300">
                                        Book Service
                                    </Button>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Content - KTM Bike with 3D Effect */}
                    <motion.div
                        className="relative perspective-1000"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    >
                        <div className="relative">
                            {/* Animated Glow Ring */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-ktm-orange via-orange-500 to-ktm-orange rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                    rotate: 360
                                }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />

                            {/* Bike Image with Hover 3D Effect */}
                            <motion.div
                                className="relative rounded-2xl overflow-hidden"
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 10,
                                    rotateX: 5,
                                    transition: { duration: 0.3 }
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <Image
                                    src={bikeImages.hero}
                                    alt="KTM Duke Motorcycle"
                                    width={900}
                                    height={700}
                                    className="w-full h-auto object-contain"
                                    style={{
                                        filter: 'drop-shadow(0 0 60px rgba(255, 102, 0, 0.8))',
                                        transform: "translateZ(50px)"
                                    }}
                                    priority
                                />

                                {/* Shine Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                                    animate={{
                                        x: ['-100%', '200%'],
                                        opacity: [0, 0.3, 0]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                />
                            </motion.div>
                        </div>


                        {/* Floating Stats Card - Genuine Parts */}
                        <motion.div
                            className="absolute -bottom-16 -left-16 bg-white rounded-2xl p-6 shadow-2xl hidden lg:block"
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 1.6, type: "spring" }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <div className="flex items-center space-x-4">
                                <motion.div
                                    className="bg-gradient-to-br from-ktm-orange to-orange-500 p-4 rounded-xl"
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <motion.p
                                        className="text-3xl font-bold text-ktm-black"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.8, type: "spring" }}
                                    >
                                        <AnimatedCounter value={2000} suffix="+" duration={2.5} />
                                    </motion.p>
                                    <p className="text-gray-600 text-sm font-medium">Genuine Parts</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Stats Card - Satisfied Customers */}
                        <motion.div
                            className="absolute -top-12 -right-12 bg-white rounded-2xl p-6 shadow-2xl hidden lg:block"
                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 1.8, type: "spring" }}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                        >
                            <div className="flex items-center space-x-4">
                                <motion.div
                                    className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-xl"
                                    animate={{
                                        rotate: [0, -10, 10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                >
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <motion.p
                                        className="text-3xl font-bold text-ktm-black"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 2.0, type: "spring" }}
                                    >
                                        <AnimatedCounter value={1000} suffix="+" duration={2.5} />
                                    </motion.p>
                                    <p className="text-gray-600 text-sm font-medium">Satisfied Customers</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center"
                >
                    <span className="text-white/60 text-sm mb-2 font-medium">Scroll to explore</span>
                    <motion.div
                        className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2"
                        whileHover={{ borderColor: "#FF6600" }}
                    >
                        <motion.div
                            className="w-1.5 h-3 bg-ktm-orange rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
