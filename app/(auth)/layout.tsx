import Link from 'next/link';
import Logo from '@/components/brand/Logo';
import { CheckCircle2 } from 'lucide-react';

const perks = [
  'Prompts ilimitados no Lovable',
  'Rewrite cirúrgico sem consumir créditos',
  'Instalação em 60 segundos',
  'Atualizações automáticas e silenciosas',
  '7 dias de garantia incondicional',
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-[#0A0A0A]">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-[42%] bg-[#0D0D0D] border-r border-white/[0.07] relative overflow-hidden flex-col justify-between p-12">
        {/* Glow */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#F5C842]/[0.06] rounded-full blur-3xl pointer-events-none" />

        <Link href="/">
          <Logo size="md" />
        </Link>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-[#F2F2F2] leading-tight mb-4">
            Construa no Lovable
            <br />
            <span className="text-[#F5C842]">em modo turbo</span>
          </h2>
          <p className="text-[#606060] mb-8 leading-relaxed">
            A VEYRA conecta seu Lovable às IAs mais avançadas do mercado —
            sem queimar nenhum crédito.
          </p>

          <ul className="space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#F5C842]/15 text-[#F5C842] flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-[#A0A0A0]">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-[#606060] relative z-10">
          © {new Date().getFullYear()} VEYRA. Todos os direitos reservados.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 flex justify-center">
            <Link href="/"><Logo size="md" /></Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
