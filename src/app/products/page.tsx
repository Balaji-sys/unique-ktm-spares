'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import FilterSidebar from '@/components/products/FilterSidebar';
import { Filter, X } from 'lucide-react';
import Button from '@/components/ui/Button';

function ProductsPageContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category') || '';

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [filters, setFilters] = useState({
        category: categoryParam,
        model: '',
        priceRange: [0, 40000],
        inStock: false,
    });

    // Update filters when URL parameters change
    useEffect(() => {
        const categoryParam = searchParams.get('category') || '';
        if (categoryParam) {
            setFilters(prev => ({
                ...prev,
                category: categoryParam,
            }));
        }
    }, [searchParams]);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header */}
            <div className="bg-ktm-black text-white py-12">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Browse <span className="text-gradient-ktm">Parts</span>
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Find genuine KTM spare parts for your bike
                    </p>
                </div>
            </div>

            <div className="container-custom py-8">
                <div className="flex gap-8">
                    {/* Desktop Sidebar */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-24">
                            <FilterSidebar filters={filters} setFilters={setFilters} />
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Mobile Filter Button */}
                        <div className="lg:hidden mb-6">
                            <Button
                                variant="outline"
                                onClick={() => setMobileFiltersOpen(true)}
                                className="w-full"
                            >
                                <Filter className="w-4 h-4 mr-2" />
                                Filters
                            </Button>
                        </div>

                        <ProductGrid filters={filters} />
                    </div>
                </div>
            </div>

            {/* Mobile Filter Sidebar */}
            {mobileFiltersOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setMobileFiltersOpen(false)}
                    />
                    <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto animate-slide-down">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-display font-bold">Filters</h2>
                                <button
                                    onClick={() => setMobileFiltersOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <FilterSidebar filters={filters} setFilters={setFilters} />
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-ktm-orange"></div>
                    <p className="mt-4 text-gray-600">Loading products...</p>
                </div>
            </div>
        }>
            <ProductsPageContent />
        </Suspense>
    );
}
