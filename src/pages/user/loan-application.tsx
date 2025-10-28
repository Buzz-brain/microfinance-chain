import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, DollarSign, Calendar, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Header } from '@/components/layout/header';
import { useAuth } from '@/contexts/auth-context';
import { toast } from 'sonner';

export default function LoanApplicationPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    amount: [5000],
    purpose: '',
    duration: [12],
    description: '',
    collateral: '',
    monthlyIncome: '',
    employment: '',
    businessPlan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast.success('Loan application submitted successfully! You will receive a response within 24 hours.');
    setIsSubmitting(false);
    navigate('/dashboard');
  };

  const estimatedInterestRate = Math.max(5, Math.min(15, 8 + (formData.amount[0] / 10000) * 2));
  const monthlyPayment = (formData.amount[0] * (1 + estimatedInterestRate / 100)) / formData.duration[0];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-16 bg-gradient-to-br from-teal-50/50 via-blue-50/50 to-green-50/50 dark:from-teal-950/10 dark:via-blue-950/10 dark:to-green-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Button 
              variant="ghost" 
              onClick={() => navigate('/dashboard')}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold mb-2">Apply for a Loan</h1>
            <p className="text-muted-foreground">Fill out the form below to apply for a microfinance loan.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Loan Application Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Loan Amount */}
                    <div className="space-y-3">
                      <Label className="text-lg font-semibold">Loan Amount</Label>
                      <div className="px-3">
                        <div className="flex justify-between text-sm text-muted-foreground mb-2">
                          <span>$1,000</span>
                          <span className="font-semibold text-primary">${formData.amount[0].toLocaleString()}</span>
                          <span>$50,000</span>
                        </div>
                        <Slider
                          value={formData.amount}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, amount: value }))}
                          min={1000}
                          max={50000}
                          step={500}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Loan Duration */}
                    <div className="space-y-3">
                      <Label className="text-lg font-semibold">Loan Duration (Months)</Label>
                      <div className="px-3">
                        <div className="flex justify-between text-sm text-muted-foreground mb-2">
                          <span>6 months</span>
                          <span className="font-semibold text-primary">{formData.duration[0]} months</span>
                          <span>36 months</span>
                        </div>
                        <Slider
                          value={formData.duration}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, duration: value }))}
                          min={6}
                          max={36}
                          step={6}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Loan Purpose */}
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Loan Purpose</Label>
                      <Select value={formData.purpose} onValueChange={(value) => setFormData(prev => ({ ...prev, purpose: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the purpose of your loan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Small Business</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="agriculture">Agriculture</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="housing">Housing Improvement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="description">Detailed Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe how you plan to use the loan and how it will benefit your situation..."
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        className="min-h-24"
                        required
                      />
                    </div>

                    {/* Financial Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="income">Monthly Income ($)</Label>
                        <Input
                          id="income"
                          type="number"
                          placeholder="Enter your monthly income"
                          value={formData.monthlyIncome}
                          onChange={(e) => setFormData(prev => ({ ...prev, monthlyIncome: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employment">Employment Status</Label>
                        <Select value={formData.employment} onValueChange={(value) => setFormData(prev => ({ ...prev, employment: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employment status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="employed">Employed</SelectItem>
                            <SelectItem value="self-employed">Self-Employed</SelectItem>
                            <SelectItem value="business-owner">Business Owner</SelectItem>
                            <SelectItem value="farmer">Farmer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Collateral */}
                    <div className="space-y-2">
                      <Label htmlFor="collateral">Collateral (Optional)</Label>
                      <Input
                        id="collateral"
                        placeholder="Describe any collateral you can provide"
                        value={formData.collateral}
                        onChange={(e) => setFormData(prev => ({ ...prev, collateral: e.target.value }))}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.purpose || !formData.description}
                      className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Loan Application'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Loan Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2" />
                    Loan Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan Amount</span>
                      <span className="font-semibold">${formData.amount[0].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold">{formData.duration[0]} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Est. Interest Rate</span>
                      <span className="font-semibold">{estimatedInterestRate.toFixed(1)}%</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Payment</span>
                        <span className="font-bold text-lg text-primary">${monthlyPayment.toFixed(0)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Your information is encrypted and secure</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Calculator({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="m9 10 2 2 4-4" />
    </svg>
  );
}