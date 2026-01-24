'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { allProducts } from '@/lib/products';
import { productImages } from '@/lib/images';
import Image from 'next/image';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<typeof allProducts>([]);
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Filter products based on query
    useEffect(() => {
        if (query.trim().length === 0) {
            setResults([]);
            return;
        }

        const filtered = allProducts.filter(product => {
            const searchTerms = [
                product.name,
                product.category,
                product.model,
                product.subcategory || ''
            ].join(' ').toLowerCase();

            return searchTerms.includes(query.toLowerCase());
        }).slice(0, 5); // Limit to 5 results

        setResults(filtered);
    }, [query]);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsOpen(true);
    };

    const clearSearch = () => {
        setQuery('');
        setResults([]);
        setIsOpen(false);
    };

    return (
        <div ref={searchRef} className="relative w-full max-w-xl mx-auto z-40">
            {/* Input Field */}
            <div className="relative group">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Search for parts..."
                    className="w-full pl-12 pr-12 py-3.5 bg-white/90 backdrop-blur-md border-2 border-gray-100 rounded-2xl 
                             text-gray-900 placeholder-gray-500 shadow-sm
                             focus:border-ktm-orange focus:ring-4 focus:ring-ktm-orange/10 focus:outline-none 
                             transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-ktm-orange transition-colors" />

                {query && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-4 h-4 text-gray-400" />
                    </button>
                )}
            </div>

            {/* Dropdown Results */}
            <AnimatePresence>
                {isOpen && query.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border-2 border-ktm-orange overflow-hidden z-50"
                    >
                        {results.length > 0 ? (
                            <div className="py-2">
                                <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Products
                                </div>
                                {results.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/products/${product.id}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 transition-colors group border-b border-gray-50 last:border-0">
                                            {/* Image */}
                                            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                                <Image
                                                    src={productImages[product.id] || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-ktm-orange transition-colors truncate">
                                                    {product.name}
                                                </h4>
                                                <p className="text-xs text-gray-500 truncate">
                                                    {product.category} • {product.model}
                                                </p>
                                            </div>

                                            {/* Price */}


                                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-ktm-orange group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                ))}
                                <Link
                                    href={`/products?search=${query}`}
                                    className="block px-4 py-3 bg-gray-50 text-center text-sm font-medium text-ktm-orange hover:bg-orange-50 transition-colors"
                                >
                                    View all results
                                </Link>
                            </div>
                        ) : (
                            <div className="p-8 text-center">
                                <Search className="w-12 h-12 text-gray-200 mx-auto mb-3" />
                                <p className="text-gray-900 font-medium">No results found</p>
                                <p className="text-sm text-gray-500">Try searching for other parts</p>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
