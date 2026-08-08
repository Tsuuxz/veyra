'use client';

import { Logo } from '@/components/brand/Logo';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg-primary z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse">
          <Logo size="lg" />
        </div>
        
        <div className="flex gap-1.5">
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
