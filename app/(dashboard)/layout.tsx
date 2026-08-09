'use client';

import { useState } from 'react';
import { AuthGuard } from '@/components/auth/AuthGuard';
import Sidebar from '@/components/dashboard/Sidebar';
import MobileSidebar from '@/components/dashboard/MobileSidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AuthGuard requireAuth>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#050707' }}>

        {/* Sidebar desktop */}
        <Sidebar />

        {/* Mobile sidebar */}
        <MobileSidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

        {/* Main area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>

          {/* Topbar */}
          <header style={{
            height: 56,
            borderBottom: '1px solid #1e2626',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            position: 'sticky',
            top: 0,
            background: '#050707',
            zIndex: 10,
            flexShrink: 0,
          }}>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#8a9898',
                padding: 4,
              }}
              className="dash-hamburger"
              aria-label="Menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="17" y2="6"/>
                <line x1="3" y1="10" x2="17" y2="10"/>
                <line x1="3" y1="14" x2="17" y2="14"/>
              </svg>
            </button>

            {/* Page title placeholder — children override via context if needed */}
            <div />

            {/* Right side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 12, fontWeight: 600, color: '#22c55e',
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: 999, padding: '4px 10px',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                Ativo
              </span>
            </div>
          </header>

          {/* Page content */}
          <main style={{ flex: 1, padding: '32px 32px', maxWidth: 1100, width: '100%' }}>
            {children}
          </main>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dash-hamburger { display: flex !important; }
          .dash-sidebar { display: none !important; }
        }
      `}</style>
    </AuthGuard>
  );
}
