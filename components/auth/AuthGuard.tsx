'use client';

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter, usePathname } from 'next/navigation';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
}

export function AuthGuard({ children, requireAuth = true, requireAdmin = false }: AuthGuardProps) {
  const { isAuthenticated, isAdmin: checkIsAdmin, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    if (isLoading) return;
    
    if (requireAuth && !isAuthenticated) {
      // Save current path to redirect back after login
      const redirectUrl = `/login?redirect=${encodeURIComponent(pathname)}`;
      router.push(redirectUrl);
      return;
    }
    
    if (requireAdmin && !checkIsAdmin()) {
      router.push('/dashboard');
      return;
    }
  }, [isAuthenticated, isLoading, requireAuth, requireAdmin, checkIsAdmin, router, pathname]);
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  if (requireAuth && !isAuthenticated) {
    return <LoadingScreen />;
  }
  
  if (requireAdmin && !checkIsAdmin()) {
    return <LoadingScreen />;
  }
  
  return <>{children}</>;
}
