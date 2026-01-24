'use client';

import React from 'react';
import { Shield, Truck, Headphones, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const badges = [
    {
        icon: Shield,
        title: 'Genuine Parts',
        description: '100% Authentic KTM',
    },
    {
        icon: Truck,
        title: 'Fast Delivery',
        description: 'Pan India Shipping',
    },
    {
        icon: Headphones,
        title: '24/7 Support',
        description: 'Expert Assistance',
    },
    {
        icon: Award,
        title: 'Warranty',
        description: 'Quality Guaranteed',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function TrustBadges() {
    return (
        <section className="py-12 bg-gray-50 relative z-0">
            <div className="container-custom">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {badges.map((badge) => (
                        <motion.div
                            key={badge.title}
                            variants={item}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="flex flex-col items-center text-center p-6 cursor-pointer group"
                        >
                            <motion.div
                                className="w-16 h-16 bg-ktm-orange/10 rounded-full flex items-center justify-center mb-4"
                                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <badge.icon className="w-8 h-8 text-ktm-orange" />
                            </motion.div>
                            <h3 className="font-display font-semibold text-lg text-ktm-black mb-1 group-hover:text-ktm-orange transition-colors">
                                {badge.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{badge.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
