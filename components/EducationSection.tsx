'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

type EducationType = 'technical' | 'master' | 'bachelor' | 'certification';

type EducationItem = {
  title: { es: string; en: string };
  institution: string;
  year: string;
  type: EducationType;
};

const EducationSection = () => {
  const { language } = useLanguage();

  const education: EducationItem[] = [
    {
      title: {
        es: "Técnico Especialista en Desarrollo de Aplicaciones Multiplataforma",
        en: "Specialist Technician in Multiplatform Application Development"
      },
      institution: "IES Aguadulce",
      year: "2025",
      type: "technical"
    },
    {
      title: {
        es: "Máster en Estudios Ingleses Avanzados y Educación Bilingüe",
        en: "Master's in Advanced English Studies and Bilingual Education"
      },
      institution: "Universidad de Córdoba",
      year: "2018",
      type: "master"
    },
    {
      title: {
        es: "Máster en Profesorado de Enseñanza Secundaria y FP",
        en: "Master's in Secondary Education and Vocational Training Teaching"
      },
      institution: "Universidad de Córdoba",
      year: "2017",
      type: "master"
    },
    {
      title: {
        es: "Grado en Traducción e Interpretación (Inglés y Alemán)",
        en: "Bachelor's in Translation and Interpretation (English and German)"
      },
      institution: "Universidad de Córdoba",
      year: "2016",
      type: "bachelor"
    },
    {
      title: {
        es: "Certificación C1 en Inglés",
        en: "C1 English Certification"
      },
      institution: "Escuela Oficial de Idiomas de Córdoba",
      year: "2022",
      type: "certification"
    }
  ];

  const getIcon = (type: 'technical' | 'master' | 'bachelor' | 'certification') => {
    switch (type) {
      case 'technical': return '💻';
      case 'master': return '🎓';
      case 'bachelor': return '📚';
      case 'certification': return '🏆';
      default: return '📖';
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#282D27] mb-4">
            {language === 'es' ? 'Formación Académica' : 'Education'}
          </h2>
          <p className="text-xl text-[#646566] max-w-3xl mx-auto">
            {language === 'es' 
              ? 'Mi trayectoria académica combina tecnología, idiomas y educación'
              : 'My academic journey combines technology, languages and education'
            }
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Línea vertical del timeline */}
          <div className="absolute left-5 top-0 bottom-0 w-1 bg-yellow-400 rounded z-0"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="mb-12 flex items-start"
            >
              {/* Punto del timeline con icono */}
              <div className="flex flex-col items-center mr-6 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 text-white text-2xl shadow-lg">
                  {getIcon(edu.type)}
                </div>
                {/* Línea que conecta con el siguiente (excepto último) */}
                {index !== education.length -1 && (
                  <div className="flex-1 w-px bg-yellow-400 mt-1"></div>
                )}
              </div>

              {/* Contenido */}
              <div className="bg-white rounded-xl shadow-md p-6 flex-1 border border-yellow-400 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#282D27] mb-1">
                  {edu.title[language]}
                </h3>
                <p className="text-[#646566] font-medium mb-2">{edu.institution}</p>
                <span className="inline-block bg-yellow-400 text-white px-3 py-1 rounded-full font-semibold text-sm select-none">
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;