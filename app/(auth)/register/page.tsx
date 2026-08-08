'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button, Input, Checkbox } from '@/components/ui';
import Link from 'next/link';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validation
    const newErrors: Record<string, string> = {};
    
    if (!formData.name) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Nome deve ter no mínimo 3 caracteres';
    }
    
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Você deve aceitar os termos de uso';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    const result = await register(formData.name, formData.email, formData.password);
    
    setIsSubmitting(false);
    
    if (!result.success) {
      setErrors({ form: result.error || 'Erro ao criar conta' });
    }
  };
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-text-primary">
          Criar conta
        </h1>
        <p className="text-text-secondary">
          Comece a usar VEYRA hoje mesmo
        </p>
      </div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {errors.form && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-sm text-red-500">{errors.form}</p>
          </div>
        )}
        
        <Input
          label="Nome completo"
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={errors.name}
          leftIcon={<User className="w-5 h-5" />}
          disabled={isSubmitting}
        />
        
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
          helperText="Mínimo de 6 caracteres"
          disabled={isSubmitting}
        />
        
        <Input
          label="Confirmar senha"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          error={errors.confirmPassword}
          leftIcon={<Lock className="w-5 h-5" />}
          disabled={isSubmitting}
        />
        
        <div>
          <Checkbox
            checked={formData.acceptTerms}
            onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
            disabled={isSubmitting}
          />
          <span className="text-sm text-text-secondary">
            Aceito os{' '}
            <Link href="#" className="text-veyra-cyan hover:text-veyra-cyan-light">
              termos de uso
            </Link>
            {' '}e{' '}
            <Link href="#" className="text-veyra-cyan hover:text-veyra-cyan-light">
              política de privacidade
            </Link>
          </span>
          {errors.acceptTerms && (
            <p className="mt-1.5 text-sm text-status-error">{errors.acceptTerms}</p>
          )}
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
          rightIcon={!isSubmitting && <ArrowRight className="w-5 h-5" />}
        >
          Criar conta
        </Button>
      </form>
      
      {/* Login Link */}
      <div className="text-center pt-4 border-t border-border-primary">
        <p className="text-text-secondary">
          Já tem uma conta?{' '}
          <Link
            href="/login"
            className="text-veyra-cyan hover:text-veyra-cyan-light font-medium transition-colors"
          >
            Fazer login
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
