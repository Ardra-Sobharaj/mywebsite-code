import React, { useState, useEffect } from 'react';
import { User, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenConnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'projects', 'skills', 'journey', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'JOURNEY', href: '#journey', id: 'journey' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation-bar"
      className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b border-[#e6e4df] ${
        scrolled ? 'bg-[#fbfbfa]/95 backdrop-blur-sm shadow-xs' : 'bg-[#fbfbfa]'
      }`}
    >
      <div className="max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand & Status Indicator */}
        <div className="flex flex-col justify-center">
          <a
            href="#home"
            className="text-[17px] font-semibold tracking-tight text-[#121314] hover:text-[#2a434a] transition-colors"
          >
            {PERSONAL_INFO.name}
          </a>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#2a434a] animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.08em] text-[#52545a] uppercase font-medium">
              {PERSONAL_INFO.status}
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-mono text-[11px] tracking-[0.08em] uppercase transition-all py-1 border-b ${
                activeSection === link.id
                  ? 'text-[#121314] border-[#121314] font-semibold'
                  : 'text-[#52545a] border-transparent hover:text-[#121314] hover:border-[#8c8d91]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button: LET'S CONNECT */}
        <div className="hidden sm:flex items-center">
          <button
            id="nav-connect-button"
            onClick={onOpenConnect}
            className="group flex items-center gap-3 border border-[#121314] bg-transparent hover:bg-[#121314] text-[#121314] hover:text-[#fbfbfa] px-3.5 py-1.5 transition-all duration-150 rounded-none cursor-pointer"
          >
            <span className="font-mono text-[11px] tracking-[0.08em] font-medium leading-none">
              LET'S CONNECT
            </span>
            <div className="w-6 h-6 rounded-full bg-[#121314] group-hover:bg-[#fbfbfa] text-[#fbfbfa] group-hover:text-[#121314] flex items-center justify-center transition-colors">
              <User className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenConnect}
            className="p-2 border border-[#121314] rounded-none hover:bg-[#121314] hover:text-[#fbfbfa]"
            aria-label="Connect"
          >
            <User className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#e6e4df] rounded-none text-[#121314]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e6e4df] bg-[#fbfbfa] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block font-mono text-[12px] tracking-[0.08em] uppercase py-2 ${
                activeSection === link.id
                  ? 'text-[#121314] font-bold underline underline-offset-4'
                  : 'text-[#52545a]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#e6e4df]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConnect();
              }}
              className="w-full py-2.5 bg-[#121314] text-[#fbfbfa] font-mono text-[11px] tracking-[0.08em] uppercase"
            >
              LET'S CONNECT
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
