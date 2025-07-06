
'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] to-white relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-[#FFB600]/20 rotate-45 transform"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-[#646566]/20 rotate-12 transform"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-[#FFB600]/30 rotate-45 transform"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#282D27] mb-4"
            >
              {t('heroTitle')}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-[#646566] mb-6"
            >
              {t('heroSubtitle')}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-[#646566] mb-8 max-w-2xl"
            >
              {t('heroDescription')}
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={scrollToContact}
              className="bg-[#FFB600] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#E5A400] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('contactMe')}
            </motion.button>
          </motion.div>

          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Hexagonal Frame */}
              <div className="relative w-80 h-80 transform rotate-45 overflow-hidden">
                <div className="absolute inset-0 border-4 border-[#FFB600] rounded-3xl transform -rotate-45 group-hover:border-[#E5A400] transition-all duration-300"></div>
                <div className="absolute inset-4 overflow-hidden rounded-3xl transform -rotate-45">
                  <div className="relative w-full h-full">
                    <Image
                      src="/jose-mesa-photo.jpeg"
                      alt="José Mesa Padilla"
                      width={250}
                      height={350}
                      className="rounded-lg border-4 border-yellow-400 shadow-lg object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-[#FFB600]/0 group-hover:bg-[#FFB600]/10 transition-all duration-300 rounded-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
