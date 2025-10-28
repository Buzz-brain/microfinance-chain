import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
export default function MakeRepayment() {
  // no direct auth usage here at present
  const [selectedLoan, setSelectedLoan] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const activeLoans = [
    {
      id: '1',
      amount: 1000,
      purpose: 'Small Business',
      monthlyPayment: 88,
      remainingAmount: 560,
      paidAmount: 440,
      nextPaymentDate: '2024-02-15',
      status: 'current'
    },
    {
      id: '2',
      amount: 500,
      purpose: 'Education',
      monthlyPayment: 87,
      remainingAmount: 326,
      paidAmount: 174,
      nextPaymentDate: '2024-02-10',
      status: 'due_soon'
    }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="text-center">
            <CardContent className="pt-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4"
              >
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </motion.div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Payment Successful!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Your payment of ${paymentAmount} has been processed successfully.
              </p>
              
              <div className="space-y-3">
                <Button onClick={() => navigate('/dashboard')} className="w-full">
                  Return to Dashboard
                </Button>
                <Button variant="outline" className="w-full" onClick={() => {
                  setIsSubmitted(false);
                  setPaymentAmount('');
                  setSelectedLoan('');
                  setPaymentMethod('');
                }}>
                  Make Another Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Make Repayment
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Pay your loan installments securely through the blockchain
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Loans Overview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <span>Active Loans</span>
              </CardTitle>
              <CardDescription>
                Select a loan to make a payment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeLoans.map((loan, index) => (
                  <motion.div
                    key={loan.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedLoan === loan.id
                        ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    onClick={() => setSelectedLoan(loan.id)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Loan #{loan.id} - {loan.purpose}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ${loan.amount} total loan
                        </p>
                      </div>
                      <Badge className={
                        loan.status === 'due_soon' 
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }>
                        {loan.status === 'due_soon' ? 'Due Soon' : 'Current'}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Monthly Payment</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ${loan.monthlyPayment}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Remaining</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ${loan.remainingAmount}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Next Due</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {loan.nextPaymentDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400">Progress</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {Math.round((loan.paidAmount / loan.amount) * 100)}%
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Payment Details</span>
              </CardTitle>
              <CardDescription>
                Enter payment amount and method
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loan">Select Loan</Label>
                  <Select value={selectedLoan} onValueChange={setSelectedLoan} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a loan to pay" />
                    </SelectTrigger>
                    <SelectContent>
                      {activeLoans.map((loan) => (
                        <SelectItem key={loan.id} value={loan.id}>
                          Loan #{loan.id} - {loan.purpose} (${loan.monthlyPayment}/month)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Payment Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    required
                  />
                  {selectedLoan && (
                    <div className="flex space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const loan = activeLoans.find(l => l.id === selectedLoan);
                          if (loan) setPaymentAmount(loan.monthlyPayment.toString());
                        }}
                      >
                        Monthly Payment
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const loan = activeLoans.find(l => l.id === selectedLoan);
                          if (loan) setPaymentAmount(loan.remainingAmount.toString());
                        }}
                      >
                        Pay in Full
                      </Button>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="method">Payment Method</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wallet">Wallet Balance</SelectItem>
                      <SelectItem value="crypto">Cryptocurrency</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Payment Summary */}
                {selectedLoan && paymentAmount && (
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Payment Summary
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Payment Amount</span>
                        <span className="font-semibold">${paymentAmount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Processing Fee</span>
                        <span className="font-semibold">$0.00</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">${paymentAmount}</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
                  disabled={isLoading || !selectedLoan || !paymentAmount || !paymentMethod}
                >
                  {isLoading ? 'Processing Payment...' : 'Make Payment'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}