
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
    heroDescription: 'Desarrollador de software y traductor técnico especializado en la integración de soluciones tecnológicas y comunicación multilingüe. Combino habilidades técnicas avanzadas en desarrollo de software, especialmente en sistemas ERP y programación, con experiencia en traducción y localización para mercados internacionales, aportando un enfoque integral y adaptado a proyectos tecnológicos globales.',
    contactMe: 'Contáctame',
    
    // About Section
    aboutTitle: 'Sobre Mí',
    aboutText: 'Soy un desarrollador de software especializado en sistemas ERP, particularmente en personalización y despliegue de Odoo. Actualmente trabajo en el Instituto Maimónides de Investigación Biomédica de Córdoba (IMIBIC), donde lidero la implementación de ERP para investigación biomédica.',
    
    // Skills Section
    skillsTitle: 'Habilidades Técnicas',
    skillsSubtitle: 'Lenguajes de programación y tecnologías',
    
    // Learning Section
    learningSubtitle: 'Tecnologías y frameworks que estoy explorando actualmente.',

    // Experience Section
    experienceTitle: 'Experiencia Profesional',
    currentRole: 'Desarrollador de Software (Prácticas)',
    currentCompany: 'Instituto Maimónides de Investigación Biomédica de Córdoba (IMIBIC)',
    currentPeriod: '2024 - 2025',
    currentDescription: 'Implementación y personalización del sistema ERP Odoo para optimizar procesos internos del instituto de investigación biomédica. Desarrollo de módulos personalizados en Python para el control de inventario mediante códigos QR, gestión administrativa de tarjetas corporativas y alta de nuevos empleados entre otros flujos de trabajo especializados.',
    
    previousRole: 'Especialista Técnico',
    previousCompany: 'Interasmundo',
    previousPeriod: '2017 - 2021',
    previousDescription: 'Creación, traducción y localización de contenido técnico. Gestión de SEO para sitios web multilingües. Asesoramiento técnico en migración de ERP y coordinación con desarrollo de software a medida para optimizar sistemas internos.',

    adminRole: 'Ordenanza',
    adminCompany: 'Diputación de Córdoba',
    adminPeriod: '2021 - 2025',
    adminDescription: 'Gestión y traslado de documentación oficial, control de accesos y atención al público como personal de museo, comunicándome con visitantes en varios idiomas.',

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
    downloadCV: 'Descargar CV',
    
    // Footer
    footerText: '© 2025 José Mesa Padilla. Todos los derechos reservados',
    
    // Languages
    languages: 'Idiomas',
    spanish: 'Español',
    english: 'Inglés',
    french: 'Francés',
    german: 'Alemán',
    native: 'Nativo',
    c1: 'C1',
    b1: 'B1',
    accreditedBy: 'Acreditado por',
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
    heroDescription: 'Software developer and technical translator specializing in integrating technological solutions with multilingual communication. I combine advanced software development skills, particularly in ERP systems and programming, with experience in translation and localization for international markets, delivering a comprehensive approach tailored to global tech projects.',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutText: 'I am a software developer specialized in ERP systems, particularly Odoo customization and deployment. Currently working at the Instituto Maimónides de Investigación Biomédica de Córdoba (IMIBIC), where I lead ERP implementation for biomedical research.',
    
    // Skills Section
    skillsTitle: 'Technical Skills',
    skillsSubtitle: 'Programming languages and technologies',

    // Learning Section
    learningSubtitle: 'Technologies and frameworks I am currently exploring.',

    // Experience Section
    experienceTitle: 'Professional Experience',
    currentRole: 'Software Developer (Internship)',
    currentCompany: 'Instituto Maimónides de Investigación Biomédica de Córdoba (IMIBIC)',
    currentPeriod: '2024 - 2025',
    currentDescription: 'Implementation and customization of the Odoo ERP system to optimize internal processes at the biomedical research institute. Development of custom Python modules for inventory control using QR codes, administrative management of corporate cards, and onboarding of new employees, among other specialized workflows.',
    
    previousRole: 'Technical Specialist',
    previousCompany: 'Interasmundo',
    previousPeriod: '2017 - 2021',
    previousDescription: 'Creation, translation, and localization of technical content. SEO management for multilingual websites. Technical consulting on ERP migration and coordination with custom software development to optimize internal systems.',
    
    adminRole: 'Subordinate',
    adminCompany: 'Diputación de Córdoba',
    adminPeriod: '2021 - 2025',
    adminDescription: 'Handled official document transfers, access control, and public assistance as museum staff, communicating with visitors in multiple languages.',

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
    downloadCV: 'Download CV',
    
    // Footer
    footerText: '© 2025 José Mesa Padilla. All rights reserved.',
    madeWith: 'Made with Next.js',
    
    // Languages
    languages: 'Languages',
    spanish: 'Spanish',
    english: 'English',
    french: 'French',
    german: 'German',
    native: 'Native',
    c1: 'C1',
    b1: 'B1',
    accreditedBy: 'Accredited by',
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
