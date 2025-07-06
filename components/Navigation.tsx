'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // cerrar menú al hacer scroll
    }
  };

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'skills', id: 'skills' },
    { key: 'experience', id: 'experience' },
    { href: '#education', label: { es: 'Formación', en: 'Education' } },
    { key: 'projects', id: 'projects' },
    { key: 'contact', id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 max-w-screen-xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Image
              src="/Logotipo_mostaza.png"
              alt="José Mesa Logo"
              width={120}
              height={48}
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.key && item.id ? (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#282D27] hover:text-[#FFB600] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {t(item.key)}
                </button>
              ) : item.href && item.label ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#282D27] hover:text-[#FFB600] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.label[language]}
                </a>
              ) : null
            )}
          </div>

          {/* Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex bg-[#F9FAFB] rounded-full p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  language === 'es'
                    ? 'bg-[#FFB600] text-white'
                    : 'text-[#646566] hover:text-[#282D27]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-[#FFB600] text-white'
                    : 'text-[#646566] hover:text-[#282D27]'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language toggle mobile */}
            <div className="flex bg-[#F9FAFB] rounded-full p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  language === 'es'
                    ? 'bg-[#FFB600] text-white'
                    : 'text-[#646566] hover:text-[#282D27]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-[#FFB600] text-white'
                    : 'text-[#646566] hover:text-[#282D27]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-[#282D27]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-4 max-w-screen-sm mx-auto">
              {navItems.map((item) =>
                item.key && item.id ? (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-[#282D27] hover:text-[#FFB600] px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {t(item.key)}
                  </button>
                ) : item.href && item.label ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block w-full text-left text-[#282D27] hover:text-[#FFB600] px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.label[language]}
                  </a>
                ) : null
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}