'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wrench, Disc, Shield, Backpack, Lightbulb, Settings } from 'lucide-react';

const categories = [
    {
        name: 'Performance parts',
        icon: Wrench,
        image: '/images/products/piston-kit.jpg',
        link: '/products?category=Engine%20%26%20Transmission',
    },
    {
        name: 'Brake System',
        icon: Disc,
        image: '/images/products/front-brake-disc-320mm.jpg',
        link: '/products?category=Brakes%20%26%20Wheels',
    },
    {
        name: 'Lights & electronics',
        icon: Lightbulb,
        image: '/images/products/headlight-assembly.jpg',
        link: '/products?category=Electrical%20%26%20Lighting',
    },
    {
        name: 'Suspension & Steering',
        icon: Shield,
        image: '/images/products/front-fork-assembly.png',
        link: '/products?category=Suspension%20%26%20Steering',
    },
    {
        name: 'Service Parts',
        icon: Settings,
        image: '/images/products/oil-filter.jpg',
        link: '/products?category=Service%20Parts',
    },
];

export default function CategorySection() {
    return (
        <section className="py-16 bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ktm-black mb-4">
                        What Are You <span className="text-gradient-ktm">Looking For Today?</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <Link key={category.name} href={category.link}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.05 }}
                                    className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                                >
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${category.image})` }}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
                                        <Icon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                                        <h3 className="text-sm md:text-base font-semibold text-center">
                                            {category.name}
                                        </h3>
                                    </div>

                                    {/* Hover border effect */}
                                    <div className="absolute inset-0 border-2 border-ktm-orange opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
