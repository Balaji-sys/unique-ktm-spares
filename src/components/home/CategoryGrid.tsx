'use client';

import React from 'react';
import Link from 'next/link';
import { Settings, Disc, Zap, Cpu, Wrench, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
    {
        name: 'Engine Parts',
        icon: Cpu,
        count: 450,
        color: 'from-orange-500 to-red-500',
        link: '/products?category=engine',
    },
    {
        name: 'Brakes',
        icon: Disc,
        count: 280,
        color: 'from-red-500 to-pink-500',
        link: '/products?category=brakes',
    },
    {
        name: 'Suspension',
        icon: Settings,
        count: 320,
        color: 'from-orange-500 to-yellow-500',
        link: '/products?category=suspension',
    },
    {
        name: 'Electrical',
        icon: Zap,
        count: 200,
        color: 'from-yellow-500 to-orange-500',
        link: '/products?category=electrical',
    },
    {
        name: 'Maintenance',
        icon: Wrench,
        count: 180,
        color: 'from-orange-600 to-red-600',
        link: '/products?category=maintenance',
    },
    {
        name: 'Accessories',
        icon: Package,
        count: 350,
        color: 'from-red-600 to-orange-600',
        link: '/products?category=accessories',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

export default function CategoryGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ktm-black mb-4">
                        Shop by <span className="text-gradient-ktm">Category</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Find the perfect parts for your KTM beast. Browse our extensive collection
                        organized by component type.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <Link key={category.name} href={category.link}>
                            <motion.div
                                variants={item}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(255, 102, 0, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="card p-8 transition-all duration-300 cursor-pointer group"
                            >
                                <motion.div
                                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center 
                             justify-center mb-4`}
                                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <category.icon className="w-8 h-8 text-white" />
                                </motion.div>
                                <h3 className="font-display font-semibold text-xl text-ktm-black mb-2 
                             group-hover:text-ktm-orange transition-colors">
                                    {category.name}
                                </h3>
                                <motion.p
                                    className="text-gray-600 text-sm"
                                    initial={{ opacity: 0.7 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {category.count}+ Products
                                </motion.p>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
