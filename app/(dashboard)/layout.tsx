'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Topbar } from '@/components/dashboard/Topbar';
import { MobileSidebar } from '@/components/dashboard/MobileSidebar';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { Menu, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/lib/stores/uiStore';
import { Logo } from '@/components/brand/Logo';
import { useAuth } from '@/hooks/useAuth';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { sidebarCollapsed } = useUIStore();
  const { logout } = useAuth();

  return (
    <AuthGuard requireAuth>
      <div className="min-h-screen bg-[#0A0A0A]">
        {/* Desktop sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Mobile sidebar */}
        <MobileSidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

        {/* Desktop topbar */}
        <div className="hidden lg:block">
          <Topbar />
        </div>

        {/* Mobile topbar */}
        <div className="lg:hidden fixed top-0 inset-x-0 h-16 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.07] z-30 flex items-center justify-between px-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-xl text-[#606060] hover:text-[#F2F2F2] hover:bg-white/[0.04] transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Logo size="sm" />
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold text-green-400">Ativo</span>
          </div>
        </div>

        {/* Main */}
        <main className={cn(
          'min-h-screen transition-all duration-300 pt-16',
          'lg:pt-16',
          sidebarCollapsed ? 'lg:pl-[68px]' : 'lg:pl-60'
        )}>
          <div className="p-6 md:p-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
