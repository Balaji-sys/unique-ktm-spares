'use client';

import React, { useState } from 'react';
import { X, Mail, User, Phone, Package, Hash, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GeneralOrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    preSelectedProduct?: string;
}

export default function GeneralOrderModal({ isOpen, onClose, preSelectedProduct }: GeneralOrderModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        productName: preSelectedProduct || '',
        quantity: '1'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/send-general-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', phone: '', email: '', productName: '', quantity: '1' });
                setTimeout(() => {
                    onClose();
                    setSubmitStatus('idle');
                }, 2000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting order:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
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
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-gradient-to-r from-ktm-orange to-orange-500 text-white p-6 rounded-t-2xl">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Package className="w-6 h-6" />
                                        <h2 className="text-2xl font-display font-bold">Place Order</h2>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                                <p className="mt-2 text-white/90 text-sm">
                                    Fill out the form below to place your order
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ktm-orange focus:ring-4 focus:ring-ktm-orange/10 outline-none transition-all"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ktm-orange focus:ring-4 focus:ring-ktm-orange/10 outline-none transition-all"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ktm-orange focus:ring-4 focus:ring-ktm-orange/10 outline-none transition-all"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>
                                </div>

                                {/* Product Name */}
                                <div>
                                    <label htmlFor="productName" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Which Product? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="productName"
                                            name="productName"
                                            value={formData.productName}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ktm-orange focus:ring-4 focus:ring-ktm-orange/10 outline-none transition-all"
                                            placeholder="Enter product name or part number"
                                        />
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div>
                                    <label htmlFor="quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Quantity <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            required
                                            min="1"
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ktm-orange focus:ring-4 focus:ring-ktm-orange/10 outline-none transition-all"
                                            placeholder="1"
                                        />
                                    </div>
                                </div>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-sm font-medium"
                                    >
                                        ✓ Order request sent successfully! We'll contact you soon.
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-sm font-medium"
                                    >
                                        ✗ Failed to send order. Please try again or call us directly.
                                    </motion.div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-ktm-orange to-orange-500 text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-ktm-orange/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Package className="w-5 h-5" />
                                            Place Order
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    Or call us directly at <a href="tel:+917010093528" className="text-ktm-orange font-semibold hover:underline">+91 70100 93528</a>
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
