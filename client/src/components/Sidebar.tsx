import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'wouter';

interface Tab {
  id: string;
  label: string;
  content?: string;
  link?: string;
}

interface SidebarProps {
  tabs?: Tab[];
}

export function Sidebar({ tabs = [] }: SidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [isOpen, setIsOpen] = useState(false);

  const defaultTabs: Tab[] = tabs.length > 0 ? tabs : [
    { id: '1', label: 'Projets', content: 'Découvrez mes projets et réalisations', link: '/explorations-mathematiques' },
    { id: '2', label: 'À propos', content: 'En savoir plus sur moi et mon parcours' },
    { id: '3', label: 'Contact', content: 'Envoyez-moi un message ou connectons-nous' },
  ];

  const toggleTab = (id: string) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-secondary text-foreground hover-elevate transition-transform duration-300"
        style={{ transform: isOpen ? 'translateX(320px)' : 'translateX(0)' }}
        data-testid="button-sidebar-toggle"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed md:static top-0 left-0 h-screen z-40 w-80 bg-secondary border-r border-border overflow-y-auto transition-transform md:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-4 space-y-2">
          {defaultTabs.map(tab => (
            <div key={tab.id} className="border border-border rounded-md overflow-hidden">
              {tab.link ? (
                <Link href={tab.link}>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full flex items-center justify-between p-3 hover-elevate active-elevate-2 bg-secondary text-foreground font-medium transition-colors text-left"
                    data-testid={`button-tab-${tab.id}`}
                  >
                    <span>{tab.label}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${expanded[tab.id] ? 'rotate-180' : ''}`}
                    />
                  </button>
                </Link>
              ) : (
                <button
                  onClick={() => toggleTab(tab.id)}
                  className="w-full flex items-center justify-between p-3 hover-elevate active-elevate-2 bg-secondary text-foreground font-medium transition-colors"
                  data-testid={`button-tab-${tab.id}`}
                >
                  <span>{tab.label}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${expanded[tab.id] ? 'rotate-180' : ''}`}
                  />
                </button>
              )}
              {expanded[tab.id] && tab.content && (
                <div className="p-3 bg-primary/5 border-t border-border text-muted-foreground text-sm">
                  {tab.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
