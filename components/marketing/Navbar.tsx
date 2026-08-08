'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Produto', href: '#product' },
  { label: 'Recursos', href: '#features' },
  { label: 'Como funciona', href: '#how-it-works' },
  { label: 'Planos', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border-primary' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="md" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="md">
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="md">
                Começar agora
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-primary hover:bg-bg-elevated rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-bg-elevated border-t border-border-primary animate-slide-down">
          <div className="container mx-auto py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex flex-col gap-3 pt-4 border-t border-border-primary">
              <Link href="/login">
                <Button variant="ghost" size="md" className="w-full">
                  Entrar
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="md" className="w-full">
                  Começar agora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
