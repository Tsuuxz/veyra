'use client';

import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { Link2, X } from 'lucide-react';

const footerLinks = {
  product: {
    title: 'Produto',
    links: [
      { label: 'Recursos', href: '#features' },
      { label: 'Como funciona', href: '#how-it-works' },
      { label: 'Planos', href: '#pricing' },
      { label: 'Documentação', href: '/docs' },
    ],
  },
  company: {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Carreiras', href: '#' },
      { label: 'Contato', href: '#' },
    ],
  },
  support: {
    title: 'Suporte',
    links: [
      { label: 'Central de ajuda', href: '#' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Status', href: '#' },
      { label: 'WhatsApp', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacidade', href: '#' },
      { label: 'Termos de uso', href: '#' },
      { label: 'Licença', href: '#' },
    ],
  },
};

const socialLinks = [
  { icon: Link2, href: '#', label: 'GitHub' },
  { icon: X, href: '#', label: 'Twitter' },
  { icon: Link2, href: '#', label: 'LinkedIn' },
  { icon: Link2, href: '#', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bg-secondary border-t border-border-primary">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="text-sm text-text-secondary max-w-xs mb-6">
              Construa mais. Espere menos. VEYRA adiciona uma camada avançada de produtividade ao seu workflow.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-bg-elevated text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-text-primary mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-tertiary">
              © {currentYear} VEYRA. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-text-tertiary hover:text-text-primary transition-colors">
                Termos
              </Link>
              <Link href="#" className="text-sm text-text-tertiary hover:text-text-primary transition-colors">
                Privacidade
              </Link>
              <Link href="#" className="text-sm text-text-tertiary hover:text-text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
