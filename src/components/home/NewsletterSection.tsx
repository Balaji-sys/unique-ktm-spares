'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter subscription
        setSubscribed(true);
        setTimeout(() => {
            setSubscribed(false);
            setEmail('');
        }, 3000);
    };

    return (
        <section className="py-20 bg-ktm-black text-white">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Subscribe to our emails
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Subscribe to get notified about product launches, special offers and news.
                        </p>

                        <form onSubmit={handleSubscribe} className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    required
                                    className="w-full px-6 py-4 bg-transparent border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-ktm-orange focus:outline-none transition-colors"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full md:w-auto px-12 py-4 bg-white text-ktm-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
