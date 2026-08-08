'use client';

import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-2">
            {label}
          </label>
        )}
        
        <textarea
          ref={ref}
          className={cn(
            'w-full min-h-[120px] px-4 py-3 bg-bg-tertiary border border-border-primary rounded-lg',
            'text-text-primary placeholder:text-text-tertiary',
            'focus:outline-none focus:border-border-focus focus:ring-1 focus:ring-border-focus',
            'transition-all duration-200 resize-y',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-status-error focus:border-status-error focus:ring-status-error',
            className
          )}
          {...props}
        />
        
        {error && (
          <p className="mt-1.5 text-sm text-status-error">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-text-tertiary">{helperText}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
