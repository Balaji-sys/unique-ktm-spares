import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
    return (
        <div
            className={cn(
                'bg-white rounded-xl shadow-lg',
                hover && 'hover:shadow-2xl transition-shadow duration-300',
                className
            )}
        >
            {children}
        </div>
    );
}
