'use client';

import { motion, easeOut } from 'framer-motion'; // Importa easeOut
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';

export default function LearningSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const learningSkills = [
    { name: 'Angular', icon: '🅰️', color: '#dd0031' },
    { name: 'Springboot', icon: '🌱', color: '#6db33f' },
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'JavaScript', icon: '🟨', color: '#f7df1e' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: easeOut }, // Aquí usa easeOut importado
    },
  };

  return (
    <section id="learning" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Me interesa...
          </h2>
          <h3 className="text-gray-600 max-w-xl mx-auto">
            {t('learningSubtitle') || 'Tecnologías y frameworks que estoy explorando actualmente.'}
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {learningSkills.map(({ name, icon, color }) => (
            <motion.div
              key={name}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-default hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="text-6xl mb-4"
                style={{ color }}
                aria-label={name + ' icon'}
              >
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}