'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button, Input } from '@/components/ui';
import Link from 'next/link';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ResetPasswordPage() {
  const { resetPassword } = useAuth();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validation
    const newErrors: Record<string, string> = {};
    
    if (!formData.password) {
      newErrors.password = 'Nova senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    const result = await resetPassword(formData.password);
    
    setIsSubmitting(false);
    
    if (result.success) {
      setIsSuccess(true);
    } else {
      setErrors({ form: result.error || 'Erro ao redefinir senha' });
    }
  };
  
  if (isSuccess) {
    return (
      <div className="space-y-8 animate-fade-in text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-500/10 text-green-500 mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-text-primary">
            Senha redefinida!
          </h1>
          <p className="text-text-secondary max-w-md mx-auto">
            Sua senha foi alterada com sucesso. Você já pode fazer login com a nova senha.
          </p>
        </div>
        
        {/* Action */}
        <Link href="/login">
          <Button variant="primary" size="lg" className="w-full">
            Fazer login
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-text-primary">
          Redefinir senha
        </h1>
        <p className="text-text-secondary">
          Crie uma nova senha para sua conta
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
          label="Nova senha"
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
          label="Confirmar nova senha"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          error={errors.confirmPassword}
          leftIcon={<Lock className="w-5 h-5" />}
          disabled={isSubmitting}
        />
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
          rightIcon={!isSubmitting && <ArrowRight className="w-5 h-5" />}
        >
          Redefinir senha
        </Button>
      </form>
      
      {/* Back to Login */}
      <div className="text-center pt-4 border-t border-border-primary">
        <Link
          href="/login"
          className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
        >
          ← Voltar para o login
        </Link>
      </div>
    </div>
  );
}
