'use client';

import { useEffect } from 'react';

export default function JsonLd() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'José Mesa Padilla',
      jobTitle: 'Software Developer | Technical Translator',
      url: 'https://josemesa.dev',
      sameAs: [
        'https://linkedin.com/in/jmesap',
        'https://github.com/jmesap',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Córdoba',
        addressCountry: 'España',
      },
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}