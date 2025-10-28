export interface Loan {
  id: string;
  borrowerId: string;
  amount: number;
  purpose: string;
  interestRate: number;
  duration: number; // in months
  status: 'pending' | 'approved' | 'rejected' | 'disbursed' | 'repaid';
  applicationDate: string;
  approvalDate?: string;
  repaidAmount?: number;
  collateral?: string;
  borrowerName: string;
  borrowerEmail: string;
}

export interface Transaction {
  id: string;
  type: 'loan_disbursement' | 'loan_repayment' | 'deposit' | 'withdrawal';
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  description: string;
}

export const mockLoans: Loan[] = [
  {
    id: '1',
    borrowerId: '1',
    amount: 5000,
    purpose: 'Small business expansion - fruit cart',
    interestRate: 8.5,
    duration: 12,
    status: 'approved',
    applicationDate: '2024-01-15',
    approvalDate: '2024-01-18',
    collateral: 'Business equipment',
    borrowerName: 'Maria Santos',
    borrowerEmail: 'maria@example.com'
  },
  {
    id: '2',
    borrowerId: '1',
    amount: 2000,
    purpose: 'Agricultural tools purchase',
    interestRate: 7.5,
    duration: 6,
    status: 'repaid',
    applicationDate: '2023-08-20',
    approvalDate: '2023-08-22',
    repaidAmount: 2150,
    borrowerName: 'Carlos Rodriguez',
    borrowerEmail: 'carlos@example.com'
  },
  {
    id: '3',
    borrowerId: '2',
    amount: 3500,
    purpose: 'Education expenses for children',
    interestRate: 6.0,
    duration: 18,
    status: 'pending',
    applicationDate: '2024-01-20',
    borrowerName: 'Anna Johnson',
    borrowerEmail: 'anna@example.com'
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'loan_disbursement',
    amount: 5000,
    date: '2024-01-18',
    status: 'completed',
    description: 'Loan disbursement to Maria Santos'
  },
  {
    id: '2',
    type: 'loan_repayment',
    amount: 500,
    date: '2024-01-25',
    status: 'completed',
    description: 'Monthly repayment from Carlos Rodriguez'
  },
  {
    id: '3',
    type: 'deposit',
    amount: 10000,
    date: '2024-01-10',
    status: 'completed',
    description: 'Initial funding deposit'
  }
];

export const mockAnalytics = {
  totalLoans: 127,
  totalDisbursed: 847500,
  totalRepaid: 623800,
  activeLoans: 89,
  defaultRate: 2.3,
  avgLoanAmount: 4250,
  monthlyData: [
    { month: 'Jan', loans: 12, amount: 51000 },
    { month: 'Feb', loans: 18, amount: 76500 },
    { month: 'Mar', loans: 15, amount: 63750 },
    { month: 'Apr', loans: 22, amount: 93500 },
    { month: 'May', loans: 19, amount: 80750 },
    { month: 'Jun', loans: 25, amount: 106250 },
  ]
};

export const mockTestimonials = [
  {
    id: '1',
    name: 'Maria Santos',
    location: 'São Paulo, Brazil',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'This platform helped me expand my small business when traditional banks turned me away. The transparent process and fair interest rates made all the difference.',
    amount: '$3,000',
    business: 'Fruit Cart Business'
  },
  {
    id: '2',
    name: 'James Okeyo',
    location: 'Nairobi, Kenya',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'I was able to purchase farming equipment and increase my crop yield by 300%. The blockchain transparency gave me confidence in the process.',
    amount: '$1,500',
    business: 'Agriculture'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'The quick approval process allowed me to seize a time-sensitive business opportunity. Now I employ 5 people in my community.',
    amount: '$2,800',
    business: 'Textile Production'
  }
];