'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const pages = [];
  const maxVisible = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  
  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          'p-2 rounded-lg transition-colors',
          currentPage === 1
            ? 'text-text-tertiary cursor-not-allowed'
            : 'text-text-primary hover:bg-bg-elevated'
        )}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      {/* First page */}
      {startPage > 1 && (
        <>
          <PageButton
            page={1}
            currentPage={currentPage}
            onClick={() => onPageChange(1)}
          />
          {startPage > 2 && <span className="text-text-tertiary">...</span>}
        </>
      )}
      
      {/* Page numbers */}
      {pages.map((page) => (
        <PageButton
          key={page}
          page={page}
          currentPage={currentPage}
          onClick={() => onPageChange(page)}
        />
      ))}
      
      {/* Last page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="text-text-tertiary">...</span>}
          <PageButton
            page={totalPages}
            currentPage={currentPage}
            onClick={() => onPageChange(totalPages)}
          />
        </>
      )}
      
      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          'p-2 rounded-lg transition-colors',
          currentPage === totalPages
            ? 'text-text-tertiary cursor-not-allowed'
            : 'text-text-primary hover:bg-bg-elevated'
        )}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

function PageButton({ page, currentPage, onClick }: { page: number; currentPage: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'min-w-[40px] h-10 px-3 rounded-lg text-sm font-medium transition-all duration-200',
        page === currentPage
          ? 'bg-accent-primary text-text-inverse'
          : 'text-text-primary hover:bg-bg-elevated'
      )}
    >
      {page}
    </button>
  );
}
