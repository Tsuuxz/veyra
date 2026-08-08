import { Logo } from '@/components/brand/Logo';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-bg-secondary relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-veyra-cyan/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-veyra-cyan/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <div>
            <Logo size="lg" />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-text-primary leading-tight">
              Construa mais.
              <br />
              Espere menos.
            </h2>
            <p className="text-lg text-text-secondary max-w-md">
              VEYRA adiciona uma camada avançada de produtividade ao seu workflow de desenvolvimento com IA.
            </p>
            
            {/* Features */}
            <div className="space-y-3 pt-4">
              {[
                'Prompts otimizados automaticamente',
                'Ações rápidas e controle total',
                'Gerenciamento simplificado de projetos',
                'Atualizações automáticas',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-veyra-cyan/20 text-veyra-cyan">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer */}
          <p className="text-sm text-text-tertiary">
            © 2026 VEYRA. Todos os direitos reservados.
          </p>
        </div>
      </div>
      
      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-bg-primary">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 flex justify-center">
            <Logo size="lg" />
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}
