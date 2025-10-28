import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight, CheckCircle, Wallet } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
export default function MakePayment() {
  // auth not needed here currently
  const [formData, setFormData] = useState({
    recipient: '',
    amount: '',
    note: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const walletBalance = 1250.00;

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
                Payment Sent!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Successfully sent ${formData.amount} to {formData.recipient}
              </p>
              
              <div className="space-y-3">
                <Button onClick={() => navigate('/dashboard')} className="w-full">
                  Return to Dashboard
                </Button>
                <Button variant="outline" className="w-full" onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ recipient: '', amount: '', note: '' });
                }}>
                  Send Another Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Send Payment
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Transfer funds to other users on the platform
        </p>
      </motion.div>

      {/* Wallet Balance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Available Balance</p>
                <p className="text-3xl font-bold">${walletBalance.toLocaleString()}</p>
              </div>
              <Wallet className="w-12 h-12 text-blue-100" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payment Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Payment Details</span>
            </CardTitle>
            <CardDescription>
              Enter recipient and payment information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient</Label>
                  <Input
                    id="recipient"
                    placeholder="Enter email or wallet address"
                    value={formData.recipient}
                    onChange={(e) => setFormData({...formData, recipient: e.target.value})}
                    required
                  />
                  <p className="text-xs text-gray-500">
                    You can send to email addresses or wallet addresses
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount ($)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    min="1"
                    max={walletBalance}
                    step="0.01"
                    required
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Minimum: $1.00</span>
                    <span>Available: ${walletBalance.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="note">Note (Optional)</Label>
                  <Textarea
                    id="note"
                    placeholder="Add a note for this payment..."
                    value={formData.note}
                    onChange={(e) => setFormData({...formData, note: e.target.value})}
                    rows={3}
                  />
                </div>
              </div>

              {/* Payment Summary */}
              {formData.amount && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Payment Summary
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Amount</span>
                      <span className="font-semibold">${formData.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Network Fee</span>
                      <span className="font-semibold text-green-600">$0.00</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">${formData.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Remaining Balance</span>
                      <span className="font-semibold">
                        ${(walletBalance - parseFloat(formData.amount || '0')).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                disabled={isLoading || !formData.recipient || !formData.amount || parseFloat(formData.amount || '0') > walletBalance}
              >
                {isLoading ? 'Sending Payment...' : `Send $${formData.amount || '0'}`}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}