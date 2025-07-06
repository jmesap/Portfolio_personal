
'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';

export default function ExperienceSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      role: 'currentRole',
      company: 'currentCompany',
      period: 'currentPeriod',
      description: 'currentDescription',
      isCurrent: true,
    },
    {
      role: 'previousRole',
      company: 'previousCompany',
      period: 'previousPeriod',
      description: 'previousDescription',
      isCurrent: false,
    },
    {
      role: 'adminRole',
      company: 'adminCompany',
      period: 'adminPeriod',
      description: 'adminDescription',
      isCurrent: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#282D27] mb-4">
            {t('experienceTitle')}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#FFB600]"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#FFB600] rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">

                  <h3 className="text-xl font-bold text-[#282D27] mb-2">
                    {t(exp.role)}
                  </h3>
                  <div className="text-[#FFB600] font-semibold mb-2">
                    {t(exp.company)}
                  </div>
                  <div className="text-[#646566] text-sm mb-4">
                    {t(exp.period)}
                  </div>
                  <p className="text-[#646566] leading-relaxed">
                    {t(exp.description)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
