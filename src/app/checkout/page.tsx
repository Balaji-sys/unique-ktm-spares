'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useCartStore } from '@/lib/store/cartStore';
import { formatPrice } from '@/lib/utils';
import { ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react';

export default function CheckoutPage() {
    const { items, getTotalPrice } = useCartStore();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle checkout logic here
        alert('Checkout functionality will be implemented with payment gateway integration!');
    };

    const subtotal = getTotalPrice();
    const gst = subtotal * 0.18;
    const total = subtotal + gst;

    if (items.length === 0) {
        return (
            <main className="min-h-screen bg-gray-50">
                <Navbar />
                <div className="container-custom py-20 text-center">
                    <h1 className="text-4xl font-display font-bold text-ktm-black mb-4">
                        Your cart is empty
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

            <div className="container-custom py-12">
                <Link href="/cart" className="inline-flex items-center text-ktm-orange hover:text-ktm-orange-dark mb-6">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Cart
                </Link>

                <h1 className="text-4xl md:text-5xl font-display font-bold text-ktm-black mb-8">
                    Checkout
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Checkout Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-display font-bold text-ktm-black mb-6">
                                Shipping Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    label="Full Name *"
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                                <Input
                                    label="Email *"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <Input
                                    label="Phone Number *"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                                <Input
                                    label="Pin Code *"
                                    type="text"
                                    placeholder="400001"
                                    required
                                    value={formData.pincode}
                                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                />
                            </div>

                            <div className="mt-6">
                                <Input
                                    label="Address *"
                                    type="text"
                                    placeholder="Street Address, Building Name"
                                    required
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <Input
                                    label="City *"
                                    type="text"
                                    placeholder="Mumbai"
                                    required
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                />
                                <Input
                                    label="State *"
                                    type="text"
                                    placeholder="Maharashtra"
                                    required
                                    value={formData.state}
                                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                />
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="text-xl font-display font-bold text-ktm-black mb-4">
                                    Payment Method
                                </h3>
                                <div className="space-y-3">
                                    <label className="flex items-center p-4 border-2 border-ktm-orange rounded-lg cursor-pointer bg-ktm-orange/5">
                                        <input type="radio" name="payment" value="online" className="mr-3" defaultChecked />
                                        <CreditCard className="w-5 h-5 mr-3 text-ktm-orange" />
                                        <span className="font-medium">Online Payment (Razorpay)</span>
                                    </label>
                                    <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-ktm-orange transition-colors">
                                        <input type="radio" name="payment" value="cod" className="mr-3" />
                                        <Truck className="w-5 h-5 mr-3 text-gray-600" />
                                        <span className="font-medium">Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>

                            <Button variant="primary" size="lg" className="w-full mt-8" type="submit">
                                Place Order - {formatPrice(total)}
                            </Button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                            <h2 className="text-2xl font-display font-bold text-ktm-black mb-6">
                                Order Summary
                            </h2>

                            {/* Items */}
                            <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg 
                                  flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">{item.image}</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-sm text-ktm-black line-clamp-2">
                                                {item.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                                            <p className="text-ktm-orange font-semibold mt-1">
                                                {formatPrice(item.price * item.quantity)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pricing */}
                            <div className="space-y-3 pt-6 border-t border-gray-200">
                                <div className="flex justify-between text-gray-700">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">{formatPrice(subtotal)}</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-green-600">FREE</span>
                                </div>
                                <div className="flex justify-between text-gray-700">
                                    <span>GST (18%)</span>
                                    <span className="font-semibold">{formatPrice(gst)}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-200">
                                    <span>Total</span>
                                    <span className="text-ktm-orange text-2xl">{formatPrice(total)}</span>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                                <div className="flex items-center space-x-3 text-sm text-gray-600">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    <span>Secure Payment</span>
                                </div>
                                <div className="flex items-center space-x-3 text-sm text-gray-600">
                                    <Truck className="w-5 h-5 text-green-500" />
                                    <span>Free Shipping Pan India</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
