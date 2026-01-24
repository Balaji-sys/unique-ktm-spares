import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export default function Button({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-gradient-ktm text-white hover:shadow-ktm transform hover:scale-105',
        secondary: 'bg-ktm-black text-white hover:bg-ktm-black-light',
        outline: 'border-2 border-ktm-orange text-ktm-orange hover:bg-ktm-orange hover:text-white',
    };

    const sizes = {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-8 text-base',
        lg: 'py-4 px-10 text-lg',
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
}
