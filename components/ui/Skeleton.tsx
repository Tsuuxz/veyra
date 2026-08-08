'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ 
  variant = 'rectangular', 
  width, 
  height,
  className,
  ...props 
}: SkeletonProps) {
  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };
  
  return (
    <div
      className={cn(
        'bg-bg-elevated animate-pulse',
        variants[variant],
        className
      )}
      style={{ width, height }}
      {...props}
    />
  );
}

// Preset skeleton components
export function SkeletonCard() {
  return (
    <div className="p-6 bg-bg-card border border-border-primary rounded-xl space-y-4">
      <Skeleton variant="text" width="60%" height={24} />
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <div className="flex gap-2 pt-2">
        <Skeleton width={80} height={36} />
        <Skeleton width={80} height={36} />
      </div>
    </div>
  );
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton width={40} height={40} variant="circular" />
          <div className="flex-1 space-y-2">
            <Skeleton width="40%" height={16} />
            <Skeleton width="60%" height={14} />
          </div>
        </div>
      ))}
    </div>
  );
}
