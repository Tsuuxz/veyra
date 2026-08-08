'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'icon' | 'full';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ variant = 'full', size = 'md', className }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-7 h-7', text: 'text-base' },
    md: { icon: 'w-9 h-9', text: 'text-xl' },
    lg: { icon: 'w-12 h-12', text: 'text-3xl' },
  };

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {/* V geometric mark */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={sizes[size].icon}
      >
        <rect width="40" height="40" rx="10" fill="#F5C842" />
        <path
          d="M10 11h5.5l4.5 13 4.5-13H30L20 31 10 11Z"
          fill="#0A0A0A"
        />
      </svg>

      {variant === 'full' && (
        <span className={cn('font-bold tracking-tight text-[#F2F2F2]', sizes[size].text)}>
          VEYRA
        </span>
      )}
    </div>
  );
}
