'use client';

import { Card } from '@/components/ui';
import { MonitorSmartphone } from 'lucide-react';

const browsers = [
  { name: 'Chrome', icon: '🌐' },
  { name: 'Edge', icon: '🔷' },
  { name: 'Brave', icon: '🦁' },
  { name: 'Opera', icon: '⭕' },
  { name: 'Chromium', icon: '⚡' },
  { name: 'Vivaldi', icon: '🎵' },
];

export function Compatibility() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-veyra-cyan/10 text-veyra-cyan mx-auto mb-6">
            <MonitorSmartphone className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Compatível com Chromium
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            VEYRA funciona em todos os navegadores baseados em Chromium. 
            Instale uma vez, use em qualquer lugar.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {browsers.map((browser, index) => (
            <Card
              key={browser.name}
              hover
              padding="md"
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{browser.icon}</div>
              <p className="text-sm font-medium text-text-primary">{browser.name}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-text-tertiary">
            Suporte oficial para navegadores Chromium 90+
          </p>
        </div>
      </div>
    </section>
  );
}
