import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">AppDost</span>
                <span className="text-xs text-blue-400 font-medium">COMPLETE IT SOLUTION</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Delivering innovative IT solutions since 2025. We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-blue-400 font-semibold">10+</span>
                <span className="text-gray-400">WEB PROJECTS</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-blue-400 font-semibold">4+</span>
                <span className="text-gray-400">ANDROID APPS</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-blue-400 font-semibold">1</span>
                <span className="text-gray-400">CRM SYSTEM</span>
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
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-blue-400 transition-colors flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm hover:text-blue-400 transition-colors flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-blue-400 transition-colors flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-blue-400 transition-colors flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
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
                <span className="text-sm hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Android App Development
                </span>
              </li>
              <li>
                <span className="text-sm hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Web Development
                </span>
              </li>
              <li>
                <span className="text-sm hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  UI/UX Design
                </span>
              </li>
              <li>
                <span className="text-sm hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  CRM Software
                </span>
              </li>
              <li>
                <span className="text-sm hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Cloud Solutions
                </span>
              </li>
              <li>
                <span className="text-sm hover:text-blue-400 transition-colors cursor-pointer flex items-center group">
                  <span className="mr-2 text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  Cybersecurity
                </span>
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
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:contact@appdost.in" className="text-sm hover:text-blue-400 transition-colors block">
                    contact@appdost.in
                  </a>
                  <a href="mailto:hr@appdost.in" className="text-sm hover:text-blue-400 transition-colors block">
                    hr@appdost.in
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+917635075422" className="text-sm hover:text-blue-400 transition-colors block">
                    +91 76350 75422
                  </a>
                  <a href="tel:+911169290750" className="text-sm hover:text-blue-400 transition-colors block">
                    +91 11 6929 0750
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                  <p className="text-blue-400 font-medium mt-1">3 Offices: Banka (HQ), Motihari, Patna</p>
                </div>
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-blue-400 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-blue-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-pink-600 flex items-center justify-center transition-colors"
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
              © {currentYear} AppDost - Complete IT Solution. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
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