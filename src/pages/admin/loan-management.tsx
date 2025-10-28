import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  Check, 
  X, 
  Eye, 
  Clock,
  DollarSign,
  User,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAuth } from '@/contexts/auth-context';
import { mockLoans } from '@/data/mock-data';
import type { Loan } from '@/data/mock-data';
import { toast } from 'sonner';

export default function LoanManagementPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loans, setLoans] = useState<Loan[]>(mockLoans);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user || user.role !== 'admin') return null;

  const filteredLoans = loans.filter(loan => {
    const matchesStatus = statusFilter === 'all' || loan.status === statusFilter;
    const matchesSearch = loan.borrowerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         loan.purpose.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleApprove = async (loanId: string) => {
    setLoans(prev => prev.map(loan => 
      loan.id === loanId 
        ? { ...loan, status: 'approved' as const, approvalDate: new Date().toISOString() }
        : loan
    ));
    toast.success('Loan approved successfully!');
  };

  const handleReject = async (loanId: string) => {
    setLoans(prev => prev.map(loan => 
      loan.id === loanId 
        ? { ...loan, status: 'rejected' as const }
        : loan
    ));
    toast.success('Loan application rejected.');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-500 text-white';
      case 'pending': return 'bg-yellow-500 text-white';
      case 'repaid': return 'bg-blue-500 text-white';
      case 'rejected': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const statusCounts = {
    all: loans.length,
    pending: loans.filter(l => l.status === 'pending').length,
    approved: loans.filter(l => l.status === 'approved').length,
    repaid: loans.filter(l => l.status === 'repaid').length,
    rejected: loans.filter(l => l.status === 'rejected').length,
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Button 
          variant="ghost" 
          onClick={() => navigate('/admin')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <h1 className="text-3xl font-bold mb-2">Loan Management</h1>
        <p className="text-muted-foreground">Review and manage loan applications from borrowers</p>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 mb-6"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by borrower name or purpose..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status ({statusCounts.all})</SelectItem>
            <SelectItem value="pending">Pending ({statusCounts.pending})</SelectItem>
            <SelectItem value="approved">Approved ({statusCounts.approved})</SelectItem>
            <SelectItem value="repaid">Repaid ({statusCounts.repaid})</SelectItem>
            <SelectItem value="rejected">Rejected ({statusCounts.rejected})</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      {/* Loans List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        {filteredLoans.length > 0 ? (
          <div className="space-y-4">
            {filteredLoans.map((loan) => (
              <Card key={loan.id} className="hover:shadow-lg transition-shadow border-0 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {loan.borrowerName.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{loan.borrowerName}</h3>
                          <p className="text-sm text-muted-foreground">{loan.borrowerEmail}</p>
                        </div>
                        <Badge className={`${getStatusColor(loan.status)} border-0 ml-auto lg:ml-0`}>
                          {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{loan.purpose}</p>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Amount</p>
                          <p className="font-semibold">${loan.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Interest Rate</p>
                          <p className="font-semibold">{loan.interestRate}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Duration</p>
                          <p className="font-semibold">{loan.duration} months</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Applied</p>
                          <p className="font-semibold">{new Date(loan.applicationDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Status</p>
                          <p className="font-semibold">{loan.status}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => setSelectedLoan(loan)}>
                            <Eye className="h-4 w-4 mr-2" />
                            Review
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Loan Application Details</DialogTitle>
                          </DialogHeader>
                          {selectedLoan && (
                            <div className="space-y-6">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-sm font-medium text-muted-foreground">Borrower Name</Label>
                                  <p className="font-semibold">{selectedLoan.borrowerName}</p>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                                  <p className="font-semibold">{selectedLoan.borrowerEmail}</p>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium text-muted-foreground">Loan Amount</Label>
                                  <p className="font-semibold">${selectedLoan.amount.toLocaleString()}</p>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium text-muted-foreground">Interest Rate</Label>
                                  <p className="font-semibold">{selectedLoan.interestRate}%</p>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium text-muted-foreground">Duration</Label>
                                  <p className="font-semibold">{selectedLoan.duration} months</p>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                                  <Badge className={`${getStatusColor(selectedLoan.status)} border-0`}>
                                    {selectedLoan.status.charAt(0).toUpperCase() + selectedLoan.status.slice(1)}
                                  </Badge>
                                </div>
                              </div>
                              
                              <div>
                                <Label className="text-sm font-medium text-muted-foreground">Purpose</Label>
                                <p className="mt-1">{selectedLoan.purpose}</p>
                              </div>

                              {selectedLoan.collateral && (
                                <div>
                                  <Label className="text-sm font-medium text-muted-foreground">Collateral</Label>
                                  <p className="mt-1">{selectedLoan.collateral}</p>
                                </div>
                              )}

                              {selectedLoan.status === 'pending' && (
                                <div className="flex gap-3 pt-4 border-t">
                                  <Button 
                                    onClick={() => handleApprove(selectedLoan.id)}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    <Check className="h-4 w-4 mr-2" />
                                    Approve Loan
                                  </Button>
                                  <Button 
                                    variant="destructive"
                                    onClick={() => handleReject(selectedLoan.id)}
                                  >
                                    <X className="h-4 w-4 mr-2" />
                                    Reject
                                  </Button>
                                </div>
                              )}
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      {loan.status === 'pending' && (
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            onClick={() => handleApprove(loan.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleReject(loan.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No Loans Found</h3>
              <p className="text-muted-foreground">
                {searchTerm ? 'No loans match your search criteria.' : 'No loan applications to review at this time.'}
              </p>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}

function Label({ children, className, ...props }: any) {
  return <label className={`text-sm font-medium ${className}`} {...props}>{children}</label>;
}