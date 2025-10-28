import { motion } from 'framer-motion';
import { Shield, Users, Globe, Zap, Heart, Award, Target, Eye, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Financial Inclusion',
      description: 'We believe everyone deserves access to fair financial services, regardless of their location or background.'
    },
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Blockchain technology ensures all transactions are transparent, immutable, and verifiable by anyone.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our platform is built by the community, for the community, fostering peer-to-peer support and growth.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge blockchain technology to solve real-world financial accessibility problems.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Former World Bank advisor with 15+ years in microfinance and financial inclusion programs.',
      expertise: 'Microfinance Strategy'
    },
    {
      name: 'David Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Blockchain architect with experience at major fintech companies, specializing in DeFi solutions.',
      expertise: 'Blockchain Development'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Expert in emerging markets and financial inclusion programs across Latin America and Africa.',
      expertise: 'Operations & Compliance'
    },
    {
      name: 'James Okeyo',
      role: 'Community Relations',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Community organizer and advocate for financial literacy in underserved communities.',
      expertise: 'Community Engagement'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Platform Launch',
      description: 'Launched our blockchain-based microfinance platform',
      status: 'completed'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded to 23 countries across 4 continents',
      status: 'completed'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Implemented AI-powered loan assessment system',
      status: 'in-progress'
    },
    {
      year: '2025',
      title: 'Mobile App',
      description: 'Launch native mobile applications for iOS and Android',
      status: 'planned'
    },
    {
      year: '2025',
      title: '1M Users',
      description: 'Reach 1 million active users worldwide',
      status: 'planned'
    }
  ];

  const impactStats = [
    { label: 'Lives Impacted', value: '10,000+', icon: Users },
    { label: 'Communities Served', value: '1,200+', icon: Globe },
    { label: 'Success Rate', value: '97.8%', icon: TrendingUp },
    { label: 'Total Funding', value: '$2.4M+', icon: Award }
  ];

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
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 dark:from-teal-950/20 dark:via-blue-950/20 dark:to-green-950/20 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white border-0">
                About Our Mission
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                  Democratizing
                </span>{' '}
                Financial Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our blockchain-based microfinance platform connects underserved communities with fair, 
                transparent financial opportunities, breaking down traditional barriers and creating 
                pathways to economic empowerment.
              </p>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                  Join Our Mission
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Financial inclusion"
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">97.8%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real numbers showing the difference we're making in communities worldwide.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="h-12 w-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                    >
                      <stat.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize access to financial services by leveraging blockchain technology, 
                    creating transparent, fair, and accessible microfinance solutions for underserved 
                    communities worldwide. We aim to break the cycle of financial exclusion and 
                    empower individuals to build sustainable livelihoods.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-green-600 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where financial services are accessible to everyone, regardless of 
                    geographic location, economic status, or traditional credit history. We envision 
                    thriving communities where blockchain-powered microfinance serves as a catalyst 
                    for sustainable economic growth and social development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Blockchain */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Blockchain?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Blockchain technology is the foundation that makes our platform trustworthy, 
              transparent, and accessible to everyone.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mt-1">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Immutable Records</h4>
                    <p className="text-muted-foreground">Every transaction is permanently recorded and cannot be altered, ensuring complete transparency.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-green-600 rounded-lg flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Decentralized Trust</h4>
                    <p className="text-muted-foreground">No single point of failure or control, creating a trustless system that benefits everyone.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Smart Contracts</h4>
                    <p className="text-muted-foreground">Automated execution of loan terms reduces costs and eliminates human bias in decision-making.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Global Accessibility</h4>
                    <p className="text-muted-foreground">Borderless financial services accessible to anyone with an internet connection.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-teal-600 via-blue-600 to-green-600 rounded-2xl p-8 text-white">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-4 right-4 h-8 w-8 border-2 border-white/30 rounded-full"
                />
                
                <h3 className="text-2xl font-bold mb-6">Blockchain Benefits</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-white/80 text-sm">Transparent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-white/80 text-sm">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">0%</div>
                    <div className="text-white/80 text-sm">Hidden Fees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">∞</div>
                    <div className="text-white/80 text-sm">Scalable</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to democratize financial services.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-600" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  variants={staggerItem}
                  className="relative flex items-center space-x-6"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`relative z-10 h-4 w-4 rounded-full ${
                      milestone.status === 'completed' ? 'bg-green-500' :
                      milestone.status === 'in-progress' ? 'bg-yellow-500' :
                      'bg-gray-300'
                    } shadow-lg`}
                  />

                  {/* Content */}
                  <Card className="flex-1 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-primary">
                          {milestone.year}
                        </Badge>
                        <Badge className={`${
                          milestone.status === 'completed' ? 'bg-green-500' :
                          milestone.status === 'in-progress' ? 'bg-yellow-500' :
                          'bg-gray-500'
                        } text-white border-0`}>
                          {milestone.status === 'completed' ? 'Completed' :
                           milestone.status === 'in-progress' ? 'In Progress' :
                           'Planned'}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-900">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="h-12 w-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"
                    >
                      <value.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate experts dedicated to making financial services accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative mb-4"
                    >
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="h-24 w-24 rounded-full object-cover mx-auto"
                      />
                      <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {member.expertise}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-green-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Built on Cutting-Edge Technology</h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
              Our platform harnesses the power of blockchain technology to create a more 
              equitable financial ecosystem. Smart contracts automate loan processing, 
              reduce costs, and ensure transparency at every step.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <motion.div
                whileHover={{ y: -5 }}
                className="space-y-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto"
                >
                  <Globe className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold">Global Access</h3>
                <p className="text-white/80">Accessible from anywhere in the world with internet connectivity</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="space-y-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto"
                >
                  <Shield className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold">Secure & Transparent</h3>
                <p className="text-white/80">Immutable records and transparent processes build trust</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="space-y-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto"
                >
                  <Zap className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold">Instant Processing</h3>
                <p className="text-white/80">Automated smart contract execution for rapid loan processing</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}