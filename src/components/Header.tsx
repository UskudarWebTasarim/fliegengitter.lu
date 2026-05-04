'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'tr' : 'de');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#83bd81] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="text-xl font-bold text-[#404e5e] hidden sm:block">
              Fliegengitter<span className="text-[#83bd81]">.lu</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-[#404e5e] hover:text-[#83bd81] font-medium transition-colors">
              {t('header.home')}
            </a>
            <a href="#products" className="text-[#404e5e] hover:text-[#83bd81] font-medium transition-colors">
              {t('header.products')}
            </a>
            <a href="#about" className="text-[#404e5e] hover:text-[#83bd81] font-medium transition-colors">
              {t('header.about')}
            </a>
            <a href="#contact" className="text-[#404e5e] hover:text-[#83bd81] font-medium transition-colors">
              {t('header.contact')}
            </a>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-[#83bd81] hover:bg-green-50 transition-all"
              title={language === 'de' ? 'Türkçe\'ye geç' : 'Auf Deutsch'}
            >
              <span className="text-xl">{language === 'de' ? '🇩🇪' : '🇹🇷'}</span>
              <ChevronDown size={14} className="text-gray-500" />
            </button>
            
            <a
              href="tel:+905403363873"
              className="hidden sm:flex items-center gap-2 bg-[#83bd81] hover:bg-[#6fa36d] text-white px-4 py-2 rounded-lg font-medium transition-all"
            >
              <Phone size={18} />
              <span>+90 540 336 3873</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col gap-3">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#404e5e] hover:text-[#83bd81] font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('header.home')}
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#404e5e] hover:text-[#83bd81] font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('header.products')}
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#404e5e] hover:text-[#83bd81] font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('header.about')}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#404e5e] hover:text-[#83bd81] font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('header.contact')}
              </a>
              <a
                href="tel:+905403363873"
                className="flex items-center gap-2 bg-[#83bd81] hover:bg-[#6fa36d] text-white py-3 px-4 rounded-lg font-medium transition-all justify-center mt-2"
              >
                <Phone size={18} />
                <span>+90 540 336 3873</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
