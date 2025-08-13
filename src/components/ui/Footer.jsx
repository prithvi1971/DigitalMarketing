import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const quickLinks = [
    { name: 'Home', path: '/homepage' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'Digital Marketing Strategy',
    'SEO & Content Marketing',
    'Social Media Management',
    'PPC Advertising',
    'Analytics & Reporting'
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1D3A] text-white">
      {/* Narrow side padding on mobile; scales up on larger screens */}
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 md:px-8 py-10 sm:py-12">
        {/* Main Footer Content */}
        {/* 2 cols on mobile so Quick Links + Services sit side-by-side; 4 cols on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 mb-8">
          {/* Company Info spans both columns on mobile */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-brand">
                <Icon name="TrendingUp" size={24} color="white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MarketForce Pro</h3>
                <p className="text-sm text-gray-400">Strategic Marketing Excellence</p>
              </div>
            </div>

            {/* Only cap width on large screens */}
            <p className="text-gray-300 mb-6 leading-relaxed lg:max-w-md">
              We don't just run campaigns, we architect growth. Transform your business with data-driven marketing strategies that deliver measurable results.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              {/* <button
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group overflow-hidden"
                aria-label="Twitter"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3A10.9 10.9 0 0 1 20.1 4.9 4.48 4.48 0 0 0 22.5 2C21.7 2.4 20.8 2.7 19.8 2.9 19.1 2.2 18.1 1.8 17 1.8C14.9 1.8 13.2 3.5 13.2 5.6C13.2 5.9 13.2 6.2 13.3 6.5 9.5 6.3 6.2 4.8 4 2.3 3.7 2.8 3.5 3.4 3.5 4.1C3.5 5.4 4.2 6.5 5.2 7.1 4.5 7.1 3.9 6.9 3.4 6.6V6.7C3.4 8.5 4.7 10 6.4 10.3 6.1 10.4 5.8 10.4 5.4 10.4 5.2 10.4 4.9 10.4 4.7 10.3 5.2 11.8 6.6 12.9 8.3 12.9 7 13.9 5.4 14.5 3.6 14.5H2.9C4.6 15.6 6.6 16.2 8.8 16.2 17 16.2 21.5 10.5 21.5 5.9V5.4C22.3 4.8 23 4.1 23 3Z" fill="currentColor"/>
                </svg>
              </button> */}
              {/* <button
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group overflow-hidden"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8A6 6 0 0 1 8 14V18H4V8H8A6 6 0 0 1 16 8Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="9" r="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 21H17V13.25C17 12 16 11 14.75 11S12.5 12 12.5 13.25V21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button> */}
              <button
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group overflow-hidden"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group overflow-hidden"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" x="2" y="2" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect width="20" height="20" x="2" y="2" rx="2" ry="2" fill="#0A66C2"/>
                  <path
                    d="M7.6 9H9.6V17H7.6V9ZM8.6 7.9C7.9 7.9 7.3 7.3 7.3 6.6C7.3 5.9 7.9 5.3 8.6 5.3C9.3 5.3 9.9 5.9 9.9 6.6C9.9 7.3 9.3 7.9 8.6 7.9ZM10.9 9H12.9V10.1C13.2 9.5 14.1 8.7 15.5 8.7C17.5 8.7 18.7 9.9 18.7 12.2V17H16.7V12.9C16.7 11.9 16.3 11.3 15.4 11.3C14.5 11.3 14 11.9 14 12.9V17H12V9H10.9Z"
                    fill="white"
                  />
                </svg>
              </button>

            </div>
          </div>

          {/* Quick Links (left column on mobile) */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-400 hover:text-white transition-colors block text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (right column on mobile) */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} MarketForce Pro. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => handleNavigation('/privacy-policy')}
              >
                Privacy Policy
              </button>
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => handleNavigation('/terms')}
              >
                Terms of Service
              </button>
              <button
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => handleNavigation('/cookie-policy')}
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
