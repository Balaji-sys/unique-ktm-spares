'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Award, Users, MapPin, Phone, Mail, Wrench, Clock, Star, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { bikeImages } from '@/lib/images';

const stats = [
    { label: 'Years in Business', value: '10+', icon: Award },
    { label: 'Happy Customers', value: '1000+', icon: Users },
    { label: 'Genuine Parts', value: '2000+', icon: Wrench },
    { label: 'Service Rating', value: '4.9', icon: Star },
];

const values = [
    {
        icon: Shield,
        title: '100% Genuine Parts',
        description: 'We source all our parts directly from authorized KTM distributors, ensuring authenticity and quality.',
    },
    {
        icon: Award,
        title: 'Expert Technicians',
        description: 'Our team consists of KTM-certified mechanics with years of specialized experience.',
    },
    {
        icon: Clock,
        title: 'Fast Service',
        description: 'Quick turnaround times without compromising on quality or attention to detail.',
    },
    {
        icon: Users,
        title: 'Customer First',
        description: 'Your satisfaction is our priority. We go the extra mile to ensure you\'re happy.',
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-ktm-black via-ktm-black-light to-ktm-black overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FF6600' stroke-width='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }} />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-flex items-center space-x-2 bg-ktm-orange/20 px-6 py-3 rounded-full mb-6 backdrop-blur-md border border-ktm-orange/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Shield className="w-5 h-5 text-ktm-orange" />
                            <span className="text-white font-semibold">TRUSTED KTM SPECIALISTS</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
                            About{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ktm-orange via-orange-500 to-ktm-orange-light">
                                Unique KTM Spares
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed">
                            Your trusted partner for genuine KTM spare parts and professional service in Salem, Tamil Nadu.
                            We're passionate about keeping your KTM beast race-ready.
                        </p>
                    </motion.div>
                </div>

                {/* Animated Orbs */}
                <motion.div
                    className="absolute top-20 right-20 w-96 h-96 bg-ktm-orange rounded-full blur-3xl opacity-20"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ktm-orange to-orange-500 rounded-full mb-4">
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-ktm-black mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-ktm-orange/10 px-4 py-2 rounded-full mb-6">
                                <span className="text-ktm-orange font-bold text-sm">OUR STORY</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-display font-bold text-ktm-black mb-6">
                                Passion for <span className="text-ktm-orange">Performance</span>
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Founded with a passion for KTM motorcycles, <strong>Unique KTM Spares</strong> has been serving the riding community in Salem, Tamil Nadu for over a decade. We understand that your KTM is more than just a bike—it's a lifestyle.
                                </p>
                                <p>
                                    Our journey began with a simple mission: to provide KTM enthusiasts with access to 100% genuine spare parts and expert service. Today, we're proud to be the trusted choice for over 1,000 satisfied customers.
                                </p>
                                <p>
                                    Whether you need engine components, brakes, suspension parts, electrical systems, or accessories, we have everything you need to keep your KTM performing at its peak. Our team of certified technicians brings years of specialized experience to every service.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={bikeImages.hero}
                                    alt="KTM Motorcycle"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    style={{
                                        filter: 'drop-shadow(0 0 40px rgba(255, 102, 0, 0.3))',
                                    }}
                                />
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="bg-gradient-to-br from-ktm-orange to-orange-500 p-4 rounded-xl">
                                        <Shield className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-ktm-black">100%</div>
                                        <div className="text-gray-600 text-sm">Genuine Parts</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <motion.div
                            className="inline-flex items-center space-x-2 bg-ktm-orange/10 px-4 py-2 rounded-full mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <Award className="w-5 h-5 text-ktm-orange" />
                            <span className="text-ktm-orange font-bold text-sm">WHY CHOOSE US</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-display font-bold text-ktm-black mb-4">
                            What Makes Us <span className="text-ktm-orange">Different</span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We're committed to excellence in every aspect of our service
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ktm-orange to-orange-500 rounded-full mb-6">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-ktm-black mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location & Contact */}
            <section className="py-20 bg-gradient-to-br from-ktm-black via-ktm-black-light to-ktm-black text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                Visit Our <span className="text-ktm-orange">Store</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8">
                                Stop by our shop in Salem to browse our extensive collection of genuine KTM parts or to schedule a service appointment.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-ktm-orange/20 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-ktm-orange" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Address</h3>
                                        <a
                                            href="https://maps.app.goo.gl/x9pjStrDv5VbGK7Y6"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-ktm-orange transition-colors"
                                        >
                                            MDS Complex, 155, Kumaragiri,<br />
                                            Salem, Tamil Nadu 636015
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-ktm-orange/20 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-ktm-orange" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Phone</h3>
                                        <a href="tel:+917010093528" className="text-gray-300 hover:text-ktm-orange transition-colors">
                                            +91 70100 93528
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-ktm-orange/20 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-ktm-orange" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Email</h3>
                                        <a href="mailto:uniquektm7@gmail.com" className="text-gray-300 hover:text-ktm-orange transition-colors">
                                            uniquektm7@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.2!2d78.1!3d11.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM5JzAwLjAiTiA3OMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <motion.div
                        className="bg-gradient-to-br from-ktm-orange to-orange-500 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
                                backgroundSize: '60px 60px'
                            }} />
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                                Ready to Get Started?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Browse our extensive collection of genuine KTM parts or book a service appointment today
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/products">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button variant="outline" size="lg" className="bg-white text-ktm-orange border-2 border-white hover:bg-gray-100 flex items-center gap-2">
                                            Browse Products
                                            <ArrowRight className="w-5 h-5" />
                                        </Button>
                                    </motion.div>
                                </Link>
                                <Link href="/#services">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button variant="outline" size="lg" className="bg-ktm-black text-white border-2 border-ktm-black hover:bg-gray-900">
                                            Book Service
                                        </Button>
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
