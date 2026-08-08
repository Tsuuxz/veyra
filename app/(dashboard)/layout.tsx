'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Topbar } from '@/components/dashboard/Topbar';
import { MobileSidebar } from '@/components/dashboard/MobileSidebar';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/lib/stores/uiStore';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const { sidebarCollapsed } = useUIStore();
  
  return (
    <AuthGuard requireAuth>
      <div className="min-h-screen bg-bg-primary">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        
        {/* Mobile Sidebar */}
        <MobileSidebar
          isOpen={isMobileSidebarOpen}
          onClose={() => setIsMobileSidebarOpen(false)}
        />
        
        {/* Topbar */}
        <div className="hidden lg:block">
          <Topbar />
        </div>
        
        {/* Mobile Topbar */}
        <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-bg-primary border-b border-border-primary z-30 flex items-center justify-between px-4">
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-bg-elevated transition-colors"
          >
            <Menu className="w-6 h-6 text-text-primary" />
          </button>
          
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-500">Active</span>
          </div>
        </div>
        
        {/* Main Content */}
        <main
          className={cn(
            'min-h-screen transition-all duration-300',
            'pt-16 lg:pt-20',
            'lg:pl-64',
            sidebarCollapsed && 'lg:pl-20'
          )}
        >
          <div className="p-6 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
