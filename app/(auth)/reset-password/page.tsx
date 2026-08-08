'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button, Input } from '@/components/ui';
import Link from 'next/link';
import { Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ResetPasswordPage() {
  const { resetPassword } = useAuth();
  const [form, setForm] = useState({ password: '', confirm: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const errs: Record<string, string> = {};
    if (!form.password || form.password.length < 6) errs.password = 'Mínimo 6 caracteres';
    if (form.password !== form.confirm) errs.confirm = 'Senhas não coincidem';
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    const result = await resetPassword(form.password);
    setSubmitting(false);
    if (result.success) setSuccess(true);
    else setErrors({ form: result.error || 'Erro ao redefinir senha' });
  };

  if (success) {
    return (
      <div className="space-y-6 animate-fade-in text-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-500/10 text-green-400 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#F2F2F2] mb-2">Senha redefinida!</h1>
          <p className="text-sm text-[#606060]">Sua senha foi alterada com sucesso.</p>
        </div>
        <Link
          href="/login"
          className="block w-full py-3 rounded-xl bg-[#F5C842] text-[#0A0A0A] text-sm font-bold text-center hover:bg-[#F7D46A] transition-colors"
        >
          Fazer login
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-7 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-[#F2F2F2] mb-1">Criar nova senha</h1>
        <p className="text-sm text-[#606060]">Escolha uma senha segura para sua conta</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.form && (
          <div className="p-3.5 rounded-xl bg-red-500/[0.08] border border-red-500/20 text-sm text-red-400">
            {errors.form}
          </div>
        )}

        <Input
          label="Nova senha"
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          error={errors.password}
          leftIcon={<Lock className="w-4 h-4" />}
          helperText="Mínimo 6 caracteres"
          disabled={submitting}
        />

        <Input
          label="Confirmar senha"
          type="password"
          placeholder="••••••••"
          value={form.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          error={errors.confirm}
          leftIcon={<Lock className="w-4 h-4" />}
          disabled={submitting}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full !bg-[#F5C842] !text-[#0A0A0A] hover:!bg-[#F7D46A] font-bold"
          isLoading={submitting}
          rightIcon={!submitting ? <ArrowRight className="w-5 h-5" /> : undefined}
        >
          Redefinir senha
        </Button>
      </form>

      <p className="text-center">
        <Link href="/login" className="text-xs text-[#606060] hover:text-[#A0A0A0] transition-colors">
          ← Voltar ao login
        </Link>
      </p>
    </div>
  );
}
