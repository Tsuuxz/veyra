'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/brand/Logo';
import { useUIStore } from '@/lib/stores/uiStore';
import { useAuth } from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
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
  ChevronLeft,
  LogOut,
  Shield,
} from 'lucide-react';
import { Dropdown, DropdownItem, DropdownDivider } from '@/components/ui';
import { Badge } from '@/components/ui';

const userMenuItems = [
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

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar } = useUIStore();
  const { profile, logout, isAdmin } = useAuth();
  
  return (
    <aside
      className={cn(
        'fixed left-0 top-0 bottom-0 bg-bg-secondary border-r border-border-primary transition-all duration-300 z-40',
        sidebarCollapsed ? 'w-20' : 'w-64'
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-border-primary">
          {!sidebarCollapsed && <Logo size="md" />}
          {sidebarCollapsed && (
            <div className="mx-auto">
              <Logo variant="icon" size="md" />
            </div>
          )}
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-3">
          <div className="space-y-1">
            {userMenuItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group',
                    isActive
                      ? 'bg-veyra-cyan/10 text-veyra-cyan'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated',
                    sidebarCollapsed && 'justify-center'
                  )}
                  title={sidebarCollapsed ? item.label : undefined}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!sidebarCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                  
                  {isActive && !sidebarCollapsed && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-veyra-cyan" />
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
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group',
                  pathname.startsWith('/admin')
                    ? 'bg-purple-500/10 text-purple-500'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated',
                  sidebarCollapsed && 'justify-center'
                )}
                title={sidebarCollapsed ? 'Admin' : undefined}
              >
                <Shield className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && (
                  <>
                    <span className="text-sm font-medium">Admin</span>
                    <Badge variant="outline" size="sm" className="ml-auto text-xs">
                      ADMIN
                    </Badge>
                  </>
                )}
              </Link>
            </>
          )}
        </nav>
        
        {/* User Profile */}
        <div className="p-4 border-t border-border-primary">
          {!sidebarCollapsed ? (
            <Dropdown
              align="right"
              trigger={
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-bg-elevated transition-colors text-left group">
                  <div className="w-10 h-10 rounded-full bg-veyra-cyan/20 text-veyra-cyan flex items-center justify-center flex-shrink-0 font-semibold">
                    {profile?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary truncate">
                      {profile?.name || 'Usuário'}
                    </p>
                    <p className="text-xs text-text-tertiary truncate">
                      {profile?.email}
                    </p>
                  </div>
                </button>
              }
            >
              <DropdownItem icon={<Settings className="w-4 h-4" />}>
                Configurações
              </DropdownItem>
              <DropdownItem icon={<HelpCircle className="w-4 h-4" />}>
                Ajuda
              </DropdownItem>
              <DropdownDivider />
              <DropdownItem
                icon={<LogOut className="w-4 h-4" />}
                onClick={logout}
                danger
              >
                Sair
              </DropdownItem>
            </Dropdown>
          ) : (
            <button
              onClick={logout}
              className="w-full flex items-center justify-center p-3 rounded-lg hover:bg-bg-elevated transition-colors text-text-secondary hover:text-status-error"
              title="Sair"
            >
              <LogOut className="w-5 h-5" />
            </button>
          )}
        </div>
        
        {/* Collapse Toggle */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-20 w-6 h-6 flex items-center justify-center rounded-full bg-bg-elevated border border-border-primary text-text-tertiary hover:text-text-primary hover:border-border-focus transition-all"
        >
          <ChevronLeft
            className={cn(
              'w-4 h-4 transition-transform',
              sidebarCollapsed && 'rotate-180'
            )}
          />
        </button>
      </div>
    </aside>
  );
}
