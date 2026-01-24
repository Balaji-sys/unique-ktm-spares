'use client';

import React, { useState } from 'react';
import { Shield, Wrench, Clock, Award, Zap, X, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

const services = [
    {
        title: 'Basic Service',
        duration: '2-3 hours',
        popular: false,
        features: [
            'Engine Oil Change',
            'Oil Filter Replacement',
            'Chain Cleaning & Lubrication',
            'Brake Inspection',
            'Tire Pressure Check',
            'Basic Bike Wash',
        ],
    },
    {
        title: 'Premium Service',
        duration: '4-5 hours',
        popular: true,
        features: [
            'Everything in Basic Service',
            'Air Filter Replacement',
            'Spark Plug Replacement',
            'Complete Brake Service',
            'Suspension Check',
            'Coolant Top-up',
            'Complete Bike Detailing',
            '30-day Service Warranty',
        ],
    },
    {
        title: 'Performance Service',
        duration: 'Full Day',
        popular: false,
        features: [
            'Everything in Premium Service',
            'ECU Diagnostics & Tuning',
            'Complete Chain Kit Replacement',
            'Performance Exhaust Check',
            'Suspension Fine-tuning',
            'Racing-grade Fluids',
            'Performance Report',
            '90-day Service Warranty',
        ],
    },
];

const benefits = [
    {
        icon: Shield,
        title: 'Certified Technicians',
        description: 'KTM-trained experts with years of experience',
    },
    {
        icon: Wrench,
        title: 'Genuine Parts Only',
        description: 'We use only authentic KTM spare parts',
    },
    {
        icon: Clock,
        title: 'Quick Turnaround',
        description: 'Fast service without compromising quality',
    },
    {
        icon: Award,
        title: 'Service Warranty',
        description: 'All services backed by our quality guarantee',
    },
];

export default function ServiceCTA() {
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleBookService = (serviceTitle: string) => {
        setSelectedService(serviceTitle);
        setShowModal(true);
        setSubmitStatus('idle'); // Reset status when opening modal
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            service: selectedService,
            problem: formData.get('problem'),
        };

        try {
            const response = await fetch('/api/send-service-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setTimeout(() => {
                    setShowModal(false);
                    setSubmitStatus('idle');
                }, 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-ktm-orange/20 px-6 py-3 rounded-full mb-6">
                        <Zap className="w-5 h-5 text-ktm-orange" />
                        <span className="text-ktm-orange font-semibold">PROFESSIONAL SERVICE</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-ktm-black mb-4">
                        Keep Your Beast <span className="text-ktm-orange">Race-Ready</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Expert maintenance and performance tuning for all KTM models
                    </p>
                </div>

                {/* Service Packages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${service.popular
                                ? 'border-ktm-orange'
                                : 'border-gray-200 hover:border-ktm-orange/50'
                                }`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-ktm-orange to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-display font-bold text-ktm-black mb-2">
                                    {service.title}
                                </h3>
                                <div className="flex items-center justify-center text-gray-600 mt-2">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span>{service.duration}</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-700">
                                        <svg className="w-5 h-5 text-ktm-orange mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={service.popular ? 'primary' : 'outline'}
                                className="w-full"
                                onClick={() => handleBookService(service.title)}
                            >
                                Book Service
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Us */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ktm-orange to-orange-500 rounded-full mb-4">
                                <benefit.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-ktm-black mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Contact Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setShowModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {submitStatus === 'success' ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-ktm-black mb-2">Request Sent!</h3>
                                    <p className="text-gray-600">We've received your service request for <b>{selectedService}</b>. Our team will contact you shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-display font-bold text-ktm-black mb-2">
                                        Book {selectedService}
                                    </h3>
                                    <p className="text-gray-600 mb-6">Fill out the form and we'll contact you shortly</p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                                <User className="w-4 h-4 mr-2 text-ktm-orange" />
                                                Customer Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ktm-orange focus:ring-2 focus:ring-ktm-orange/20 outline-none transition-all"
                                                placeholder="Your full name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                                <Phone className="w-4 h-4 mr-2 text-ktm-orange" />
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ktm-orange focus:ring-2 focus:ring-ktm-orange/20 outline-none transition-all"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                                <Mail className="w-4 h-4 mr-2 text-ktm-orange" />
                                                Email ID *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ktm-orange focus:ring-2 focus:ring-ktm-orange/20 outline-none transition-all"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center">
                                                <MessageSquare className="w-4 h-4 mr-2 text-ktm-orange" />
                                                Problem (Optional)
                                            </label>
                                            <textarea
                                                name="problem"
                                                rows={3}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-ktm-orange focus:ring-2 focus:ring-ktm-orange/20 outline-none transition-all resize-none"
                                                placeholder="Describe any issues with your bike..."
                                            />
                                        </div>

                                        {submitStatus === 'error' && (
                                            <div className="text-red-500 text-sm text-center">
                                                Something went wrong. Please try again or call us directly.
                                            </div>
                                        )}

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-ktm-orange to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-ktm-orange/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </>
                                            ) : (
                                                'Submit Request'
                                            )}
                                        </motion.button>

                                        <p className="text-center text-gray-500 text-sm">
                                            We'll contact you within 24 hours
                                        </p>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
