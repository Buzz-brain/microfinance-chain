import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, DollarSign, User, ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// auth not required here currently
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

export default function ApplyLoan() {
  // no auth usage in this component
  const [formData, setFormData] = useState({
    amount: '',
    purpose: '',
    duration: '',
    income: '',
    employment: '',
    description: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loan application submission
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
                Application Submitted!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Your loan application for ${formData.amount} has been submitted successfully. 
                You'll receive a notification once it's reviewed.
              </p>
              
              <div className="space-y-3">
                <Button onClick={() => navigate('/dashboard')} className="w-full">
                  Return to Dashboard
                </Button>
                <Button variant="outline" className="w-full" onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    amount: '',
                    purpose: '',
                    duration: '',
                    income: '',
                    employment: '',
                    description: ''
                  });
                }}>
                  Submit Another Application
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Apply for Microloan
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Fill out the application form to request a microloan
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5" />
              <span>Loan Application Form</span>
            </CardTitle>
            <CardDescription>
              Please provide accurate information for faster processing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Loan Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                  <DollarSign className="w-5 h-5" />
                  <span>Loan Details</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Loan Amount ($)</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="500"
                      min="100"
                      max="5000"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                      required
                    />
                    <p className="text-xs text-gray-500">Minimum: $100, Maximum: $5,000</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="duration">Loan Duration</Label>
                    <Select value={formData.duration} onValueChange={(value) => setFormData({...formData, duration: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 months</SelectItem>
                        <SelectItem value="6">6 months</SelectItem>
                        <SelectItem value="12">12 months</SelectItem>
                        <SelectItem value="24">24 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purpose">Loan Purpose</Label>
                  <Select value={formData.purpose} onValueChange={(value) => setFormData({...formData, purpose: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan purpose" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">Small Business</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="medical">Medical Emergency</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="housing">Housing Improvement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Purpose Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe how you plan to use the loan..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Financial Information</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="income">Monthly Income ($)</Label>
                    <Input
                      id="income"
                      type="number"
                      placeholder="2000"
                      value={formData.income}
                      onChange={(e) => setFormData({...formData, income: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="employment">Employment Status</Label>
                    <Select value={formData.employment} onValueChange={(value) => setFormData({...formData, employment: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select employment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Employed</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="freelancer">Freelancer</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="unemployed">Unemployed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Loan Summary */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Loan Summary
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Requested Amount</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      ${formData.amount || '0'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Duration</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {formData.duration ? `${formData.duration} months` : 'Not selected'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Interest Rate</p>
                    <p className="font-semibold text-green-600 dark:text-green-400">
                      5.5% APR
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Monthly Payment</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      ${formData.amount && formData.duration ? 
                        Math.round((parseFloat(formData.amount) * 1.055) / parseInt(formData.duration)) : '0'}
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting Application...' : 'Submit Loan Application'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}