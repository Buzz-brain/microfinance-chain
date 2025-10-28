import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Copy, 
  ExternalLink,
  TrendingUp,
  DollarSign,
  Plus,
  Minus
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/auth-context';

export default function ManageWallet() {
  const { user } = useAuth();
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const walletAddress = '0x742d35Cc6634C0532925a3b8D404d3aABB8ad9';
  const walletBalance = 1250.00;

  const transactions = [
    {
      id: 1,
      type: 'deposit',
      amount: 500,
      hash: '0x1234...5678',
      date: '2024-01-15',
      status: 'confirmed'
    },
    {
      id: 2,
      type: 'withdrawal',
      amount: 200,
      hash: '0x9876...5432',
      date: '2024-01-12',
      status: 'confirmed'
    },
    {
      id: 3,
      type: 'deposit',
      amount: 300,
      hash: '0x5555...7777',
      date: '2024-01-10',
      status: 'confirmed'
    }
  ];

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate deposit
    setTimeout(() => {
      setIsLoading(false);
      setDepositAmount('');
      alert(`Successfully deposited $${depositAmount}`);
    }, 2000);
  };

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate withdrawal
    setTimeout(() => {
      setIsLoading(false);
      setWithdrawAmount('');
      alert(`Successfully withdrew $${withdrawAmount}`);
    }, 2000);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    alert('Wallet address copied to clipboard!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Manage Wallet
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Deposit, withdraw, and manage your digital wallet
        </p>
      </motion.div>

      {/* Wallet Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-gradient-to-r from-teal-500 to-blue-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-teal-100 mb-2">Total Balance</p>
                <p className="text-4xl font-bold">${walletBalance.toLocaleString()}</p>
                <p className="text-teal-100 mt-2">Available for transactions</p>
              </div>
              <div className="text-right">
                <Wallet className="w-16 h-16 text-teal-100 mb-4" />
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Verified Wallet
                </Badge>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-100 text-sm">Wallet Address</p>
                  <p className="font-mono text-sm">{walletAddress}</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={copyAddress}
                    className="bg-white/20 hover:bg-white/30 text-white"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Deposit/Withdraw Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Tabs defaultValue="deposit" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="deposit" className="flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Deposit</span>
            </TabsTrigger>
            <TabsTrigger value="withdraw" className="flex items-center space-x-2">
              <Minus className="w-4 h-4" />
              <span>Withdraw</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="deposit">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ArrowDownLeft className="w-5 h-5 text-green-600" />
                  <span>Deposit Funds</span>
                </CardTitle>
                <CardDescription>
                  Add money to your wallet from external sources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDeposit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="depositAmount">Amount ($)</Label>
                    <Input
                      id="depositAmount"
                      type="number"
                      placeholder="Enter amount to deposit"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                      min="10"
                      required
                    />
                    <p className="text-xs text-gray-500">Minimum deposit: $10</p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Deposit Methods
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span>Bank Transfer (1-3 business days)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span>Cryptocurrency (Instant)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span>Mobile Money (Instant)</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-500 to-teal-500"
                    disabled={isLoading || !depositAmount}
                  >
                    {isLoading ? 'Processing...' : `Deposit $${depositAmount || '0'}`}
                    <ArrowDownLeft className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="withdraw">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ArrowUpRight className="w-5 h-5 text-red-600" />
                  <span>Withdraw Funds</span>
                </CardTitle>
                <CardDescription>
                  Transfer money from your wallet to external accounts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleWithdraw} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="withdrawAmount">Amount ($)</Label>
                    <Input
                      id="withdrawAmount"
                      type="number"
                      placeholder="Enter amount to withdraw"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      min="10"
                      max={walletBalance}
                      required
                    />
                    <p className="text-xs text-gray-500">
                      Available balance: ${walletBalance.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                      Withdrawal Information
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span>Processing time: 1-2 business days</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span>Minimum withdrawal: $10</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full" />
                        <span>No withdrawal fees</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500"
                    disabled={isLoading || !withdrawAmount || parseFloat(withdrawAmount) > walletBalance}
                  >
                    {isLoading ? 'Processing...' : `Withdraw $${withdrawAmount || '0'}`}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Transaction History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Transaction History</span>
            </CardTitle>
            <CardDescription>
              Recent wallet transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'deposit' 
                        ? 'bg-green-100 dark:bg-green-900' 
                        : 'bg-red-100 dark:bg-red-900'
                    }`}>
                      {transaction.type === 'deposit' ? (
                        <ArrowDownLeft className="w-5 h-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white capitalize">
                        {transaction.type}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {transaction.date}
                      </p>
                      <p className="text-xs text-gray-500 font-mono">
                        {transaction.hash}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-semibold ${
                      transaction.type === 'deposit' 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {transaction.status}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}