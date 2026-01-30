'use client';

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import { Grid, List } from 'lucide-react';
import { allProducts } from '@/lib/products';

interface ProductGridProps {
    filters: {
        category: string;
        model: string;
        priceRange: number[];
        inStock: boolean;
    };
}

export default function ProductGrid({ filters }: ProductGridProps) {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [sortBy, setSortBy] = useState('featured');
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

    // Filter products
    const filteredProducts = allProducts.filter((product) => {
        // Category filter
        if (filters.category && product.category !== filters.category) return false;

        // Model filter - improved to check exact model matches
        if (filters.model && filters.model !== 'All Models') {
            const productModels = product.model.split(',').map(m => m.trim());
            const modelMatches = productModels.some(model => {
                return model === filters.model || model === 'All Models';
            });
            if (!modelMatches) return false;
        }

        // Price filter
        if (product.price > filters.priceRange[1]) return false;

        // Stock filter
        if (filters.inStock && !product.inStock) return false;

        return true;
    });

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });

    const handleQuickView = (product: any) => {
        setSelectedProduct(product);
        setIsQuickViewOpen(true);
    };

    return (
        <div>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <p className="text-gray-600">
                    Showing <span className="font-semibold">{sortedProducts.length}</span> products
                </p>

                <div className="flex items-center space-x-4">
                    {/* Sort Dropdown */}
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-ktm-orange focus:outline-none"
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Highest Rated</option>
                    </select>

                    {/* View Toggle */}
                    <div className="hidden sm:flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
                                }`}
                        >
                            <Grid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
                                }`}
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
                <div
                    className={
                        viewMode === 'grid'
                            ? 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'
                            : 'flex flex-col space-y-4'
                    }
                >
                    {sortedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                          
                           
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                        No products found
                    </h3>
                    <p className="text-gray-600">
                        Try adjusting your filters to find what you're looking for
                    </p>
                </div>
            )}
            


            {/* Quick View Modal */}
            <QuickViewModal
                product={selectedProduct}
                isOpen={isQuickViewOpen}
                onClose={() => setIsQuickViewOpen(false)}
            />
        </div>
    );
}
