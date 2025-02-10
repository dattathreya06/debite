'use client'

import React, { useRef } from 'react';
import { useHoverWordAnimation } from '@/app/anim/word-anim';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center  text-sm font-mono font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-royal_blue_traditional-400 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-dark text-white hover:dark-dark text-royal_blue_traditional-600',
        outline: 'border border-royal_blue_traditional text-royal_blue_traditional hover:bg-royal_blue_traditional-100',
        ghost: 'hover:bg-royal_blue_traditional-100 hover:text-royal_blue_traditional-900',
        link: 'text-royal_blue_traditional underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  animated?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant, size, animated = true, children, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    
    if (animated) {
      useHoverWordAnimation(buttonRef);
    }
    
    return (
      <button
        ref={buttonRef}
        className={buttonVariants({ variant, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;