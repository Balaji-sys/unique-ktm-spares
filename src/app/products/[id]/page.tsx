'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { Star, Truck, Shield, ChevronLeft, Mail } from 'lucide-react';
import ReviewsSection from '@/components/products/ReviewsSection';
import OrderInquiryModal from '@/components/products/OrderInquiryModal';

// Mock product database - replace with real API later
import { allProducts } from '@/lib/products';
import { productImages } from '@/lib/images';
import Image from 'next/image';

export default function ProductDetailPage() {
    const params = useParams();
    const productId = params?.id as string;
    const product = allProducts.find(p => p.id === productId) as any;
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    if (!product) {
        return (
            <main className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="container-custom py-20 text-center">
                    <h1 className="text-4xl font-display font-bold text-ktm-black mb-4">
                        Product Not Found
                    </h1>
                    <Link href="/products">
                        <Button variant="primary">Browse Products</Button>
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="container-custom py-8">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                    <Link href="/" className="hover:text-ktm-orange">Home</Link>
                    <span>/</span>
                    <Link href="/products" className="hover:text-ktm-orange">Products</Link>
                    <span>/</span>
                    <span className="text-ktm-black font-medium">{product.name}</span>
                </div>

                {/* Back Button */}
                <Link href="/products" className="inline-flex items-center text-ktm-orange hover:text-ktm-orange-dark mb-6">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Back to Products
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Images */}
                    <div>
                        <div className="bg-white rounded-2xl p-4 md:p-12 shadow-lg overflow-hidden relative group">
                            <div className="aspect-square bg-gray-100 rounded-xl relative overflow-hidden">
                                <Image
                                    src={productImages[product.id] || 'https://images.unsplash.com/photo-1558981806-ec527fa84f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                                {product.category}
                            </p>
                            <h1 className="text-4xl font-display font-bold text-ktm-black mb-4">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-lg font-semibold">{product.rating}</span>
                                <span className="text-gray-500">({product.reviews} reviews)</span>
                            </div>

                            {/* Compatible Models */}
                            <div className="mb-6">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Compatible Models:</p>
                                <p className="text-ktm-orange font-medium">{product.model}</p>
                            </div>

                            {/* Stock Status */}
                            <div className="mb-6">
                                {product.inStock ? (
                                    <div className="flex items-center text-green-600">
                                        <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                                        <span className="font-semibold">In Stock - Ready to Ship</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center text-red-600">
                                        <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                                        <span className="font-semibold">Out of Stock</span>
                                    </div>
                                )}
                            </div>

                            {/* Contact for Purchase */}
                            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                                <button
                                    onClick={() => setIsOrderModalOpen(true)}
                                    className="w-full bg-gradient-to-r from-ktm-orange to-orange-500 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-ktm-orange/50 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <Mail className="w-5 h-5" />
                                    Order via Email
                                </button>
                                <button
                                    onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                                    className="w-full bg-white border-2 border-ktm-orange text-ktm-orange font-semibold py-4 px-6 rounded-lg hover:bg-ktm-orange hover:text-white transition-all duration-300"
                                >
                                    Contact Us
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 text-center -mt-4 mb-6">
                                Send us an inquiry or reach our contact section
                            </p>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center space-x-3 text-sm text-gray-700">
                                    <Shield className="w-5 h-5 text-ktm-orange" />
                                    <span>Genuine Parts</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm text-gray-700">
                                    <Truck className="w-5 h-5 text-ktm-orange" />
                                    <span>Free Shipping</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg mt-6">
                            <h2 className="text-2xl font-display font-bold text-ktm-black mb-4">
                                Description
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

                            <h3 className="text-xl font-display font-bold text-ktm-black mb-3">
                                Key Features
                            </h3>
                            <ul className="space-y-2">
                                {product.features?.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-start text-gray-700">
                                        <svg className="w-5 h-5 text-ktm-orange mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Specifications */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg mt-6">
                            <h2 className="text-2xl font-display font-bold text-ktm-black mb-4">
                                Specifications
                            </h2>
                            <div className="space-y-3">
                                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                                        <span className="font-medium text-gray-700">{key}</span>
                                        <span className="text-gray-900">{value as string}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReviewsSection productId={product.id} />

            {/* Order Inquiry Modal */}
            <OrderInquiryModal
                isOpen={isOrderModalOpen}
                onClose={() => setIsOrderModalOpen(false)}
                productName={product.name}
                productId={product.id}
            />

            <Footer />
        </main>
    );
}
