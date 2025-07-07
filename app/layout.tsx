import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'José Mesa Padilla - Software Developer | Technical Translator',
  description:
    'Portfolio profesional de José Mesa Padilla, desarrollador de software y traductor técnico especializado en sistemas ERP, Java, Python y desarrollo web.',
  keywords:
    'José Mesa Padilla, software developer, technical translator, Java, Python, Odoo, ERP, web development, Córdoba, Spain',
  authors: [{ name: 'José Mesa Padilla' }],
  creator: 'José Mesa Padilla',
  publisher: 'José Mesa Padilla',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://josemesa.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'José Mesa Padilla - Software Developer | Technical Translator',
    description:
      'Portfolio profesional de José Mesa Padilla, desarrollador de software y traductor técnico especializado en sistemas ERP, Java, Python y desarrollo web.',
    url: 'https://josemesa.dev',
    siteName: 'José Mesa Padilla Portfolio',
    images: [
      {
        url: 'https://josemesa.dev/foto_jm_logo.png',
        width: 1200,
        height: 630,
        alt: 'José Mesa Padilla - Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Mesa Padilla - Software Developer | Technical Translator',
    description:
      'Portfolio profesional de José Mesa Padilla, desarrollador de software y traductor técnico especializado en sistemas ERP, Java, Python y desarrollo web.',
    images: ['https://josemesa.dev/foto_jm_logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <Head>
        <link
          rel="icon"
          href="/favicon_jm.png"
          type="image/png"
          sizes="32x32"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </Head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}