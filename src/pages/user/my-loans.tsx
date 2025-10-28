import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, DollarSign, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/auth-context';

export default function MyLoans() {
  const { user } = useAuth();
  const loans = [
    {
      id: 1,
      amount: 1000,
      purpose: 'Small Business',
      status: 'active',
      interestRate: 5.5,
      duration: 12,
      monthlyPayment: 88,
      paidAmount: 440,
      remainingAmount: 560,
      nextPaymentDate: '2024-02-15',
      disbursedDate: '2024-01-01'
    },
    {
      id: 2,
      amount: 500,
      purpose: 'Education',
      status: 'active',
      interestRate: 4.8,
      duration: 6,
      monthlyPayment: 87,
      paidAmount: 174,
      remainingAmount: 326,
      nextPaymentDate: '2024-02-10',
      disbursedDate: '2024-12-01'
    },
    {
      id: 3,
      amount: 750,
      purpose: 'Medical Emergency',
      status: 'completed',
      interestRate: 5.2,
      duration: 8,
      monthlyPayment: 98,
      paidAmount: 784,
      remainingAmount: 0,
      nextPaymentDate: null,
      disbursedDate: '2023-06-01'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'overdue':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Clock className="w-4 h-4" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'overdue':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Loans
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track and manage your loan applications and repayments
          </p>
        </div>
        <Button asChild className="bg-gradient-to-r from-teal-500 to-blue-500">
          <Link to="/dashboard/apply">
            <CreditCard className="w-4 h-4 mr-2" />
            Apply for New Loan
          </Link>
        </Button>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Total Borrowed',
            value: '$2,250',
            icon: DollarSign,
            color: 'from-blue-500 to-teal-500'
          },
          {
            title: 'Total Repaid',
            value: '$1,398',
            icon: TrendingUp,
            color: 'from-green-500 to-teal-500'
          },
          {
            title: 'Outstanding Balance',
            value: '$886',
            icon: CreditCard,
            color: 'from-orange-500 to-red-500'
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Loans List */}
      <div className="space-y-4">
        {loans.map((loan, index) => (
          <motion.div
            key={loan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <span>Loan #{loan.id}</span>
                      <Badge className={getStatusColor(loan.status)}>
                        {getStatusIcon(loan.status)}
                        <span className="ml-1 capitalize">{loan.status}</span>
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      {loan.purpose} • Disbursed on {loan.disbursedDate}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      ${loan.amount}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {loan.interestRate}% APR
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Progress Bar */}
                  {loan.status === 'active' && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Repayment Progress</span>
                        <span className="font-medium">
                          ${loan.paidAmount} / ${loan.amount + (loan.amount * loan.interestRate / 100)}
                        </span>
                      </div>
                      <Progress 
                        value={(loan.paidAmount / (loan.amount + (loan.amount * loan.interestRate / 100))) * 100} 
                        className="h-2"
                      />
                    </div>
                  )}

                  {/* Loan Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Monthly Payment</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        ${loan.monthlyPayment}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Duration</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {loan.duration} months
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Remaining</p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        ${loan.remainingAmount}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {loan.status === 'active' ? 'Next Payment' : 'Completed'}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {loan.nextPaymentDate || 'N/A'}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {loan.status === 'active' && (
                    <div className="flex space-x-3 pt-4">
                      <Button asChild size="sm" className="bg-gradient-to-r from-green-500 to-teal-500">
                        <Link to="/dashboard/repayment">
                          <DollarSign className="w-4 h-4 mr-1" />
                          Make Payment
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {loans.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center py-12"
        >
          <CreditCard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No loans yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Apply for your first microloan to get started
          </p>
          <Button asChild className="bg-gradient-to-r from-teal-500 to-blue-500">
            <Link to="/dashboard/apply">
              Apply for Loan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      )}
    </div>
  );
}