'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import { Star } from 'lucide-react';
import { productImages } from '@/lib/images';
import { getFeaturedProducts } from '@/lib/products';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Get featured products from centralized data
const featuredProducts = getFeaturedProducts();

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function FeaturedProducts() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <motion.div
                    className="flex justify-between items-end mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-ktm-black mb-4">
                            Featured <span className="text-gradient-ktm">Products</span>
                        </h2>
                        <p className="text-gray-600 text-lg">
                            100% Genuine KTM Parts - Top-rated by riders across India
                        </p>
                    </div>
                    <Link href="/products" className="hidden md:block">
                        <button className="px-6 py-3 border-2 border-ktm-orange text-ktm-orange font-semibold rounded-lg hover:bg-ktm-orange hover:text-white transition-all duration-300">
                            View All
                        </button>
                    </Link>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {featuredProducts.map((product) => {
                        const imageUrl = productImages[product.id] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';

                        return (
                            <motion.div key={product.id} variants={item} whileHover={{ y: -10 }}>
                                <Card className="overflow-hidden group">
                                    {/* Product Image */}
                                    <Link href={`/products/${product.id}`}>
                                        <div className="relative bg-gray-100 aspect-square overflow-hidden cursor-pointer">
                                            <Image
                                                src={imageUrl}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />

                                            {!product.inStock && (
                                                <motion.div
                                                    className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                >
                                                    Out of Stock
                                                </motion.div>
                                            )}
                                            <motion.div
                                                className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                ✓ Genuine
                                            </motion.div>
                                        </div>
                                    </Link>

                                    {/* Product Info */}
                                    <div className="p-5">
                                        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                                            {product.model}
                                        </p>
                                        <Link href={`/products/${product.id}`}>
                                            <h3 className="font-semibold text-lg text-ktm-black mb-2 line-clamp-2 min-h-[3.5rem] hover:text-ktm-orange transition-colors cursor-pointer">
                                                {product.name}
                                            </h3>
                                        </Link>

                                        {/* Rating */}
                                        <div className="flex items-center space-x-2 mb-3">
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                <span className="text-sm font-medium ml-1">{product.rating}</span>
                                            </div>
                                            <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                                        </div>

                                        {/* Category & Stock */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-sm font-semibold text-ktm-orange bg-ktm-orange/10 px-3 py-1 rounded-full">
                                                {product.category}
                                            </span>
                                            {product.inStock ? (
                                                <span className="text-xs text-green-600 font-medium">✓ In Stock</span>
                                            ) : (
                                                <span className="text-xs text-gray-500 font-medium">Out of Stock</span>
                                            )}
                                        </div>

                                        {/* View Details Button */}
                                        <Link href={`/products/${product.id}`} className="block">
                                            <motion.button
                                                className="w-full bg-gradient-to-r from-ktm-orange to-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-ktm-orange/50 transition-all duration-300"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                View Details
                                            </motion.button>
                                        </Link>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="text-center mt-8 md:hidden">
                    <Link href="/products">
                        <button className="px-6 py-3 border-2 border-ktm-orange text-ktm-orange font-semibold rounded-lg hover:bg-ktm-orange hover:text-white transition-all duration-300">
                            View All Products
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
