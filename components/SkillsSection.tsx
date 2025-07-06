
'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';

export default function SkillsSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'Java', icon: '☕', color: '#f89820' },
    { name: 'Python', icon: '🐍', color: '#3776ab' },
    { name: 'SQL', icon: '🗃️', color: '#336791' },
    { name: 'JavaScript', icon: '⚡', color: '#f7df1e' },
    { name: 'HTML', icon: '🌐', color: '#e34c26' },
    { name: 'CSS', icon: '🎨', color: '#1572b6' },
    { name: 'Odoo', icon: '⚙️', color: '#714b67' },
    { name: 'Git', icon: '📝', color: '#f05032' },
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

  const skillVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#282D27] mb-4">
            {t('skillsTitle')}
          </h2>
          <p className="text-lg text-[#646566] max-w-2xl mx-auto">
            {t('skillsSubtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              className="group relative"
            >
              {/* Hexagonal Skill Card */}
              <div className="relative w-full aspect-square max-w-[200px] mx-auto">
                <div className="absolute inset-0 transform rotate-45 bg-white border-2 border-[#646566]/20 rounded-3xl group-hover:border-[#FFB600] transition-all duration-300 group-hover:shadow-lg"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div className="text-sm font-semibold text-[#282D27] group-hover:text-[#FFB600] transition-colors duration-300">
                    {skill.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-[#282D27] mb-6">
            {t('languages')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'spanish', level: 'Native' },
              { key: 'english', level: 'C1' },
              { key: 'french', level: 'C1' },
              { key: 'german', level: 'B1' },
            ].map((lang) => (
              <div
                key={lang.key}
                className="bg-[#F9FAFB] px-4 py-2 rounded-full border border-[#646566]/20 hover:border-[#FFB600] transition-all duration-300"
              >
                <span className="text-[#282D27] font-medium">
                  {t(lang.key)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
