'use client';

import { useAuth } from '@/hooks/useAuth';
import { Card, Badge, Button } from '@/components/ui';
import {
  Download,
  Key,
  Users,
  FolderKanban,
  TrendingUp,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const stats = [
  {
    label: 'Plano Atual',
    value: 'VEYRA Pro',
    icon: Key,
    color: 'text-veyra-cyan',
    bgColor: 'bg-veyra-cyan/10',
  },
  {
    label: 'Status da Licença',
    value: 'Ativa',
    icon: CheckCircle2,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    label: 'Dispositivos',
    value: '1 / 3',
    icon: Users,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    label: 'Projetos',
    value: '12',
    icon: FolderKanban,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
];

const quickActions = [
  {
    label: 'Download VEYRA',
    description: 'Baixar última versão',
    icon: Download,
    href: '/dashboard/downloads',
  },
  {
    label: 'Ver Licença',
    description: 'Gerenciar dispositivos',
    icon: Key,
    href: '/dashboard/license',
  },
  {
    label: 'Novo Projeto',
    description: 'Criar projeto',
    icon: FolderKanban,
    href: '/dashboard/projects',
  },
];

const recentActivity = [
  {
    event: 'Licença ativada',
    time: 'Há 2 horas',
    icon: Key,
  },
  {
    event: 'VEYRA downloaded',
    time: 'Há 1 dia',
    icon: Download,
  },
  {
    event: 'Novo projeto criado',
    time: 'Há 2 dias',
    icon: FolderKanban,
  },
];

export default function DashboardPage() {
  const { profile } = useAuth();
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Header */}
      <div>
        <h2 className="text-3xl font-bold text-text-primary mb-2">
          Bem-vindo de volta, {profile?.name?.split(' ')[0] || 'Usuário'}
        </h2>
        <p className="text-text-secondary">
          Aqui está um resumo rápido da sua conta VEYRA
        </p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} padding="md" className="group hover:border-border-focus transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${stat.bgColor} ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
          </Card>
        ))}
      </div>
      
      {/* Your VEYRA Card */}
      <Card padding="lg" className="border-veyra-cyan/20 bg-gradient-to-br from-veyra-cyan/5 to-transparent">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Your VEYRA
            </h3>
            <p className="text-text-secondary">
              Extensão instalada e funcionando perfeitamente
            </p>
          </div>
          <Badge variant="success">Active</Badge>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div>
            <p className="text-sm text-text-tertiary mb-1">Licença</p>
            <p className="text-base font-semibold text-text-primary">Ativa</p>
          </div>
          <div>
            <p className="text-sm text-text-tertiary mb-1">Versão</p>
            <p className="text-base font-semibold text-text-primary">v1.4.2</p>
          </div>
          <div>
            <p className="text-sm text-text-tertiary mb-1">Dispositivos</p>
            <p className="text-base font-semibold text-text-primary">1 / 3</p>
          </div>
          <div>
            <p className="text-sm text-text-tertiary mb-1">Última Sync</p>
            <p className="text-base font-semibold text-text-primary">Agora</p>
          </div>
        </div>
        
        <Link href="/dashboard/downloads">
          <Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Download latest version
          </Button>
        </Link>
      </Card>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card padding="lg">
          <h3 className="text-lg font-bold text-text-primary mb-6">
            Quick Actions
          </h3>
          
          <div className="space-y-3">
            {quickActions.map((action) => (
              <Link key={action.label} href={action.href}>
                <button className="w-full flex items-center gap-4 p-4 rounded-lg bg-bg-elevated hover:bg-bg-tertiary border border-border-primary hover:border-border-focus transition-all group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-veyra-cyan/10 text-veyra-cyan group-hover:scale-110 transition-transform">
                    <action.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-text-primary">
                      {action.label}
                    </p>
                    <p className="text-xs text-text-tertiary">
                      {action.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-text-tertiary group-hover:text-text-primary transition-colors" />
                </button>
              </Link>
            ))}
          </div>
        </Card>
        
        {/* Recent Activity */}
        <Card padding="lg">
          <h3 className="text-lg font-bold text-text-primary mb-6">
            Recent Activity
          </h3>
          
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-elevated text-text-tertiary flex-shrink-0">
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary">
                    {activity.event}
                  </p>
                  <p className="text-xs text-text-tertiary flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
