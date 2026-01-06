import { Heart, Github, Twitter, Linkedin, Mail, Phone, MapPin, Code, Database, Shield } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
}

export function Footer({ isDarkMode }: FooterProps) {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-950 border-gray-900' : 'bg-gray-900 border-gray-800'} border-t mt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-red-500 fill-current" />
              <span className="text-white text-lg">OBAN</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Open Blood Availability Network - Saving lives through transparent, real-time blood availability data.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors">
                <Github className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Find Blood Banks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Emergency Request</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Become a Donor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Register Facility</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* For Developers */}
          <div>
            <h3 className="text-white mb-4">For Developers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors flex items-center gap-2">
                <Code className="w-4 h-4" /> API Documentation
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors flex items-center gap-2">
                <Database className="w-4 h-4" /> Open Data Access
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors flex items-center gap-2">
                <Github className="w-4 h-4" /> GitHub Repository
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors flex items-center gap-2">
                <Shield className="w-4 h-4" /> Security Policy
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <span>Emergency: 1-800-BLOOD-NOW<br/>Support: 1-800-HELP-OBAN</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <span>contact@oban.org</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-red-500" />
                <span>123 Healthcare Ave,<br/>Medical District, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Open Blood Availability Network. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
