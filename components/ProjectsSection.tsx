'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function ProjectsSection() {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: {
        es: "Módulo de Inventario Personalizado para Odoo",
        en: "Custom Inventory Module for Odoo"
      },
      description: {
        es: "Sistema especializado de gestión de inventario para investigación biomédica. Integrado con flujos de trabajo existentes de IMIBIC.",
        en: "Specialized inventory management system for biomedical research. Integrated with existing IMIBIC workflows."
      },
      technologies: ['Python', 'Odoo', 'PostgreSQL', 'XML'],
      status: 'completed',
      icon: '🏥',
      customLogo: null
    },
    {
      title: {
        es: "Sistema ERP Personal - Gestión Integral",
        en: "Personal ERP System - Comprehensive Management"
      },
      description: {
        es: "ERP completo con arquitectura MVC para gestión de clientes, proyectos, presupuestos y facturación. Especializado en proyectos de desarrollo y traducción con generación automática de PDFs profesionales.",
        en: "Complete ERP with MVC architecture for client, project, budget and billing management. Specialized in development and translation projects with automatic professional PDF generation."
      },
      technologies: ['Java 17', 'Swing', 'MySQL', 'Apache PDFBox', 'FlatLaf'],
      status: 'completed',
      icon: '💼',
      customLogo: null
    },
    // Nuevos proyectos añadidos:
    {
      title: {
        es: "Aplicación Android con Sensores",
        en: "Android App Using Phone Sensors"
      },
      description: {
        es: "Desarrollo de aplicación para Android que utiliza los sensores del teléfono para funcionalidades avanzadas.",
        en: "Development of an Android application using phone sensors for advanced features."
      },
      technologies: ['Android', 'Java', 'Sensores'],
      status: 'completed',
      icon: '📱',
      customLogo: null
    },
    {
      title: {
        es: "App Móvil para Hamburguesería",
        en: "Mobile App for Burger Restaurant"
      },
      description: {
        es: "Aplicación Android nativa en Java para una hamburguesería, que permite gestionar pedidos, navegación por secciones y acceso a ayuda y acerca de.",
        en: "Native Android app in Java for a burger restaurant, enabling order management, section navigation, and access to help and about pages."
      },
      technologies: ['Android', 'Java', 'Navigation Component', 'View Binding'],
      status: 'completed',
      icon: '🍔',
      customLogo: null,
      link: 'https://github.com/jmesap/Hamburgueseria_apk_android'
    },
    {
      title: {
        es: "Programa de Escritorio Java con Hibernate",
        en: "Java Desktop Program Using Hibernate"
      },
      description: {
        es: "Desarrollo de programa de escritorio en Java utilizando Hibernate para la gestión de base de datos.",
        en: "Development of a Java desktop program using Hibernate for database management."
      },
      technologies: ['Java', 'Hibernate', 'Swing'],
      status: 'completed',
      icon: '🖥️',
      customLogo: null
    },
    {
      title: {
        es: "Programa Java con CRUD",
        en: "Java Program with CRUD"
      },
      description: {
        es: "Desarrollo de un programa en Java que implementa operaciones CRUD completas.",
        en: "Development of a Java program implementing full CRUD operations."
      },
      technologies: ['Java', 'JDBC', 'MySQL'],
      status: 'completed',
      icon: '📝',
      customLogo: null
    }
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

  const projectVariants = {
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#282D27] mb-4">
            {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
          </h2>
          <p className="text-lg text-[#646566] max-w-2xl mx-auto">
            {language === 'es' 
              ? 'Una selección de mis trabajos más representativos en desarrollo de software'
              : 'A selection of my most representative software development work'
            }
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="group relative bg-[#F9FAFB] rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#646566]/10 hover:border-[#FFB600]/30"
            >
              {/* Project Icon or Logo */}
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {project.customLogo ? (
                  <Image
                    src={project.customLogo}
                    alt={`${project.title[language]} logo`}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain mx-auto"
                  />
                ) : (
                  <div className="text-4xl">{project.icon}</div>
                )}
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                {project.status === 'completed' ? (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ✅ {language === 'es' ? 'Completado' : 'Completed'}
                  </div>
                ) : (
                  <div className="bg-[#FFB600] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-bold text-[#282D27] mb-3 group-hover:text-[#FFB600] transition-colors duration-300">
                {project.title[language]}
              </h3>
              
              <p className="text-[#646566] mb-4 leading-relaxed">
                {project.description[language]}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-white px-3 py-1 rounded-full text-sm text-[#646566] border border-[#646566]/20 group-hover:border-[#FFB600]/50 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Enlace al repositorio */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#FFB600] font-semibold hover:underline"
                >
                  {language === 'es' ? 'Ver repositorio en GitHub' : 'View GitHub Repository'}
                </a>
              )}

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFB600]/0 to-[#FFB600]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}