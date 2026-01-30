'use client';

import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

'transition-all duration-300 ease-out'
'hover:-translate-y-0.5 hover:shadow-lg'

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        // Base styles
        'inline-flex items-center justify-center font-semibold',
        'rounded-lg transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-ktm-orange/40',

        // Variants
        {
          'bg-ktm-orange text-white hover:shadow-lg hover:-translate-y-0.5':
            variant === 'primary',

          'bg-black text-white hover:bg-ktm-orange':
            variant === 'secondary',

          'border border-gray-300 text-gray-800 hover:border-ktm-orange hover:text-ktm-orange':
            variant === 'outline',
        },

        // Sizes
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-2.5 text-base': size === 'md',
          'px-8 py-3 text-lg': size === 'lg',
        },

        className
      )}
    >
      {children}
    </button>
  );
}
