
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    home: 'Inicio',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
    
    // Hero Section
    heroTitle: 'José Mesa Padilla',
    heroSubtitle: 'Desarrollador de Software | Traductor Técnico',
    heroDescription: 'Desarrollador versátil y traductor técnico con sede en Córdoba, España. Combino experiencia técnica en desarrollo de software con sólidas capacidades lingüísticas, posicionándome de manera única para proyectos tecnológicos internacionales.',
    contactMe: 'Contáctame',
    
    // About Section
    aboutTitle: 'Sobre Mí',
    aboutText: 'Soy un desarrollador de software especializado en sistemas ERP, particularmente en personalización y despliegue de Odoo. Actualmente trabajo en el Instituto Maimónides de Investigación Biomédica de Córdoba (IMIBIC), donde lidero la implementación de ERP para investigación biomédica.',
    
    // Skills Section
    skillsTitle: 'Habilidades Técnicas',
    skillsSubtitle: 'Lenguajes de programación y tecnologías',
    
    // Experience Section
    experienceTitle: 'Experiencia Profesional',
    currentRole: 'Desarrollador de Software',
    currentCompany: 'Instituto Maimónides de Investigación Biomédica de Córdoba (IMIBIC)',
    currentPeriod: '2024 - 2025',
    currentDescription: 'Llevando a cabo la implementación de ERP Odoo para instituto de investigación biomédica. Desarrollando módulos personalizados en Python para flujos de trabajo de investigación especializados.',
    
    previousRole: 'Especialista Técnico',
    previousCompany: 'Interasmundo - Servicios Internacionales',
    previousPeriod: '2017 - 2021',
    previousDescription: 'Gestión de creación de contenido técnico y traducción para mercados internacionales. Implementación de estrategias SEO para sitios web multilingües.',
    
    adminRole: 'Ordenanza',
    adminCompany: 'Diputación de Córdoba',
    adminPeriod: '2021 - 2025',
    adminDescription: 'Traslado de documentación oficial y gestión de envíos. Control de accesos y comunicación con el ciudadano.',
    
    // Projects Section
    projectsTitle: 'Proyectos Destacados',
    projectsSubtitle: 'Desarrollo de software y soluciones técnicas',
    featuredProject: 'Módulo de Inventario Personalizado para Odoo',
    featuredDescription: 'Sistema especializado de gestión de inventario para investigación biomédica. Integrado con flujos de trabajo existentes de IMIBIC.',
    comingSoon: 'Próximamente',
    upcomingProjects: 'Próximos Proyectos Java',
    
    // Contact Section
    contactTitle: 'Contacto',
    contactSubtitle: 'Conectemos',
    contactText: 'Estoy disponible para nuevas oportunidades y colaboraciones.',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    linkedin: 'LinkedIn',
    website: 'Sitio web',
    
    // Footer
    footerText: '© 2025 José Mesa Padilla. Todos los derechos reservados',
    
    // Languages
    languages: 'Idiomas',
    spanish: 'Español (Nativo)',
    english: 'Inglés (C1)',
    french: 'Francés (C1)',
    german: 'Alemán (B1)',
  },
  en: {
    // Navigation
    home: 'Home',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'José Mesa Padilla',
    heroSubtitle: 'Software Developer | Technical Translator',
    heroDescription: 'Versatile software developer and technical translator based in Córdoba, Spain. I combine technical expertise in software development with strong linguistic capabilities, uniquely positioning myself for international technology projects.',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutText: 'I am a software developer specialized in ERP systems, particularly Odoo customization and deployment. Currently working at the Instituto Maimónides de Investigación Biomédica de Córdoba (IMIBIC), where I lead ERP implementation for biomedical research.',
    
    // Skills Section
    skillsTitle: 'Technical Skills',
    skillsSubtitle: 'Programming languages and technologies',
    
    // Experience Section
    experienceTitle: 'Professional Experience',
    currentRole: 'Software Developer',
    currentCompany: 'Instituto Maimónides de Investigación Biomédica de Córdoba (IMIBIC)',
    currentPeriod: '2024 - 2025',
    currentDescription: 'Leading Odoo ERP implementation for biomedical research institute. Developing custom Python modules for specialized research workflows.',
    
    previousRole: 'Technical Specialist',
    previousCompany: 'Interasmundo - International Services',
    previousPeriod: '2017 - 2021',
    previousDescription: 'Managed technical content creation and translation for international markets. Implemented SEO strategies for multilingual websites.',
    
    adminRole: 'Administrative',
    adminCompany: 'Diputación de Córdoba',
    adminPeriod: '2021 - 2025',
    adminDescription: 'Document management and administrative coordination. Security and access control systems.',
    
    // Projects Section
    projectsTitle: 'Featured Projects',
    projectsSubtitle: 'Software development and technical solutions',
    featuredProject: 'Custom Odoo Inventory Module',
    featuredDescription: 'Specialized inventory management system for biomedical research. Integrated with existing IMIBIC workflows.',
    comingSoon: 'Coming Soon',
    upcomingProjects: 'Upcoming Java Projects',
    
    // Contact Section
    contactTitle: 'Contact',
    contactSubtitle: 'Let\'s Connect',
    contactText: 'I am available for new opportunities and collaborations.',
    email: 'Email',
    phone: 'Phone',
    linkedin: 'LinkedIn',
    website: 'Website',
    
    // Footer
    footerText: '© 2025 José Mesa Padilla. All rights reserved.',
    madeWith: 'Made with Next.js',
    
    // Languages
    languages: 'Languages',
    spanish: 'Spanish (Native)',
    english: 'English (C1)',
    french: 'French (C1)',
    german: 'German (B1)',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
