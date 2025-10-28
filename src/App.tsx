import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/auth-context';

// Pages
import LandingPage from '@/pages/landing';
import LoginPage from '@/pages/auth/login';
import RegisterPage from '@/pages/auth/register';
import ForgotPasswordPage from '@/pages/auth/forgot-password';
import UserDashboard from '@/pages/user/dashboard';
import ApplyLoan from '@/pages/user/apply-loan';
import DashboardLayout from '@/components/layout/dashboard-layout';
import AdminDashboard from '@/pages/admin/dashboard';
import LoanManagementPage from '@/pages/admin/loan-management';
import HowItWorksPage from '@/pages/how-it-works';
import ContactPage from '@/pages/contact';
import AboutPage from '@/pages/about';
import SettingsPage from '@/pages/settings';
import NotFoundPage from '@/pages/404';
import MyLoans from '@/pages/user/my-loans';
import MakeRepayment from '@/pages/user/repayment';
import ManageWallet from '@/pages/user/wallet';
import MakePayment from '@/pages/user/payment';
import NotificationsPage from '@/pages/user/notifications';

import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="microfinance-theme">
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* User Dashboard Routes */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<UserDashboard />} />
                <Route path="apply" element={<ApplyLoan />} />
                <Route path="loans" element={<MyLoans />} />
                <Route path="repayment" element={<MakeRepayment />} />
                <Route path="wallet" element={<ManageWallet />} />
                <Route path="payment" element={<MakePayment />} />
                <Route path="notifications" element={<NotificationsPage />} />
              </Route>
              
              {/* Admin Dashboard Routes */}
              <Route path="/admin" element={<DashboardLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="loans" element={<LoanManagementPage />} />
              </Route>
              
              <Route path="/about" element={<AboutPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Toaster />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;