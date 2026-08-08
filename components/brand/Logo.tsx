'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'icon' | 'full';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ variant = 'full', size = 'md', className }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-6 h-6', text: 'text-lg' },
    md: { icon: 'w-8 h-8', text: 'text-xl' },
    lg: { icon: 'w-12 h-12', text: 'text-3xl' },
  };
  
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* VEYRA Icon - Geometric Winged Symbol */}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={sizes[size].icon}
      >
        {/* Stylized V with wing elements */}
        <path
          d="M20 15 L35 15 Q40 15 42 20 L50 45 L58 20 Q60 15 65 15 L80 15 Q82 15 82 17 L82 20 Q82 22 80 24 L55 75 Q53 78 50 78 Q47 78 45 75 L20 24 Q18 22 18 20 L18 17 Q18 15 20 15Z"
          fill="currentColor"
        />
        
        {/* Left wing element */}
        <path
          d="M15 30 Q13 32 15 34 L30 42 Q32 43 33 41 L35 38 Q36 36 34 35 L17 28 Q15 27 15 30Z"
          fill="currentColor"
          opacity="0.7"
        />
        
        {/* Right wing element */}
        <path
          d="M85 30 Q87 32 85 34 L70 42 Q68 43 67 41 L65 38 Q64 36 66 35 L83 28 Q85 27 85 30Z"
          fill="currentColor"
          opacity="0.7"
        />
        
        {/* Bottom accent */}
        <path
          d="M45 82 L50 90 Q50 92 50 92 Q50 92 50 90 L55 82 Q56 80 54 80 L46 80 Q44 80 45 82Z"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
      
      {variant === 'full' && (
        <span className={cn(
          'font-semibold tracking-tight text-text-primary',
          sizes[size].text
        )}>
          VEYRA
        </span>
      )}
    </div>
  );
}
