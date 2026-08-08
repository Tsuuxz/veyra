'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Search, Bell, Command } from 'lucide-react';
import { Badge } from '@/components/ui';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/lib/stores/uiStore';

export function Topbar() {
  const pathname = usePathname();
  const { sidebarCollapsed } = useUIStore();
  const [pageTitle, setPageTitle] = useState('');
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  
  useEffect(() => {
    // Generate page title and breadcrumbs from pathname
    const segments = pathname.split('/').filter(Boolean);
    
    const titles: Record<string, string> = {
      dashboard: 'Overview',
      license: 'Minha Licença',
      downloads: 'Downloads',
      projects: 'Projetos',
      history: 'Histórico',
      skills: 'Skills',
      billing: 'Faturamento',
      support: 'Suporte',
      settings: 'Configurações',
      admin: 'Admin',
      users: 'Usuários',
      licenses: 'Licenças',
      plans: 'Planos',
      orders: 'Pedidos',
      releases: 'Versões',
      announcements: 'Anúncios',
      analytics: 'Analytics',
    };
    
    if (segments.length > 0) {
      const lastSegment = segments[segments.length - 1];
      setPageTitle(titles[lastSegment] || lastSegment);
      setBreadcrumbs(segments.map(seg => titles[seg] || seg));
    }
  }, [pathname]);
  
  return (
    <header
      className={cn(
        'fixed top-0 right-0 h-20 bg-bg-primary border-b border-border-primary z-30 transition-all duration-300',
        sidebarCollapsed ? 'left-20' : 'left-64'
      )}
    >
      <div className="h-full flex items-center justify-between px-8">
        {/* Left: Breadcrumbs */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-text-tertiary mb-1">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                <span className={index === breadcrumbs.length - 1 ? 'text-text-primary font-medium' : ''}>
                  {crumb}
                </span>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-bold text-text-primary">
            {pageTitle}
          </h1>
        </div>
        
        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button
            className="flex items-center gap-3 px-4 py-2 bg-bg-elevated border border-border-primary rounded-lg hover:border-border-focus transition-colors group"
            onClick={() => {
              // Command palette will be implemented
              console.log('Open command palette');
            }}
          >
            <Search className="w-4 h-4 text-text-tertiary group-hover:text-text-primary" />
            <span className="text-sm text-text-tertiary hidden md:block">
              Buscar
            </span>
            <kbd className="hidden lg:flex items-center gap-1 px-2 py-0.5 bg-bg-tertiary border border-border-primary rounded text-xs text-text-tertiary">
              <Command className="w-3 h-3" />
              <span>K</span>
            </kbd>
          </button>
          
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-bg-elevated transition-colors group">
            <Bell className="w-5 h-5 text-text-tertiary group-hover:text-text-primary" />
            {/* Notification badge */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-status-error rounded-full" />
          </button>
          
          {/* Status */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-500">
              VEYRA Active
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
