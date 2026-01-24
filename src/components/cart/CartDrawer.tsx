'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/lib/store/cartStore';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import Button from '@/components/ui/Button';
import { formatPrice } from '@/lib/utils';

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCartStore();

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 animate-slide-down overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 z-10">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-2xl font-display font-bold text-ktm-black">
                            Shopping Cart
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <p className="text-gray-600 text-sm">
                        {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
                    </p>
                </div>

                {/* Cart Items */}
                <div className="p-6">
                    {items.length === 0 ? (
                        <div className="text-center py-12">
                            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Your cart is empty
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Add some KTM parts to get started!
                            </p>
                            <Button variant="primary" onClick={onClose}>
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                                >
                                    {/* Image */}
                                    <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-3xl">{item.image}</span>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mb-2">{item.model}</p>
                                        <p className="text-lg font-bold text-ktm-orange">
                                            {formatPrice(item.price)}
                                        </p>
                                    </div>

                                    {/* Remove */}
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="self-start p-1 hover:bg-gray-200 rounded-full transition-colors"
                                    >
                                        <X className="w-4 h-4 text-gray-500" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-gray-900">Total:</span>
                            <span className="text-2xl font-bold text-ktm-orange">
                                {formatPrice(getTotalPrice())}
                            </span>
                        </div>
                        <Link href="/cart">
                            <Button variant="primary" className="w-full mb-3" onClick={onClose}>
                                View Cart
                            </Button>
                        </Link>
                        <Link href="/checkout">
                            <Button variant="secondary" className="w-full" onClick={onClose}>
                                Checkout
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
