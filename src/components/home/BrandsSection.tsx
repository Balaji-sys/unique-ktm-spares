'use client';

import React from 'react';
import { motion } from 'framer-motion';

const models = [
    {
        name: 'Duke 200',
        modelNo: '200 Duke',
        image: '/images/products/duke-200.jpg',
    },
    {
        name: 'Duke 250',
        modelNo: '250 Duke',
        image: '/images/products/duke-250.avif',
    },
    {
        name: 'Duke 390',
        modelNo: '390 Duke',
        image: '/images/products/duke-390.webp',
    },
    {
        name: 'RC 200',
        modelNo: '200 RC',
        image: '/images/products/rc-200.webp',
    },
    {
        name: 'RC 390',
        modelNo: '390 RC',
        image: '/images/products/rc-390.avif',
    },
    {
        name: 'Adventure 390',
        modelNo: '390 Adventure',
        image: '/images/products/adventure-390.avif',
    },
];

export default function BrandsSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ktm-black mb-4">
                        Models for Parts We <span className="text-gradient-ktm">Provide</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Genuine spare parts available for all popular KTM models
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {models.map((model, index) => (
                        <motion.div
                            key={model.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group"
                        >
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-ktm-orange to-orange-600 flex items-center justify-center p-1 mb-4 group-hover:shadow-2xl transition-shadow overflow-hidden">
                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden p-2">
                                    <img
                                        src={model.image}
                                        alt={model.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-ktm-black text-center">{model.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{model.modelNo}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
