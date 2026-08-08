'use client';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { forwardRef } from 'react';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className={cn('flex items-center gap-2 cursor-pointer', className)}>
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />
          <div className={cn(
            'w-5 h-5 border-2 rounded transition-all duration-200',
            'border-border-primary bg-bg-tertiary',
            'peer-checked:border-accent-primary peer-checked:bg-accent-primary',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-accent-primary peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg-primary',
            'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed'
          )}>
            <Check className="w-4 h-4 text-text-inverse opacity-0 peer-checked:opacity-100 transition-opacity absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        
        {label && (
          <span className="text-sm text-text-primary select-none">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
