import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-green-50 dark:from-teal-950/20 dark:via-blue-950/20 dark:to-green-950/20 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md w-full"
      >
        <Card className="shadow-2xl border-0 overflow-hidden">
          <CardContent className="p-8">
            {/* Animated 404 */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative">
                <h1 className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-teal-500 via-blue-600 to-green-500 bg-clip-text text-transparent">
                  404
                </h1>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 h-16 w-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center opacity-10"
                >
                  <Compass className="h-8 w-8 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold">Page Not Found</h2>
              <p className="text-muted-foreground">
                Oops! The page you're looking for seems to have wandered off. 
                Don't worry, we'll help you get back on track.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 mt-8"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                    <Home className="h-4 w-4 mr-2" />
                    Go Home
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  onClick={() => navigate(-1)}
                  className="flex-1"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground pt-4 border-t">
                <p>Still lost? Try these popular pages:</p>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  <Link to="/dashboard" className="text-primary hover:underline">Dashboard</Link>
                  <span>•</span>
                  <Link to="/apply-loan" className="text-primary hover:underline">Apply for Loan</Link>
                  <span>•</span>
                  <Link to="/about" className="text-primary hover:underline">About Us</Link>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  x: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 left-10 h-3 w-3 bg-teal-300 rounded-full opacity-30"
              />
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  x: [5, -5, 5]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-20 right-16 h-2 w-2 bg-blue-400 rounded-full opacity-40"
              />
              <motion.div
                animate={{ 
                  y: [-15, 15, -15],
                  x: [3, -3, 3]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-20 left-20 h-4 w-4 bg-green-300 rounded-full opacity-20"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}