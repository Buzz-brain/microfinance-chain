import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './dashboard-sidebar';
import { useAuth } from '@/contexts/auth-context';

export default function DashboardLayout() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar isAdmin={isAdmin} />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}