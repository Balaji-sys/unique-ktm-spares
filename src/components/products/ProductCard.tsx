'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, Eye, ShoppingCart, Package } from 'lucide-react';
import { productImages } from '@/lib/images';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GeneralOrderModal from './GeneralOrderModal';

interface Product {
    id: string;
    name: string;
    category: string;
    model: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    image: string;
    inStock: boolean;
}

interface ProductCardProps {
    product: Product;
    viewMode: 'grid' | 'list';
    onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, viewMode, onQuickView }: ProductCardProps) {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const imageUrl = productImages[product.id] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    if (viewMode === 'list') {
        return (
            <ScrollReveal direction="up" className="h-full">
                <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-white/50 flex flex-col sm:flex-row gap-6 h-full overflow-hidden"
                >
                    {/* Image Section */}
                    <div className="relative w-full sm:w-64 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                        <Image
                            src={imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
                            {!product.inStock && (
                                <span className="bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                    Out of Stock
                                </span>
                            )}
                            {discount > 0 && product.inStock && (
                                <span className="bg-ktm-orange/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                    -{discount}%
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 rounded-lg bg-orange-50 text-ktm-orange text-xs font-bold tracking-wider uppercase">
                                {product.category}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                                {product.model}
                            </span>
                        </div>

                        <Link href={`/products/${product.id}`}>
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-2 group-hover:text-ktm-orange transition-colors">
                                {product.name}
                            </h3>
                        </Link>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex bg-yellow-50 px-2 py-1 rounded-lg">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-bold ml-1.5 text-gray-700">{product.rating}</span>
                            </div>
                            <span className="text-sm text-gray-400 font-medium">({product.reviews} reviews)</span>
                        </div>

                        {/* Price & Actions */}
                        <div className="flex gap-3 ml-auto">
                            <button
                                onClick={() => onQuickView?.(product)}
                                className="p-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors group/btn"
                                title="Quick View"
                            >
                                <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                            </button>
                            <button
                                onClick={() => setIsOrderModalOpen(true)}
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-ktm-orange to-orange-500 text-white font-bold hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2"
                            >
                                <Package className="w-4 h-4" />
                                Order
                            </button>
                            <Link href={`/products/${product.id}`}>
                                <button className="px-6 py-3 rounded-xl bg-ktm-black text-white font-bold hover:bg-ktm-orange transition-all shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
                                    <Eye className="w-4 h-4" />
                                    View Details
                                </button>
                            </Link>
                        </div>

                    </div>
                </motion.div>
            </ScrollReveal>
        );
    }

    // Grid View
    return (
        <>
            <ScrollReveal direction="up">
                <motion.div
                    whileHover={{ y: -8 }}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 border border-gray-100"
                >
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <Link href={`/products/${product.id}`}>
                            <Image
                                src={imageUrl}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                        </Link>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Quick Action Buttons (Hover) */}
                        <div className="absolute inset-x-0 bottom-6 flex justify-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 px-4">
                            <button
                                onClick={() => onQuickView?.(product)}
                                className="flex-1 bg-white/95 backdrop-blur-sm text-gray-900 py-3 rounded-xl font-bold text-sm shadow-xl hover:bg-ktm-orange hover:text-white transition-all flex items-center justify-center gap-2"
                            >
                                <Eye className="w-4 h-4" />
                                Quick View
                            </button>
                        </div>

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                            {discount > 0 && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="bg-ktm-orange text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                                >
                                    -{discount}%
                                </motion.span>
                            )}
                            {!product.inStock && (
                                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                    Out of Stock
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        {/* Categories */}
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-ktm-orange uppercase tracking-wider bg-orange-50 px-2 py-1 rounded-md">
                                {product.model.split(',')[0]}
                            </span>
                            <div className="flex items-center gap-1">
                                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                            </div>
                        </div>

                        {/* Title */}
                        <Link href={`/products/${product.id}`}>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-ktm-orange transition-colors min-h-[3rem]">
                                {product.name}
                            </h3>
                        </Link>

                        {/* Action Section */}
                        <div className="flex items-center justify-end gap-3 pt-2 border-t border-gray-50 mt-3">
                            <button
                                onClick={() => setIsOrderModalOpen(true)}
                                className="bg-gradient-to-r from-ktm-orange to-orange-500 text-white px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all text-sm font-bold flex items-center gap-2"
                            >
                                <Package className="w-4 h-4" />
                                Order
                            </button>
                            <Link href={`/products/${product.id}`}>
                                <button className="bg-ktm-black text-white px-4 py-2 rounded-xl hover:bg-ktm-orange transition-colors shadow-lg text-sm font-bold flex items-center gap-2">
                                    <Eye className="w-4 h-4" />
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </ScrollReveal>

            {/* Order Modal */}
            <GeneralOrderModal
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
                preSelectedProduct={product.name}
            />
        </>
    );
}
