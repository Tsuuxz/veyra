'use client';

import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';
import { Loader2 } from 'lucide-react';

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary';
  
  const variants = {
    primary: 'bg-accent-primary text-text-inverse hover:bg-accent-secondary',
    secondary: 'bg-bg-elevated text-text-primary border border-border-primary hover:border-border-focus',
    ghost: 'text-text-primary hover:bg-bg-elevated',
    danger: 'bg-status-error text-white hover:bg-red-600',
    outline: 'border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-text-inverse',
  };
  
  const sizes = {
    sm: 'h-9 px-3 text-sm rounded-lg',
    md: 'h-11 px-5 text-base rounded-lg',
    lg: 'h-13 px-7 text-lg rounded-xl',
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          <span>Carregando...</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
