
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import GeneralOrderModal from './GeneralOrderModal';
import { productImages } from '@/lib/images';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  const imageUrl =
    productImages[product.id] ||
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';

  const discount =
    product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  return (
    <ScrollReveal direction="up">
      <motion.div
        whileHover={{ y: -6 }}
        className="group h-full bg-white rounded-xl overflow-hidden
                   shadow-md hover:shadow-xl transition-all duration-300
                   border border-gray-100 flex flex-col"
      >
        {/* IMAGE */}
        <div className="relative aspect-square bg-gray-100 overflow-hidden">
          <Link href={`/products/${product.id}`}>
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-ktm-orange text-white px-3 py-1 rounded-full text-xs font-bold">
              -{discount}%
            </span>
          )}
        </div>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-1">
          {/* PRODUCT NAME */}
          <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>

          {/* PRICE */}
          <div className="mb-4">
            <span className="text-xl font-bold text-ktm-orange">
              ₹{product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="ml-2 text-sm line-through text-gray-400">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* ACTIONS */}
          <div className="mt-auto flex gap-3">
            <button
              onClick={() => setOpen(true)}
              className="flex-1 bg-ktm-orange text-white py-2.5
                         rounded-lg font-semibold hover:shadow-lg transition"
            >
              Order
            </button>

            <Link href={`/products/${product.id}`} className="flex-1">
              <button
                className="w-full bg-black text-white py-2.5
                           rounded-lg font-semibold
                           hover:bg-ktm-orange transition"
              >
                View
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      <GeneralOrderModal
        isOpen={open}
        onClose={() => setOpen(false)}
        preSelectedProduct={product.name}
      />
    </ScrollReveal>
  );
}
