"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { googleReviews } from "@/lib/googleReviews";

interface Testimonial {
    id: string;
    name: string;
    content: string;
    rating: number;
    date: string;
}

// Convert Google reviews to testimonials format and select featured ones
const testimonials: Testimonial[] = googleReviews
    .filter(review => review.text.length > 50) // Only reviews with substantial text
    .slice(0, 12) // Take first 12 reviews
    .map(review => ({
        id: review.id,
        name: review.author,
        content: review.text,
        rating: review.rating,
        date: review.date,
    }));

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        })
    };

    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black" />
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-600"
                    >
                        Customer Reviews
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Real reviews from our customers on Google Maps. All 5-star ratings!
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto h-[400px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 flex items-center justify-center p-4"
                        >
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-3xl w-full shadow-2xl relative group">
                                {/* Decorative Quote Icon */}
                                <div className="absolute top-6 left-8 text-orange-500/20">
                                    <Quote size={80} className="transform -scale-x-100" />
                                </div>

                                <div className="relative z-10 flex flex-col items-center gap-6">
                                    {/* Google Badge */}
                                    <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                        </svg>
                                        <span className="text-white text-sm font-medium">Google Review</span>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={20}
                                                className="fill-orange-500 text-orange-500"
                                            />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="text-xl md:text-2xl text-gray-200 italic font-light leading-relaxed min-h-[120px] flex items-center">
                                        "{testimonials[currentIndex].content}"
                                    </p>

                                    {/* Author and Date */}
                                    <div className="flex flex-col items-center gap-1">
                                        <h3 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h3>
                                        <p className="text-orange-400 text-sm font-medium">{testimonials[currentIndex].date}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-orange-600 transition-colors backdrop-blur-sm group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-orange-600 transition-colors backdrop-blur-sm group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>

                {/* Dots Indicators */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-orange-500 w-8"
                                : "bg-white/20 hover:bg-white/40"
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
