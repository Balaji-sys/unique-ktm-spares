"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ThumbsUp, CheckCircle, PenLine, User } from "lucide-react";
import { getReviewsForProduct } from "@/lib/reviews";

interface ReviewsSectionProps {
    productId: string;
}

export default function ReviewsSection({ productId }: ReviewsSectionProps) {
    const { averageRating, totalReviews, ratingDistribution, reviews } = getReviewsForProduct(productId);
    const [showWriteReview, setShowWriteReview] = useState(false);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-16 bg-gradient-to-b from-black to-zinc-900 border-t border-white/10">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
                >
                    <h2 className="text-3xl font-bold text-white">Customer Reviews</h2>
                    <button
                        onClick={() => setShowWriteReview(!showWriteReview)}
                        className="flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-all hover:scale-105 active:scale-95 text-sm font-semibold tracking-wide shadow-lg shadow-orange-600/20"
                    >
                        <PenLine size={18} />
                        Write a Review
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Rating Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
                            <div className="text-center mb-6">
                                <div className="text-6xl font-bold text-white mb-2">{averageRating.toFixed(1)}</div>
                                <div className="flex justify-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className={`${i < Math.round(averageRating) ? "fill-orange-500 text-orange-500" : "fill-gray-700 text-gray-700"}`}
                                        />
                                    ))}
                                </div>
                                <div className="text-gray-400 text-sm">Based on {totalReviews} reviews</div>
                            </div>

                            <div className="space-y-3">
                                {[5, 4, 3, 2, 1].map((rating) => {
                                    const count = ratingDistribution[rating as keyof typeof ratingDistribution] || 0;
                                    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;

                                    return (
                                        <div key={rating} className="flex items-center gap-3 text-sm">
                                            <div className="w-8 text-right text-gray-400 font-medium">{rating} ★</div>
                                            <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${percentage}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className="h-full bg-orange-500 rounded-full"
                                                />
                                            </div>
                                            <div className="w-12 text-gray-400 text-right">{percentage.toFixed(0)}%</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Feature Highlights (Mock) */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Product Highlights</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-300">Quality</span>
                                    <div className="w-32 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[95%]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-300">Value for Money</span>
                                    <div className="w-32 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[90%]"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-300">Easy to Install</span>
                                    <div className="w-32 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[85%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Reviews List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Write Review Form (Conditional) */}
                        <AnimatePresence>
                            {showWriteReview && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="bg-zinc-900/50 border border-orange-500/30 rounded-2xl p-6 mb-8 overflow-hidden"
                                >
                                    <h3 className="text-xl font-bold text-white mb-4">Share you experience</h3>
                                    <p className="text-gray-400 mb-4 text-sm">This feature is coming soon! Integration with our reviews API is in progress.</p>
                                    <button
                                        onClick={() => setShowWriteReview(false)}
                                        className="text-orange-500 hover:text-orange-400 text-sm font-medium"
                                    >
                                        Cancel
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {reviews.length > 0 ? (
                            reviews.map((review) => (
                                <motion.div
                                    key={review.id}
                                    variants={itemVariants}
                                    className="bg-white/5 hover:bg-white-[0.07] transition-colors border border-white/5 rounded-2xl p-6 md:p-8"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-300">
                                                {review.userImage ? (
                                                    <img src={review.userImage} alt={review.userName} className="w-full h-full rounded-full object-cover" />
                                                ) : (
                                                    <User size={20} />
                                                )}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="text-white font-bold">{review.userName}</h4>
                                                    {review.verifiedPurchase && (
                                                        <span className="text-green-500 text-xs flex items-center gap-0.5" title="Verified Purchase">
                                                            <CheckCircle size={12} /> Verified
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex gap-1 text-xs">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={12}
                                                            className={`${i < review.rating ? "fill-orange-500 text-orange-500" : "fill-gray-700 text-gray-700"}`}
                                                        />
                                                    ))}
                                                    <span className="text-gray-500 ml-2">{review.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h5 className="text-lg font-bold text-gray-200 mb-2">{review.title}</h5>
                                    <p className="text-gray-400 leading-relaxed mb-6">{review.content}</p>

                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors text-sm group">
                                            <ThumbsUp size={16} className="group-hover:text-orange-500 transition-colors" />
                                            Helpful ({review.helpfulCount})
                                        </button>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="text-center py-12 bg-white/5 rounded-2xl border border-white/5 border-dashed">
                                <Star size={48} className="text-gray-700 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-300 mb-2">No reviews yet</h3>
                                <p className="text-gray-500">Be the first to review this product!</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
