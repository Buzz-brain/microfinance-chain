import { motion } from 'framer-motion';
import { ArrowRight, Users, FileText, CheckCircle, Wallet, Shield, Clock, DollarSign, TrendingUp, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Link } from 'react-router-dom';

export default function HowItWorksPage() {
  const steps = [
    {
      step: '01',
      title: 'Register & Connect Wallet',
      description: 'Create your account and connect your blockchain wallet for secure transactions',
      icon: Users,
      details: [
        'Quick 2-minute registration process',
        'Verify your identity with basic information',
        'Connect your preferred blockchain wallet',
        'Set up secure authentication'
      ],
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: '02',
      title: 'Apply for Microloan',
      description: 'Submit your loan application with transparent terms and instant feedback',
      icon: FileText,
      details: [
        'Fill out our simple application form',
        'Specify loan amount and purpose',
        'Upload required documentation',
        'Get instant preliminary assessment'
      ],
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: '03',
      title: 'Loan Approval & Disbursement',
      description: 'Our AI-powered system evaluates your application and disburses funds quickly',
      icon: CheckCircle,
      details: [
        'AI-powered risk assessment in minutes',
        'Transparent approval criteria',
        'Smart contract execution',
        'Instant fund transfer to your wallet'
      ],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: '04',
      title: 'Repay & Build Credit History',
      description: 'Make flexible repayments and build your credit score for future opportunities',
      icon: TrendingUp,
      details: [
        'Flexible repayment schedules',
        'Multiple payment options',
        'Build blockchain-verified credit history',
        'Unlock higher loan amounts over time'
      ],
      image: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'All transactions are secured and verified on the blockchain'
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Get approved in minutes, not weeks'
    },
    {
      icon: DollarSign,
      title: 'Fair Rates',
      description: 'Competitive interest rates with no hidden fees'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Available worldwide with internet connection'
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 dark:from-teal-950/20 dark:via-blue-950/20 dark:to-green-950/20 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0">
              Step-by-Step Guide
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                How It Works
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our streamlined process makes accessing microfinance simple, transparent, and secure. 
              Here's how you can get started in just four easy steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="h-16 w-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center"
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <div>
                      <Badge variant="outline" className="mb-2">
                        Step {step.step}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: detailIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="h-2 w-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full" />
                        <span className="text-muted-foreground">{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  {index === 0 && (
                    <Link to="/register">
                      <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                        Get Started Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>

                {/* Illustration */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                >
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                      <img 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                    
                    {/* Floating Step Number */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="absolute -top-4 -right-4 h-16 w-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    >
                      {step.step}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Our Process Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on blockchain technology for maximum transparency, security, and efficiency.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="h-12 w-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                    >
                      <benefit.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our community and take the first step towards financial empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg px-8 py-6 text-lg">
                    Apply for Loan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </Link>
              <Link to="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Learn More
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}