
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'José Mesa Padilla - Software Developer | Technical Translator',
  description: 'Portfolio profesional de José Mesa Padilla, desarrollador de software y traductor técnico especializado en sistemas ERP, Java, Python y desarrollo web.',
  keywords: 'José Mesa Padilla, software developer, technical translator, Java, Python, Odoo, ERP, web development, Córdoba, Spain',
  authors: [{ name: 'José Mesa Padilla' }],
  creator: 'José Mesa Padilla',
  publisher: 'José Mesa Padilla',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jose-mesa-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'José Mesa Padilla - Software Developer | Technical Translator',
    description: 'Portfolio profesional de José Mesa Padilla, desarrollador de software y traductor técnico especializado en sistemas ERP, Java, Python y desarrollo web.',
    url: 'https://jose-mesa-portfolio.vercel.app',
    siteName: 'José Mesa Padilla Portfolio',
    images: [
      {
        url: '/jose-mesa-photo.jpeg',
        width: 1200,
        height: 630,
        alt: 'José Mesa Padilla - Software Developer',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Mesa Padilla - Software Developer | Technical Translator',
    description: 'Portfolio profesional de José Mesa Padilla, desarrollador de software y traductor técnico especializado en sistemas ERP, Java, Python y desarrollo web.',
    images: ['/jose-mesa-photo.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
