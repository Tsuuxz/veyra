'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { forwardRef } from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: Array<{ value: string; label: string }>;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, options, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-2">
            {label}
          </label>
        )}
        
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              'w-full h-11 px-4 pr-10 bg-bg-tertiary border border-border-primary rounded-lg appearance-none',
              'text-text-primary',
              'focus:outline-none focus:border-border-focus focus:ring-1 focus:ring-border-focus',
              'transition-all duration-200',
              'disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
              error && 'border-status-error focus:border-status-error focus:ring-status-error',
              className
            )}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary pointer-events-none" />
        </div>
        
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

Select.displayName = 'Select';
