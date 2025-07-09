import React from 'react';
import { Sidebar } from './Sidebar';

export const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-16 overflow-auto">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};
