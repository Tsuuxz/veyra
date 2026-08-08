'use client';

import { cn } from '@/lib/utils';
import { CardProps } from '@/types';

export function Card({ 
  hover = false, 
  padding = 'md', 
  children, 
  className,
  ...props 
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div
      className={cn(
        'bg-bg-card border border-border-primary rounded-xl transition-all duration-200',
        hover && 'hover:border-border-focus hover:-translate-y-1 cursor-pointer',
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
