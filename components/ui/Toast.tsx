'use client';

import { cn } from '@/lib/utils';
import { CheckCircle2, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ToastProps {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose: (id: string) => void;
}

export function Toast({ id, message, type = 'info', duration = 5000, onClose }: ToastProps) {
  const [isExiting, setIsExiting] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);
  
  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose(id);
    }, 200);
  };
  
  const icons = {
    success: <CheckCircle2 className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <AlertCircle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };
  
  const styles = {
    success: 'bg-green-500/10 border-green-500/20 text-green-500',
    error: 'bg-red-500/10 border-red-500/20 text-red-500',
    warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500',
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-500',
  };
  
  return (
    <div
      className={cn(
        'flex items-center gap-3 min-w-[300px] max-w-md px-4 py-3 rounded-lg border backdrop-blur-sm',
        'transition-all duration-200',
        isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0',
        styles[type]
      )}
    >
      <div className="flex-shrink-0">
        {icons[type]}
      </div>
      
      <p className="flex-1 text-sm font-medium text-text-primary">
        {message}
      </p>
      
      <button
        onClick={handleClose}
        className="flex-shrink-0 p-1 hover:bg-black/10 rounded transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

// Toast Container Component
interface ToastContainerProps {
  toasts: Array<{
    id: string;
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
  }>;
  onClose: (id: string) => void;
}

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
