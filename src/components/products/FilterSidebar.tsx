'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { RotateCcw } from 'lucide-react';

interface FilterSidebarProps {
    filters: {
        category: string;
        model: string;
        priceRange: number[];
        inStock: boolean;
    };
    setFilters: React.Dispatch<React.SetStateAction<any>>;
}

const categories = [
    'Engine & Transmission',
    'Electrical & Lighting',
    'Frame & Body',
    'Suspension & Steering',
    'Brakes & Wheels',
    'Service Parts',
    'PowerParts/Accessories',
];

const models = [
    'All Models',
    'Duke 200',
    'Duke 250',
    'Duke 390',
    'RC 200',
    'RC 390',
    'Adventure 390',
];

export default function FilterSidebar({ filters, setFilters }: FilterSidebarProps) {
    const resetFilters = () => {
        setFilters({
            category: '',
            model: '',
            priceRange: [0, 40000],
            inStock: false,
        });
    };

    return (
        <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-display font-bold text-ktm-black">Filters</h3>
                <button
                    onClick={resetFilters}
                    className="text-ktm-orange hover:text-ktm-orange-dark text-sm font-medium flex items-center"
                >
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Reset
                </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <label key={category} className="flex items-center cursor-pointer group">
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                checked={filters.category === category}
                                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                                className="w-4 h-4 text-ktm-orange focus:ring-ktm-orange border-gray-300"
                            />
                            <span className="ml-3 text-gray-700 group-hover:text-ktm-orange transition-colors">
                                {category}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Model Filter */}
            <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Bike Model</h4>
                <div className="space-y-2">
                    {models.map((model) => (
                        <label key={model} className="flex items-center cursor-pointer group">
                            <input
                                type="radio"
                                name="model"
                                value={model}
                                checked={filters.model === model}
                                onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                                className="w-4 h-4 text-ktm-orange focus:ring-ktm-orange border-gray-300"
                            />
                            <span className="ml-3 text-gray-700 group-hover:text-ktm-orange transition-colors">
                                {model}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
                <div className="px-2">
                    <input
                        type="range"
                        min="0"
                        max="40000"
                        step="1000"
                        value={filters.priceRange[1]}
                        onChange={(e) =>
                            setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })
                        }
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-ktm-orange"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>₹0</span>
                        <span className="font-semibold text-ktm-orange">₹{filters.priceRange[1].toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Availability */}
            <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Availability</h4>
                <label className="flex items-center cursor-pointer group">
                    <input
                        type="checkbox"
                        checked={filters.inStock}
                        onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
                        className="w-4 h-4 text-ktm-orange focus:ring-ktm-orange border-gray-300 rounded"
                    />
                    <span className="ml-3 text-gray-700 group-hover:text-ktm-orange transition-colors">
                        In Stock Only
                    </span>
                </label>
            </div>

            <Button variant="primary" className="w-full">
                Apply Filters
            </Button>
        </div>
    );
}
