import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Users, 
  CreditCard, 
  TrendingUp, 
  FileText, 
  CheckCircle,
  Clock,
  AlertTriangle,
  Bell,
  Search,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAuth } from '@/contexts/auth-context';
import { toast } from 'sonner';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [pendingLoans, setPendingLoans] = useState([
    {
      id: 1,
      borrower: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      amount: 750,
      purpose: 'Small business expansion',
      creditScore: 720,
      submittedAt: '2024-01-15',
      status: 'pending',
      monthlyIncome: 2500,
      employment: 'Self-employed',
      collateral: 'Business equipment',
      description: 'Need funds to expand my fruit cart business and purchase additional inventory for the upcoming season.'
    },
    {
      id: 2,
      borrower: 'Michael Chen',
      email: 'michael.chen@email.com',
      amount: 500,
      purpose: 'Education expenses',
      creditScore: 680,
      submittedAt: '2024-01-14',
      status: 'pending',
      monthlyIncome: 1800,
      employment: 'Part-time',
      collateral: 'None',
      description: 'Funding needed for professional certification course to advance my career in technology.'
    },
    {
      id: 3,
      borrower: 'Maria Rodriguez',
      email: 'maria.rodriguez@email.com',
      amount: 300,
      purpose: 'Medical emergency',
      creditScore: 650,
      submittedAt: '2024-01-14',
      status: 'pending',
      monthlyIncome: 1500,
      employment: 'Employed',
      collateral: 'None',
      description: 'Emergency medical expenses for family member that insurance does not cover.'
    }
  ]);

  const [selectedLoan, setSelectedLoan] = useState(null);

  const stats = [
    {
      title: 'Total Funds',
      value: '$125,000',
      change: '+8.2%',
      icon: DollarSign,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Active Users',
      value: '1,247',
      change: '+12.3%',
      icon: Users,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Active Loans',
      value: '89',
      change: '+5.1%',
      icon: CreditCard,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Repayment Rate',
      value: '94.2%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'approval',
      description: 'Loan approved for John Doe ($400)',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'repayment',
      description: 'Payment received from Alice Smith ($75)',
      time: '4 hours ago'
    },
    {
      id: 3,
      type: 'application',
      description: 'New loan application from Bob Wilson',
      time: '6 hours ago'
    }
  ];

  const handleApprove = (loanId) => {
    setPendingLoans(prev => prev.map(loan => 
      loan.id === loanId 
        ? { ...loan, status: 'approved' }
        : loan
    ));
    toast.success('Loan approved successfully!');
  };

  const handleReject = (loanId) => {
    setPendingLoans(prev => prev.map(loan => 
      loan.id === loanId 
        ? { ...loan, status: 'rejected' }
        : loan
    ));
    toast.success('Loan application rejected.');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-500 text-white';
      case 'pending': return 'bg-yellow-500 text-white';
      case 'rejected': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome back, {user?.name}! Here's your platform overview.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            System Healthy
          </Badge>
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Loan Requests */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2"
        >
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Pending Loan Requests</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {pendingLoans.filter(loan => loan.status === 'pending').length}
                </Badge>
              </CardTitle>
              <CardDescription className="text-teal-100">
                Applications awaiting your review
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {pendingLoans.map((request, index) => (
                  <motion.div
                    key={request.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {request.borrower.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {request.borrower}
                          </h4>
                          <p className="text-sm text-gray-500">{request.email}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(request.status)} border-0`}>
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4 text-sm">
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Amount</p>
                        <p className="font-semibold">${request.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Purpose</p>
                        <p className="font-semibold">{request.purpose}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Credit Score</p>
                        <p className="font-semibold">{request.creditScore}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Applied</p>
                        <p className="font-semibold">{new Date(request.submittedAt).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedLoan(request)}
                          >
                            <FileText className="w-4 h-4 mr-1" />
                            Review
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Loan Application Review</DialogTitle>
                          </DialogHeader>
                          {selectedLoan && (
                            <div className="space-y-6">
                              {/* Borrower Information */}
                              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                <h3 className="font-semibold mb-3">Borrower Information</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Full Name</label>
                                    <p className="font-semibold">{selectedLoan.borrower}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
                                    <p className="font-semibold">{selectedLoan.email}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Monthly Income</label>
                                    <p className="font-semibold">${selectedLoan.monthlyIncome}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Employment</label>
                                    <p className="font-semibold">{selectedLoan.employment}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Credit Score</label>
                                    <p className="font-semibold">{selectedLoan.creditScore}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</label>
                                    <Badge className={`${getStatusColor(selectedLoan.status)} border-0`}>
                                      {selectedLoan.status.charAt(0).toUpperCase() + selectedLoan.status.slice(1)}
                                    </Badge>
                                  </div>
                                </div>
                              </div>

                              {/* Loan Details */}
                              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                <h3 className="font-semibold mb-3">Loan Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Requested Amount</label>
                                    <p className="font-semibold text-lg">${selectedLoan.amount.toLocaleString()}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Purpose</label>
                                    <p className="font-semibold">{selectedLoan.purpose}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Collateral</label>
                                    <p className="font-semibold">{selectedLoan.collateral || 'None'}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Application Date</label>
                                    <p className="font-semibold">{new Date(selectedLoan.submittedAt).toLocaleDateString()}</p>
                                  </div>
                                </div>
                                <div className="mt-4">
                                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Description</label>
                                  <p className="mt-1 text-gray-700 dark:text-gray-300">{selectedLoan.description}</p>
                                </div>
                              </div>

                              {/* Risk Assessment */}
                              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                                <h3 className="font-semibold mb-3">Risk Assessment</h3>
                                <div className="space-y-2">
                                  <div className="flex justify-between">
                                    <span>Credit Score Rating</span>
                                    <span className="font-semibold text-green-600">
                                      {selectedLoan.creditScore >= 700 ? 'Excellent' : 
                                       selectedLoan.creditScore >= 650 ? 'Good' : 'Fair'}
                                    </span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Income Verification</span>
                                    <span className="font-semibold text-green-600">Verified</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Debt-to-Income Ratio</span>
                                    <span className="font-semibold text-green-600">Low Risk</span>
                                  </div>
                                </div>
                              </div>

                              {selectedLoan.status === 'pending' && (
                                <div className="flex gap-3 pt-4 border-t">
                                  <Button 
                                    onClick={() => handleApprove(selectedLoan.id)}
                                    className="bg-green-600 hover:bg-green-700 flex-1"
                                  >
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Approve Loan
                                  </Button>
                                  <Button 
                                    variant="destructive"
                                    onClick={() => handleReject(selectedLoan.id)}
                                    className="flex-1"
                                  >
                                    <AlertTriangle className="h-4 w-4 mr-2" />
                                    Reject Application
                                  </Button>
                                </div>
                              )}
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      {request.status === 'pending' && (
                        <>
                          <Button 
                            size="sm" 
                            onClick={() => handleApprove(request.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleReject(request.id)}
                          >
                            <AlertTriangle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>
                Latest platform activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'approval' ? 'bg-green-100 dark:bg-green-900' :
                      activity.type === 'repayment' ? 'bg-blue-100 dark:bg-blue-900' :
                      'bg-orange-100 dark:bg-orange-900'
                    }`}>
                      {activity.type === 'approval' ? (
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                      ) : activity.type === 'repayment' ? (
                        <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <FileText className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}