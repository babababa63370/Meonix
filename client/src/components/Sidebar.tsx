import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  content?: string;
}

interface SidebarProps {
  tabs?: Tab[];
}

export function Sidebar({ tabs = [] }: SidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [isOpen, setIsOpen] = useState(false);

  const defaultTabs: Tab[] = tabs.length > 0 ? tabs : [
    { id: '1', label: 'Panel 1', content: 'Content for panel 1' },
    { id: '2', label: 'Panel 2', content: 'Content for panel 2' },
    { id: '3', label: 'Panel 3', content: 'Content for panel 3' },
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
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-md bg-secondary text-foreground hover-elevate"
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
