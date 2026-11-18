import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandEmblems';

export const Navbar = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Rooms', href: '#rooms', hasDropdown: true },
    { label: 'Amenities', href: '#amenities', hasDropdown: true },
    { label: 'Dining', href: '#dining', hasDropdown: true },
    { label: 'Offers', href: '#offers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1117]/95 backdrop-blur-md py-3.5 border-b border-[#D4B584]/15 shadow-xl'
          : 'bg-gradient-to-b from-[#0D1117]/85 via-[#0D1117]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <BrandLogo variant="light" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative py-1 flex items-center gap-1 transition-colors ${
                item.active
                  ? 'text-[#D4B584] after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#D4B584]'
                  : 'text-gray-200 hover:text-[#D4B584]'
              }`}
            >
              <span>{item.label}</span>
              {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-75" />}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => onOpenBooking('Royal Suite')}
            className="gold-gradient-btn text-[#0D1117] font-semibold text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2 shadow-lg"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg border border-white/15"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1117] border-t border-[#D4B584]/20 px-6 py-6 space-y-4">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base text-gray-200 hover:text-[#D4B584] py-1.5"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking('Royal Suite');
            }}
            className="w-full gold-gradient-btn text-[#0D1117] font-semibold py-3 rounded-full flex items-center justify-center gap-2 mt-4"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
