'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button, Input, Checkbox } from '@/components/ui';
import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Basic validation
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    const result = await login(formData.email, formData.password);
    
    setIsSubmitting(false);
    
    if (!result.success) {
      setErrors({ form: result.error || 'Erro ao fazer login' });
    }
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-text-primary">
          Bem-vindo de volta
        </h1>
        <p className="text-text-secondary">
          Entre com sua conta para continuar
        </p>
      </div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {errors.form && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-sm text-red-500">{errors.form}</p>
          </div>
        )}
        
        <Input
          label="Email"
          type="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={errors.email}
          leftIcon={<Mail className="w-5 h-5" />}
          disabled={isSubmitting}
        />
        
        <Input
          label="Senha"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          error={errors.password}
          leftIcon={<Lock className="w-5 h-5" />}
          disabled={isSubmitting}
        />
        
        <div className="flex items-center justify-between">
          <Checkbox
            label="Lembrar de mim"
            checked={formData.remember}
            onChange={(e) => setFormData({ ...formData, remember: e.target.checked })}
            disabled={isSubmitting}
          />
          
          <Link
            href="/forgot-password"
            className="text-sm text-veyra-cyan hover:text-veyra-cyan-light transition-colors"
          >
            Esqueceu a senha?
          </Link>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
          rightIcon={!isSubmitting && <ArrowRight className="w-5 h-5" />}
        >
          Entrar
        </Button>
      </form>
      
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-primary" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-bg-primary text-text-tertiary">
            ou
          </span>
        </div>
      </div>
      
      {/* Social Login - Placeholder for future implementation */}
      <div className="space-y-3">
        <p className="text-sm text-text-tertiary text-center">
          Login social será habilitado em breve
        </p>
      </div>
      
      {/* Register Link */}
      <div className="text-center pt-4 border-t border-border-primary">
        <p className="text-text-secondary">
          Não tem uma conta?{' '}
          <Link
            href="/register"
            className="text-veyra-cyan hover:text-veyra-cyan-light font-medium transition-colors"
          >
            Criar conta
          </Link>
        </p>
      </div>
      
      {/* Back to Home */}
      <div className="text-center">
        <Link
          href="/"
          className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
        >
          ← Voltar para o início
        </Link>
      </div>
    </div>
  );
}
