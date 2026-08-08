'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bell, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/lib/stores/uiStore';
import { useAuth } from '@/hooks/useAuth';

const titles: Record<string, string> = {
  dashboard:     'Overview',
  license:       'Minha Licença',
  downloads:     'Downloads',
  projects:      'Projetos',
  history:       'Histórico',
  skills:        'Skills',
  billing:       'Faturamento',
  support:       'Suporte',
  settings:      'Configurações',
  admin:         'Admin',
  users:         'Usuários',
  licenses:      'Licenças',
  plans:         'Planos',
  orders:        'Pedidos',
  releases:      'Versões',
  announcements: 'Anúncios',
  analytics:     'Analytics',
};

export function Topbar() {
  const pathname = usePathname();
  const { sidebarCollapsed } = useUIStore();
  const { profile } = useAuth();
  const [pageTitle, setPageTitle] = useState('Overview');

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    const last = segments[segments.length - 1];
    setPageTitle(titles[last] || last);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 h-16 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.07] z-30 transition-all duration-300 flex items-center',
        sidebarCollapsed ? 'left-[68px]' : 'left-60'
      )}
    >
      <div className="flex items-center justify-between w-full px-6 gap-4">
        {/* Page title */}
        <h1 className="text-base font-semibold text-[#F2F2F2] truncate">{pageTitle}</h1>

        {/* Right */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Search */}
          <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#191919] border border-white/[0.07] hover:border-white/[0.14] transition-colors text-[#606060] hover:text-[#A0A0A0]">
            <Search className="w-4 h-4" />
            <span className="text-sm">Buscar</span>
            <kbd className="hidden lg:flex items-center gap-0.5 ml-2 px-1.5 py-0.5 rounded bg-[#222222] text-xs text-[#606060]">
              ⌘K
            </kbd>
          </button>

          {/* Notifications */}
          <button className="relative p-2.5 rounded-xl bg-[#191919] border border-white/[0.07] hover:border-white/[0.14] transition-colors text-[#606060] hover:text-[#F2F2F2]">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#F5C842]" />
          </button>

          {/* Status pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-green-500/[0.08] border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-green-400">Ativo</span>
          </div>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-lg bg-[#F5C842]/15 text-[#F5C842] flex items-center justify-center text-sm font-bold flex-shrink-0">
            {profile?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
        </div>
      </div>
    </header>
  );
}
