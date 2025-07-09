import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChartNoAxesCombined, Link2, ListCheck, Timer } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '../lib/utils';
import { useTheme } from '../hooks/useTheme';

export const Sidebar = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const navItems = [
    { path: '/', icon: <ListCheck/>, label: 'Tasks' },
    { path: '/habits', icon: <ChartNoAxesCombined/>, label: 'Habits' },
    { path: '/timer', icon: <Timer/>, label: 'Timer' },
    { path: '/quick-save', icon: <Link2/>, label: 'Quick Save' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 glass border-r border-border transition-all duration-300 hover:w-48 group z-50">
      <div className="flex flex-col h-full py-6">
        <div className="px-3 mb-10">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform duration-300">
            PGD
          </div>
        </div>

        <nav className="flex-1">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-3 py-3 mx-2 rounded-xl transition-all duration-300 group-hover:justify-start",
                    "click-bounce",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                  )}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm whitespace-nowrap">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-3 mt-6">
          <div className={cn ("w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
            isDarkMode 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-secondary-foreground'
          )}
          >
            <ThemeToggle/>
          </div>
        </div>
      </div>
    </div>
  );
}; 