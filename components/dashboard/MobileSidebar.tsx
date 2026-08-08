'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/brand/Logo';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { X, LayoutDashboard, Key, Download, FolderKanban, History, BookOpen, CreditCard, Settings, HelpCircle, LogOut, Shield } from 'lucide-react';

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

interface Props { isOpen: boolean; onClose: () => void; }

export function MobileSidebar({ isOpen, onClose }: Props) {
  const pathname = usePathname();
  const { profile, logout, isAdmin } = useAuth();

  useEffect(() => { onClose(); }, [pathname]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-40 animate-fade-in" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-[#0D0D0D] border-r border-white/[0.07] z-50 flex flex-col animate-slide-up">
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/[0.07]">
          <Logo size="sm" />
          <button onClick={onClose} className="p-2 rounded-lg text-[#606060] hover:text-[#F2F2F2] hover:bg-white/[0.04]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-2.5 space-y-0.5">
          {navItems.map((item) => {
            const active = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href + '/'));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium',
                  active ? 'bg-[#F5C842]/10 text-[#F5C842]' : 'text-[#606060] hover:text-[#F2F2F2] hover:bg-white/[0.04]'
                )}
              >
                <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
                <span className="flex-1">{item.label}</span>
                {active && <span className="w-1.5 h-1.5 rounded-full bg-[#F5C842]" />}
              </Link>
            );
          })}

          {isAdmin && isAdmin() && (
            <>
              <div className="my-3 border-t border-white/[0.06]" />
              <Link href="/admin" className={cn('flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium', pathname.startsWith('/admin') ? 'bg-purple-500/10 text-purple-400' : 'text-[#606060] hover:text-[#F2F2F2] hover:bg-white/[0.04]')}>
                <Shield className="w-[18px] h-[18px]" />
                <span>Admin</span>
              </Link>
            </>
          )}
        </nav>

        {/* User */}
        <div className="p-2.5 border-t border-white/[0.07]">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-[#F5C842]/15 text-[#F5C842] flex items-center justify-center text-sm font-bold">
              {profile?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#F2F2F2] truncate">{profile?.name || 'Usuário'}</p>
              <p className="text-xs text-[#606060] truncate">{profile?.email}</p>
            </div>
            <button onClick={logout} className="p-1.5 rounded-lg text-[#606060] hover:text-red-400 transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
