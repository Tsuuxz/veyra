'use client';

import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { Download, Key, Monitor, FolderKanban, ArrowRight, Clock, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';

const quickActions = [
  { icon: Download,     label: 'Download VEYRA',  desc: 'Baixar versão mais recente', href: '/dashboard/downloads', color: 'text-blue-400',   bg: 'bg-blue-500/10' },
  { icon: Key,          label: 'Ver Licença',     desc: 'Gerenciar dispositivos',      href: '/dashboard/license',   color: 'text-[#F5C842]', bg: 'bg-[#F5C842]/10' },
  { icon: FolderKanban, label: 'Novo Projeto',    desc: 'Criar projeto',               href: '/dashboard/projects',  color: 'text-purple-400', bg: 'bg-purple-500/10' },
  { icon: Zap,          label: 'Skills',          desc: 'Biblioteca de prompts',       href: '/dashboard/skills',    color: 'text-green-400',  bg: 'bg-green-500/10' },
];

const activity = [
  { icon: Key,          label: 'Licença ativada',        time: 'Há 2 horas',  dot: 'bg-[#F5C842]' },
  { icon: Download,     label: 'VEYRA v2.1.0 baixado',   time: 'Há 1 dia',   dot: 'bg-blue-400' },
  { icon: FolderKanban, label: 'Projeto criado',          time: 'Há 2 dias',  dot: 'bg-purple-400' },
  { icon: CheckCircle2, label: 'Pagamento confirmado',    time: 'Há 5 dias',  dot: 'bg-green-400' },
];

export default function DashboardPage() {
  const { profile } = useAuth();
  const firstName = profile?.name?.split(' ')[0] || 'Usuário';

  return (
    <div className="space-y-8 animate-fade-in">

      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold text-[#F2F2F2] mb-1">
            Olá, {firstName} 👋
          </h2>
          <p className="text-sm text-[#606060]">Bem-vindo ao seu painel VEYRA</p>
        </div>
        <Link
          href="/dashboard/downloads"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F5C842] text-[#0A0A0A] text-sm font-bold hover:bg-[#F7D46A] transition-colors"
        >
          <Download className="w-4 h-4" />
          Download VEYRA
        </Link>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Plano Atual',        value: 'VEYRA Pro',  icon: TrendingUp,   color: 'text-[#F5C842]', bg: 'bg-[#F5C842]/10' },
          { label: 'Licença',            value: 'Ativa',      icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-500/10' },
          { label: 'Dispositivos',       value: '1 / 3',      icon: Monitor,      color: 'text-blue-400',  bg: 'bg-blue-500/10' },
          { label: 'Projetos',           value: '12',         icon: FolderKanban, color: 'text-purple-400',bg: 'bg-purple-500/10' },
        ].map((stat) => (
          <div key={stat.label} className="p-5 rounded-2xl bg-[#111111] border border-white/[0.07] hover:border-white/[0.12] transition-colors">
            <div className={`w-10 h-10 flex items-center justify-center rounded-xl mb-3 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-xs text-[#606060] mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-[#F2F2F2]">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* VEYRA status card */}
      <div className="p-6 rounded-2xl bg-[#111111] border border-[#F5C842]/15 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5C842]/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#F2F2F2] mb-1">Sua Extensão VEYRA</h3>
              <p className="text-sm text-[#606060]">Instalada e funcionando perfeitamente</p>
            </div>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Ativo
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Status',    value: 'Ativa' },
              { label: 'Versão',    value: 'v2.1.0' },
              { label: 'Devices',   value: '1 / 3' },
              { label: 'Última sync', value: 'Agora' },
            ].map((item) => (
              <div key={item.label} className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/[0.06]">
                <p className="text-xs text-[#606060] mb-1">{item.label}</p>
                <p className="text-sm font-semibold text-[#F2F2F2]">{item.value}</p>
              </div>
            ))}
          </div>

          <Link
            href="/dashboard/downloads"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F5C842] text-[#0A0A0A] text-sm font-bold hover:bg-[#F7D46A] transition-colors"
          >
            Baixar versão mais recente
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Bottom grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Quick actions */}
        <div className="p-6 rounded-2xl bg-[#111111] border border-white/[0.07]">
          <h3 className="text-sm font-semibold text-[#F2F2F2] mb-5">Ações rápidas</h3>
          <div className="space-y-2">
            {quickActions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3.5 p-3.5 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/[0.07] transition-all group"
              >
                <div className={`w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0 ${action.bg} ${action.color}`}>
                  <action.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#F2F2F2]">{action.label}</p>
                  <p className="text-xs text-[#606060]">{action.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#606060] group-hover:text-[#A0A0A0] transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="p-6 rounded-2xl bg-[#111111] border border-white/[0.07]">
          <h3 className="text-sm font-semibold text-[#F2F2F2] mb-5">Atividade recente</h3>
          <div className="space-y-4">
            {activity.map((item, i) => (
              <div key={i} className="flex items-center gap-3.5">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#191919] border border-white/[0.06] text-[#606060] flex-shrink-0">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#F2F2F2]">{item.label}</p>
                  <p className="text-xs text-[#606060] flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </p>
                </div>
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
