import { Link } from 'react-router-dom';
import { Wallet, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Wallet className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                MicroFinance
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering underserved communities through transparent, blockchain-based microfinance solutions. 
              Creating financial inclusion for everyone.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@microfinance.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-muted-foreground hover:text-primary text-sm">How it Works</Link></li>
              <li><Link to="/register" className="text-muted-foreground hover:text-primary text-sm">Apply Now</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 MicroFinance Platform. All rights reserved. Built with ❤️ for financial inclusion.
          </p>
        </div>
      </div>
    </footer>
  );
}