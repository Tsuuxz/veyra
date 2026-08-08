'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/brand/Logo';
import { useUIStore } from '@/lib/stores/uiStore';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard, Key, Download, FolderKanban,
  History, BookOpen, CreditCard, Settings,
  HelpCircle, ChevronLeft, LogOut, Shield,
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview',      href: '/dashboard' },
  { icon: Key,             label: 'Minha Licença', href: '/dashboard/license' },
  { icon: Download,        label: 'Downloads',     href: '/dashboard/downloads' },
  { icon: FolderKanban,    label: 'Projetos',      href: '/dashboard/projects' },
  { icon: History,         label: 'Histórico',     href: '/dashboard/history' },
  { icon: BookOpen,        label: 'Skills',        href: '/dashboard/skills' },
  { icon: CreditCard,      label: 'Faturamento',   href: '/dashboard/billing' },
  { icon: HelpCircle,      label: 'Suporte',       href: '/dashboard/support' },
  { icon: Settings,        label: 'Configurações', href: '/dashboard/settings' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar } = useUIStore();
  const { profile, logout, isAdmin } = useAuth();

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 bottom-0 bg-[#0D0D0D] border-r border-white/[0.07] transition-all duration-300 z-40 flex flex-col',
        sidebarCollapsed ? 'w-[68px]' : 'w-60'
      )}
    >
      {/* Logo */}
      <div className={cn(
        'h-16 flex items-center border-b border-white/[0.07] flex-shrink-0',
        sidebarCollapsed ? 'justify-center px-0' : 'px-5'
      )}>
        {sidebarCollapsed ? <Logo variant="icon" size="sm" /> : <Logo size="sm" />}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2.5 space-y-0.5">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href + '/'));
          return (
            <Link
              key={item.href}
              href={item.href}
              title={sidebarCollapsed ? item.label : undefined}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 group text-sm font-medium',
                active
                  ? 'bg-[#F5C842]/10 text-[#F5C842]'
                  : 'text-[#606060] hover:text-[#F2F2F2] hover:bg-white/[0.04]',
                sidebarCollapsed && 'justify-center px-2'
              )}
            >
              <item.icon className="w-4.5 h-4.5 flex-shrink-0 w-[18px] h-[18px]" />
              {!sidebarCollapsed && (
                <>
                  <span className="flex-1">{item.label}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#F5C842] flex-shrink-0" />}
                </>
              )}
            </Link>
          );
        })}

        {/* Admin */}
        {isAdmin && isAdmin() && (
          <>
            <div className="my-3 border-t border-white/[0.06]" />
            <Link
              href="/admin"
              title={sidebarCollapsed ? 'Admin' : undefined}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium',
                pathname.startsWith('/admin')
                  ? 'bg-purple-500/10 text-purple-400'
                  : 'text-[#606060] hover:text-[#F2F2F2] hover:bg-white/[0.04]',
                sidebarCollapsed && 'justify-center px-2'
              )}
            >
              <Shield className="w-[18px] h-[18px] flex-shrink-0" />
              {!sidebarCollapsed && <span>Admin</span>}
            </Link>
          </>
        )}
      </nav>

      {/* User */}
      <div className="p-2.5 border-t border-white/[0.07] flex-shrink-0">
        {!sidebarCollapsed ? (
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.04] transition-colors group">
            <div className="w-8 h-8 rounded-lg bg-[#F5C842]/15 text-[#F5C842] flex items-center justify-center flex-shrink-0 text-sm font-bold">
              {profile?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#F2F2F2] truncate">{profile?.name || 'Usuário'}</p>
              <p className="text-xs text-[#606060] truncate">{profile?.email}</p>
            </div>
            <button
              onClick={logout}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-lg hover:text-red-400 text-[#606060]"
              title="Sair"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={logout}
            title="Sair"
            className="w-full flex items-center justify-center p-2.5 rounded-xl text-[#606060] hover:text-red-400 hover:bg-white/[0.04] transition-colors"
          >
            <LogOut className="w-[18px] h-[18px]" />
          </button>
        )}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-[72px] w-6 h-6 flex items-center justify-center rounded-full bg-[#191919] border border-white/[0.1] text-[#606060] hover:text-[#F2F2F2] hover:border-white/[0.2] transition-all z-50"
      >
        <ChevronLeft className={cn('w-3.5 h-3.5 transition-transform', sidebarCollapsed && 'rotate-180')} />
      </button>
    </aside>
  );
}
