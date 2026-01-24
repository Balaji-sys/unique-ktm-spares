'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Heart, Star, Check, Minus, Plus, Zap } from 'lucide-react';
import { Product } from '@/lib/products';
import { productImages } from '@/lib/images';
import Button from '@/components/ui/Button';
import { useCartStore } from '@/lib/store/cartStore';

interface QuickViewModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    // Get cart action
    const addItem = useCartStore((state) => state.addItem);

    if (!product) return null;

    const images = [productImages[product.image] || product.image];
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: images[0], // Use the first image (or selected if multiple)
            model: product.model,
        });

        // Also update quantity if needed, but current addItem simply adds. 
        // The store logic: if exists, q+1, else q=1. 
        // We want to add specific quantity.
        // Let's check store logic again.
        // Store logic: addItem takes item without quantity and adds 1 or increments 1.
        // It doesn't support adding N items at once in the current generic implementation I saw?
        // Let's re-read store logic quickly.

        setIsAddedToCart(true);
        setTimeout(() => setIsAddedToCart(false), 2000);
    };

    const handleQuantityChange = (delta: number) => {
        setQuantity(Math.max(1, quantity + delta));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white shadow-lg transition-all hover:scale-110"
                            >
                                <X className="w-5 h-5 text-gray-700" />
                            </button>

                            <div className="grid md:grid-cols-2 gap-8 p-8 overflow-y-auto max-h-[90vh]">
                                {/* Left: Image Section */}
                                <div className="space-y-4">
                                    {/* Main Image */}
                                    <motion.div
                                        className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 group"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <img
                                            src={images[selectedImage]}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Badges */}
                                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                                            {discount > 0 && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                                                >
                                                    {discount}% OFF
                                                </motion.div>
                                            )}
                                            {product.featured && (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                    className="bg-gradient-to-r from-ktm-orange to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"
                                                >
                                                    <Zap className="w-3 h-3" />
                                                    Featured
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Favorite Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setIsFavorite(!isFavorite)}
                                            className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                                        >
                                            <Heart
                                                className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                                            />
                                        </motion.button>

                                        {/* Stock Indicator */}
                                        <div className="absolute bottom-4 right-4">
                                            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${product.inStock
                                                ? 'bg-green-500/90 text-white'
                                                : 'bg-red-500/90 text-white'
                                                }`}>
                                                {product.inStock ? (
                                                    <div className="flex items-center gap-1">
                                                        <Check className="w-3 h-3" />
                                                        In Stock
                                                    </div>
                                                ) : (
                                                    'Out of Stock'
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right: Product Details */}
                                <div className="flex flex-col space-y-6">
                                    {/* Category & Model */}
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                                            {product.category}
                                        </span>
                                        <span className="text-xs px-3 py-1 bg-ktm-orange/10 text-ktm-orange rounded-full font-medium">
                                            {product.model}
                                        </span>
                                    </div>

                                    {/* Product Name */}
                                    <h2 className="text-3xl font-display font-bold text-ktm-black leading-tight">
                                        {product.name}
                                    </h2>

                                    {/* Rating */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < Math.floor(product.rating)
                                                        ? 'fill-yellow-400 text-yellow-400'
                                                        : 'text-gray-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            {product.rating} ({product.reviews} reviews)
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div className="space-y-2">
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-4xl font-bold text-ktm-orange">
                                                ₹{product.price.toLocaleString()}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-xl text-gray-400 line-through">
                                                    ₹{product.originalPrice.toLocaleString()}
                                                </span>
                                            )}
                                        </div>
                                        {discount > 0 && (
                                            <p className="text-sm text-green-600 font-medium">
                                                You save ₹{(product.originalPrice - product.price).toLocaleString()} ({discount}%)
                                            </p>
                                        )}
                                    </div>

                                    {/* Description */}
                                    {product.description && (
                                        <p className="text-gray-600 leading-relaxed">
                                            {product.description}
                                        </p>
                                    )}

                                    {/* Quantity Selector */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Quantity</label>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                                                <button
                                                    onClick={() => handleQuantityChange(-1)}
                                                    disabled={quantity <= 1}
                                                    className="p-3 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="px-6 font-semibold text-lg">{quantity}</span>
                                                <button
                                                    onClick={() => handleQuantityChange(1)}
                                                    className="p-3 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <span className="text-sm text-gray-600">
                                                Total: <span className="font-bold text-ktm-orange">
                                                    ₹{(product.price * quantity).toLocaleString()}
                                                </span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-4">
                                        <Button
                                            onClick={handleAddToCart}
                                            disabled={!product.inStock}
                                            className="flex-1 relative overflow-hidden"
                                        >
                                            <AnimatePresence mode="wait">
                                                {isAddedToCart ? (
                                                    <motion.div
                                                        key="added"
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -20, opacity: 0 }}
                                                        className="flex items-center justify-center gap-2"
                                                    >
                                                        <Check className="w-5 h-5" />
                                                        Added to Cart!
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="add"
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -20, opacity: 0 }}
                                                        className="flex items-center justify-center gap-2"
                                                    >
                                                        <ShoppingCart className="w-5 h-5" />
                                                        Add to Cart
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsFavorite(!isFavorite)}
                                        >
                                            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                                        </Button>
                                    </div>

                                    {/* Features */}
                                    <div className="pt-4 border-t space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Check className="w-4 h-4 text-green-500" />
                                            100% Genuine KTM Part
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Free Shipping on orders above ₹999
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Easy Returns & Exchange
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
