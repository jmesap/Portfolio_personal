'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import logoBlanco from '../public/Logotipo_blanco.png';
import logoMostaza from '../public/Logotipo_mostaza.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#282D27] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 mb-6">
          {/* Texto */}
          <p className="text-sm text-[#CCCCCC] max-w-md text-center md:text-left">
            {t('footerText')}
          </p>

          {/* Enlaces sociales */}
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/jmesap"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#CCCCCC] hover:text-[#FFB600] transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/jmesap"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#CCCCCC] hover:text-[#FFB600] transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:josemesapadilla@gmail.com"
              aria-label="Email"
              className="text-[#CCCCCC] hover:text-[#FFB600] transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Línea separadora */}
          {/* Logo con hover CSS aumentado un 20% */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-[154px] h-[96px] cursor-pointer">
              {/* Logo blanco */}
              <Image
                src={logoBlanco}
                alt="Logo José Mesa Blanco"
                fill
                style={{ objectFit: 'contain' }}
                className="transition-opacity duration-300"
              />
              {/* Logo mostaza */}
              <Image
                src={logoMostaza}
                alt="Logo José Mesa Mostaza"
                fill
                style={{ objectFit: 'contain' }}
                className="absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100"
              />
            </div>
          </div>
        </div>
    </footer>
  );
}