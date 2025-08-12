import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/homepage' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-brand ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white border-b border-gray-200 shadow-sm'
    }`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavigation('/homepage')}
              className="flex items-center space-x-3 group transition-brand-fast"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-brand">
                  <Icon 
                    name="TrendingUp" 
                    size={24} 
                    color="white" 
                    strokeWidth={2.5}
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full animate-pulse-subtle"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">
                  MarketForce Pro
                </h1>
                <p className="text-xs text-gray-600 font-medium">
                  Strategic Marketing Excellence
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 ml-auto">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-brand ${
                  isActivePath(item.path)
                    ? 'bg-blue-600 text-white shadow-brand'
                    : 'text-[#0B1D3A] hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-[#0B1D3A] hover:text-blue-600 hover:bg-blue-50 transition-brand"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-brand ${
                    isActivePath(item.path)
                      ? 'bg-blue-600 text-white shadow-brand'
                      : 'text-[#0B1D3A] hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;