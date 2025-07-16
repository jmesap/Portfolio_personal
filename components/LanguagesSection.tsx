'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';

export default function LanguagesSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const languages = [
    { key: 'spanish', level: 'native', accreditedBy: '' },
    {
      key: 'english',
      level: 'c1',
      accreditedBy: 'Escuela Oficial de Idiomas de Córdoba',
    },
    {
      key: 'french',
      level: 'c1',
      accreditedBy: 'Euroinnova Formación',
    },
    {
      key: 'german',
      level: 'b1',
      accreditedBy: 'Universidad de Córdoba',
    },
  ];

  return (
    <section id="languages" className="py-24 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-[#282D27] mb-4">
            {t('languages')}
          </h2>
          <p className="text-lg text-[#646566] max-w-2xl mx-auto">
            {t('languagesSubtitle') || 'Muestra tus habilidades lingüísticas y quién las acredita.'}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10"
        >
          {languages.map(({ key, level, accreditedBy }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-semibold text-[#282D27] mb-2">
                {t(key)}{' '}
                <span className="text-[#FFB600]">
                  ({t(level)})
                </span>
              </h3>
              {accreditedBy && (
                <p className="text-sm text-[#646566] mt-1">
                  {t('accreditedBy')}: {accreditedBy}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}