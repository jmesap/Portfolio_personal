'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconWrapperStyle = "w-14 h-14 flex items-center justify-center rounded-full bg-[#f0f0f0] shadow-md transition-colors duration-300 group-hover:bg-[#FFB600]";
  const iconStyle = "text-[#646566] group-hover:text-white text-2xl";

  const contactInfo = [
    {
      key: 'email',
      value: 'josemesapadilla@gmail.com',
      href: 'mailto:josemesapadilla@gmail.com',
      icon: <FaEnvelope className={iconStyle} />,
    },
    {
      key: 'phone',
      value: '+34 620 804 401',
      href: 'tel:+34620804401',
      icon: <FaPhone className={iconStyle} />,
    },
    {
      key: 'linkedin',
      value: 'linkedin.com/in/jmesap',
      href: 'https://linkedin.com/in/jmesap',
      icon: <FaLinkedin className={iconStyle} />,
    },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#282D27] mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-[#646566] mb-2">
            {t('contactSubtitle')}
          </p>
          <p className="text-lg text-[#646566] max-w-2xl mx-auto">
            {t('contactText')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((contact) => (
            <motion.a
              key={contact.key}
              variants={itemVariants}
              href={contact.href}
              target={contact.key === 'linkedin' || contact.key === 'github' ? '_blank' : undefined}
              rel={contact.key === 'linkedin' || contact.key === 'github' ? 'noopener noreferrer' : undefined}
              className="group bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#646566]/10 hover:border-[#FFB600]/50 flex flex-col items-center"
              style={{ textDecoration: 'none' }}
            >
              <div className={iconWrapperStyle}>
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#282D27] mb-2 group-hover:text-[#FFB600] transition-colors duration-300 mt-4">
                {t(contact.key)}
              </h3>
              <p className="text-[#646566] text-sm break-all">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#282D27] mb-4">
              {t('contactSubtitle')}
            </h3>
            <p className="text-[#646566] mb-6">
              {t('contactText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:josemesapadilla@gmail.com"
                className="bg-[#FFB600] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E5A400] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('email')}
              </a>
              <a
                href="https://linkedin.com/in/jmesap"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#282D27] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a1e1a] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                LinkedIn
              </a>
              <a
                href="https://tuUsuario.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#333] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#24292e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                GitHub Pages
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}