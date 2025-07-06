
'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div
              onClick={() => scrollToSection('hero')}
            >
              <Image
                src="/Logotipo_mostaza.png"
                alt="José Mesa Logo"
                width={120}
                height={48}
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
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
          </div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-4">
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
        </div>
      </div>
    </motion.nav>
  );
}
