import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  Wallet, 
  Send, 
  Settings, 
  LogOut,
  Shield,
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Bell,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/auth-context';

interface SidebarProps {
  isAdmin?: boolean;
}

export default function DashboardSidebar({ isAdmin = false }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const userNavItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Apply for Loan', path: '/dashboard/apply' },
    { icon: CreditCard, label: 'My Loans', path: '/dashboard/loans' },
    { icon: DollarSign, label: 'Make Repayment', path: '/dashboard/repayment' },
    { icon: Wallet, label: 'Manage Wallet', path: '/dashboard/wallet' },
    { icon: Send, label: 'Make Payment', path: '/dashboard/payment' },
    { icon: Bell, label: 'Notifications', path: '/dashboard/notifications' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const adminNavItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/admin' },
    { icon: FileText, label: 'Loan Requests', path: '/admin/loans' },
    { icon: TrendingUp, label: 'Repayment Tracking', path: '/admin/repayments' },
    { icon: Wallet, label: 'Funds & Balances', path: '/admin/funds' },
    { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const navItems = isAdmin ? adminNavItems : userNavItems;

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-screen flex flex-col shadow-lg"
    >
      {/* Logo & User Info */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <Link to={isAdmin ? '/admin' : '/dashboard'} className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {isAdmin ? 'Admin Panel' : 'MicroFinance'}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {isAdmin ? 'Platform Management' : 'Your Dashboard'}
            </p>
          </div>
        </Link>
        
        {/* User Profile Card */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-lg p-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {user?.name || 'User'}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {isAdmin ? 'Administrator' : 'Member'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-102'
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300'}`} />
                <span className="font-medium">{item.label}</span>
                {item.label === 'Notifications' && !isAdmin && (
                  <Badge className="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5">
                    3
                  </Badge>
                )}
                {item.label === 'Loan Requests' && isAdmin && (
                  <Badge className="ml-auto bg-yellow-500 text-white text-xs px-1.5 py-0.5">
                    5
                  </Badge>
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
        {/* Status Indicator */}
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>System Online</span>
        </div>
        
        {/* Logout Button */}
        <Button
          onClick={handleLogout}
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </motion.div>
  );
}