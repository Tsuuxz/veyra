'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  children: (activeTab: string) => React.ReactNode;
  className?: string;
}

export function Tabs({ tabs, defaultTab, onChange, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '');
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };
  
  return (
    <div className={cn('w-full', className)}>
      {/* Tab Headers */}
      <div className="flex gap-1 border-b border-border-primary">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              'flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 relative',
              activeTab === tab.id
                ? 'text-text-primary'
                : 'text-text-tertiary hover:text-text-secondary'
            )}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
            
            {/* Active indicator */}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary animate-slide-up" />
            )}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="py-6">
        {children(activeTab)}
      </div>
    </div>
  );
}
