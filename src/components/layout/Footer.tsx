'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-ktm-black text-white mt-20">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-display font-bold text-ktm-orange mb-4">
                            UNIQUE KTM SPARES
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            Your trusted source for 100% genuine KTM spare parts in Salem, Tamil Nadu.
                            All types available - Engine, Brakes, Suspension, Electrical & Accessories.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 bg-ktm-black-light hover:bg-ktm-orange rounded-full flex items-center justify-center transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/unique_ktm_spares_service"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-ktm-black-light hover:bg-ktm-orange rounded-full flex items-center justify-center transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-ktm-black-light hover:bg-ktm-orange rounded-full flex items-center justify-center transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products" className="text-gray-300 hover:text-ktm-orange transition-colors text-sm">
                                    Browse Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-ktm-orange transition-colors text-sm">
                                    Book Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-ktm-orange transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                                    className="text-gray-300 hover:text-ktm-orange transition-colors text-sm"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Categories */}
                    <div>
                        <h3 className="text-lg font-display font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products?category=Engine%20%26%20Transmission" className="text-gray-300 hover:text-ktm-orange transition-colors text-sm">
                                    Engine Parts
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=Brakes%20%26%20Wheels" className="text-gray-300 hover:text-ktm-orange transition-colors text-sm">
                                    Brakes
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=Suspension%20%26%20Steering" className="text-gray-300 hover:text-ktm-orange transition-colors text-sm">
                                    Suspension
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=Electrical%20%26%20Lighting" className="text-gray-300 hover:text-ktm-orange transition-colors text-sm">
                                    Electrical
                                </Link>
                            </li>
                            <li>
                                <Link href="/products?category=PowerParts%20%26%20Accessories" className="text-gray-300 hover:text-ktm-orange transition-colors text-sm">
                                    Accessories
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-display font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-ktm-orange flex-shrink-0 mt-0.5" />
                                <a
                                    href="https://maps.app.goo.gl/x9pjStrDv5VbGK7Y6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-ktm-orange transition-colors text-sm hover:underline"
                                >
                                    MDS Complex, 155, Kumaragiri,<br />
                                    Salem, Tamil Nadu 636015
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-ktm-orange flex-shrink-0" />
                                <a href="tel:+917010093528" className="text-gray-300 hover:text-ktm-orange transition-colors text-sm">
                                    +91 70100 93528
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-ktm-orange flex-shrink-0" />
                                <a href="mailto:uniquektm7@gmail.com" className="text-gray-300 hover:text-ktm-orange transition-colors text-sm">
                                    uniquektm7@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        © 2025 Unique KTM Spares. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-400 hover:text-ktm-orange transition-colors text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-ktm-orange transition-colors text-sm">
                            Terms of Service
                        </Link>
                        <Link href="/refund" className="text-gray-400 hover:text-ktm-orange transition-colors text-sm">
                            Refund Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
