'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/brand/Logo';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import {
  LayoutDashboard,
  Key,
  Download,
  FolderKanban,
  History,
  BookOpen,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
  Shield,
} from 'lucide-react';
import { Badge } from '@/components/ui';

const menuItems = [
  {
    icon: LayoutDashboard,
    label: 'Overview',
    href: '/dashboard',
  },
  {
    icon: Key,
    label: 'Minha Licença',
    href: '/dashboard/license',
  },
  {
    icon: Download,
    label: 'Downloads',
    href: '/dashboard/downloads',
  },
  {
    icon: FolderKanban,
    label: 'Projetos',
    href: '/dashboard/projects',
  },
  {
    icon: History,
    label: 'Histórico',
    href: '/dashboard/history',
  },
  {
    icon: BookOpen,
    label: 'Skills',
    href: '/dashboard/skills',
  },
  {
    icon: CreditCard,
    label: 'Faturamento',
    href: '/dashboard/billing',
  },
  {
    icon: HelpCircle,
    label: 'Suporte',
    href: '/dashboard/support',
  },
  {
    icon: Settings,
    label: 'Configurações',
    href: '/dashboard/settings',
  },
];

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname();
  const { profile, logout, isAdmin } = useAuth();
  
  // Close on pathname change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);
  
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-fade-in lg:hidden"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <aside className="fixed left-0 top-0 bottom-0 w-80 bg-bg-secondary border-r border-border-primary z-50 animate-slide-in-left lg:hidden">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-border-primary">
            <Logo size="md" />
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-bg-elevated transition-colors text-text-tertiary hover:text-text-primary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* User Profile */}
          <div className="p-6 border-b border-border-primary">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-veyra-cyan/20 text-veyra-cyan flex items-center justify-center font-semibold text-lg">
                {profile?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-text-primary truncate">
                  {profile?.name || 'Usuário'}
                </p>
                <p className="text-sm text-text-tertiary truncate">
                  {profile?.email}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                      isActive
                        ? 'bg-veyra-cyan/10 text-veyra-cyan'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                    )}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-veyra-cyan" />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Admin Link */}
            {isAdmin() && (
              <>
                <div className="my-6 border-t border-border-primary" />
                <Link
                  href="/admin"
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                    pathname.startsWith('/admin')
                      ? 'bg-purple-500/10 text-purple-500'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                  )}
                >
                  <Shield className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Admin</span>
                  <Badge variant="outline" size="sm" className="ml-auto">
                    ADMIN
                  </Badge>
                </Link>
              </>
            )}
          </nav>
          
          {/* Logout */}
          <div className="p-4 border-t border-border-primary">
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500/10 transition-colors text-text-secondary hover:text-status-error"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-sm font-medium">Sair</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
