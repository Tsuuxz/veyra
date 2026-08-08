import { useAuthStore } from '@/lib/stores/authStore';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useToast } from '@/lib/stores/toastStore';

export function useAuth() {
  const { user, profile, isLoading, isAuthenticated, setUser, setProfile, logout: logoutStore } = useAuthStore();
  const router = useRouter();
  const toast = useToast();
  
  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      
      if (data.user) {
        setUser(data.user);
        
        // Fetch profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();
        
        if (profileData) {
          setProfile(profileData);
        }
        
        toast.success('Login realizado com sucesso!');
        router.push('/dashboard');
      }
      
      return { success: true };
    } catch (error: any) {
      toast.error(error.message || 'Erro ao fazer login');
      return { success: false, error: error.message };
    }
  };
  
  const register = async (name: string, email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });
      
      if (error) throw error;
      
      toast.success('Cadastro realizado! Verifique seu email.');
      router.push('/login');
      
      return { success: true };
    } catch (error: any) {
      toast.error(error.message || 'Erro ao criar conta');
      return { success: false, error: error.message };
    }
  };
  
  const logout = async () => {
    try {
      await supabase.auth.signOut();
      logoutStore();
      toast.success('Logout realizado com sucesso');
      router.push('/login');
    } catch (error: any) {
      toast.error('Erro ao fazer logout');
    }
  };
  
  const forgotPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) throw error;
      
      toast.success('Email de recuperação enviado!');
      return { success: true };
    } catch (error: any) {
      toast.error(error.message || 'Erro ao enviar email');
      return { success: false, error: error.message };
    }
  };
  
  const resetPassword = async (password: string) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password,
      });
      
      if (error) throw error;
      
      toast.success('Senha redefinida com sucesso!');
      router.push('/login');
      return { success: true };
    } catch (error: any) {
      toast.error(error.message || 'Erro ao redefinir senha');
      return { success: false, error: error.message };
    }
  };
  
  const isAdmin = () => {
    return profile?.role === 'ADMIN';
  };
  
  return {
    user,
    profile,
    isLoading,
    isAuthenticated,
    isAdmin,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
  };
}
