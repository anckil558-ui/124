import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="https://customer-assets.emergentagent.com/job_appdost-remake/artifacts/uq3q8o7c_image.png" 
                alt="AppDost Logo" 
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">AppFlow</span>
                <span className="text-xs text-amber-400 font-medium">BUSINESS ANALYTICS</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-amber-400 font-semibold">10k+</span>
                <span className="text-gray-400">ACTIVE USERS</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-amber-400 font-semibold">99.9%</span>
                <span className="text-gray-400">UPTIME</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-amber-400 font-semibold">24/7</span>
                <span className="text-gray-400">SUPPORT</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-amber-400 transition-colors flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-amber-400 transition-colors flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-amber-400 transition-colors flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-amber-400 transition-colors flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-amber-400 transition-colors flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-700 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-amber-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  Android App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-amber-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-amber-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-amber-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  CRM Software
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-amber-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-amber-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 border-b border-gray-700 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:contact@appdost.in" className="text-sm hover:text-amber-400 transition-colors block">
                    contact@appdost.in
                  </a>
                  <a href="mailto:hr@appdost.in" className="text-sm hover:text-amber-400 transition-colors block">
                    hr@appdost.in
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+917635075422" className="text-sm hover:text-amber-400 transition-colors block">
                    +91 76350 75422
                  </a>
                  <a href="tel:+911169290750" className="text-sm hover:text-amber-400 transition-colors block">
                    +91 11 6929 0750
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                  <p className="text-amber-400 font-medium mt-1">3 Offices: Banka (HQ), Motihari, Patna</p>
                </div>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-amber-500 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-amber-500 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-amber-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-amber-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} AppFlow - Business Analytics Platform. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-amber-400 transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;