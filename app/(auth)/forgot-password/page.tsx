'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button, Input } from '@/components/ui';
import Link from 'next/link';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Email é obrigatório');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email inválido');
      return;
    }
    
    setIsSubmitting(true);
    
    const result = await forgotPassword(email);
    
    setIsSubmitting(false);
    
    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.error || 'Erro ao enviar email de recuperação');
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
            Email enviado!
          </h1>
          <p className="text-text-secondary max-w-md mx-auto">
            Enviamos um link de recuperação para <strong className="text-text-primary">{email}</strong>. 
            Verifique sua caixa de entrada e spam.
          </p>
        </div>
        
        {/* Actions */}
        <div className="space-y-4 pt-4">
          <Link href="/login">
            <Button variant="primary" size="lg" className="w-full">
              Voltar para o login
            </Button>
          </Link>
          
          <button
            onClick={() => {
              setIsSuccess(false);
              setEmail('');
            }}
            className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
          >
            Reenviar email
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-text-primary">
          Recuperar senha
        </h1>
        <p className="text-text-secondary">
          Digite seu email para receber um link de recuperação
        </p>
      </div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-sm text-red-500">{error}</p>
          </div>
        )}
        
        <Input
          label="Email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          leftIcon={<Mail className="w-5 h-5" />}
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
          Enviar link de recuperação
        </Button>
      </form>
      
      {/* Links */}
      <div className="space-y-4 pt-4 border-t border-border-primary">
        <div className="text-center">
          <p className="text-text-secondary">
            Lembrou sua senha?{' '}
            <Link
              href="/login"
              className="text-veyra-cyan hover:text-veyra-cyan-light font-medium transition-colors"
            >
              Fazer login
            </Link>
          </p>
        </div>
        
        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-text-tertiary hover:text-text-secondary transition-colors"
          >
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}
