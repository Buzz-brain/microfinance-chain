import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle, Star, Wallet, DollarSign, BarChart3, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { mockTestimonials } from '@/data/mock-data';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Transparent and immutable loan records on the blockchain ensure trust and accountability.'
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Connect with local communities and support each other through peer-to-peer lending.'
    },
    {
      icon: TrendingUp,
      title: 'Low Interest Rates',
      description: 'Fair and competitive interest rates designed to help, not exploit vulnerable communities.'
    },
    {
      icon: DollarSign,
      title: 'Quick Approval',
      description: 'Get your loan approved in minutes, not weeks. Fast access to funds when you need them most.'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Track your financial progress with detailed analytics and transparent reporting.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access financial services from anywhere in the world with just an internet connection.'
    }
  ];

  const stats = [
    { label: 'Loans Disbursed', value: '$2.4M+', icon: DollarSign },
    { label: 'Active Borrowers', value: '1,247', icon: Users },
    { label: 'Success Rate', value: '97.8%', icon: TrendingUp },
    { label: 'Countries Served', value: '23', icon: Globe }
  ];

  const steps = [
    { 
      step: '01', 
      title: 'Create Account', 
      description: 'Sign up and verify your identity in minutes',
      icon: Users
    },
    { 
      step: '02', 
      title: 'Submit Application', 
      description: 'Fill out our simple loan application form',
      icon: CheckCircle
    },
    { 
      step: '03', 
      title: 'Get Approved', 
      description: 'Receive instant approval based on our AI assessment',
      icon: Shield
    },
    { 
      step: '04', 
      title: 'Receive Funds', 
      description: 'Get funds transferred directly to your wallet',
      icon: Wallet
    }
  ];

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        // use cubic-bezier array to satisfy framer-motion Easing type
        // cast to any to satisfy TypeScript's stricter Easing typing
        ease: [0.42, 0, 0.58, 1] as any
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 dark:from-teal-950/20 dark:via-blue-950/20 dark:to-green-950/20 pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
            className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full blur-xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '4s' }}
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-green-200/30 to-teal-200/30 rounded-full blur-xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0 px-4 py-2">
                  🚀 Blockchain-Powered Financial Inclusion
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                  Empowering
                </span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Communities
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-foreground"
                >
                  Through Finance
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-xl text-muted-foreground leading-relaxed max-w-lg"
              >
                Breaking down barriers to financial services with transparent, blockchain-based microloans 
                designed for underserved communities worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/register">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
                    >
                      Apply for Loan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/how-it-works">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                      How It Works
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex items-center space-x-6 pt-4"
              >
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Blockchain Secured</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>97.8% Success Rate</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Main Illustration Container */}
              <div className="relative">
                {/* Central Hub */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border"
                >
                  <div className="text-center space-y-6">
                      <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                          className="h-20 w-20 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto"
                        >
                      <Wallet className="h-10 w-10 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Global Network</h3>
                      <p className="text-muted-foreground">Connecting communities worldwide</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                          className="text-center p-3 rounded-lg bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/50 dark:to-blue-950/50"
                        >
                          <stat.icon className="h-5 w-5 mx-auto mb-1 text-primary" />
                          <div className="font-bold text-lg text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Community Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border"
                >
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60" 
                      alt="Community member"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">Maria S.</p>
                      <p className="text-xs text-green-600">Loan Approved ✓</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border"
                >
                  <div className="flex items-center space-x-3">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60" 
                      alt="Community member"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">James O.</p>
                      <p className="text-xs text-blue-600">$2,500 Funded</p>
                    </div>
                  </div>
                </motion.div>

                {/* Connection Lines */}
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.4, duration: 2 }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 400 300"
                >
                  <motion.path
                    d="M50 50 Q200 150 350 250"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#14B8A6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge blockchain technology to provide secure, transparent, 
              and accessible financial services.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 group">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="h-12 w-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow"
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick How It Works Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Getting your loan is simple and transparent. Follow these easy steps.
            </p>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                View Detailed Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <Card className="h-full text-center border-0 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="h-16 w-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <step.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 origin-left"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who've transformed their lives through our platform.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {mockTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <motion.img 
                        whileHover={{ scale: 1.1 }}
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5 + i * 0.1 }}
                        >
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-primary font-semibold">Loan: {testimonial.amount}</span>
                      <span className="text-muted-foreground">{testimonial.business}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-green-600 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of entrepreneurs and small business owners who have already 
              unlocked their potential through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg px-8 py-6 text-lg">
                    Get Started Now
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