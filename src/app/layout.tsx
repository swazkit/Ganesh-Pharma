import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartProvider } from '@/lib/cart-context';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pharmastore.com'),
  title: {
    default: 'PharmaStore — Licensed Online Pharmacy | Prescription Medications Delivered',
    template: '%s | PharmaStore — Licensed Online Pharmacy',
  },
  description:
    'Order FDA-approved prescription and over-the-counter medications from a licensed, NABP-accredited online pharmacy. Free pharmacist consultation, secure ordering, and discreet delivery.',
  keywords: [
    'online pharmacy',
    'prescription medications',
    'buy medications online',
    'licensed pharmacy',
    'FDA approved drugs',
    'pharmacy delivery',
    'prescription drugs online',
    'NABP accredited pharmacy',
    'discount medications',
    'generic drugs',
  ],
  authors: [{ name: 'PharmaStore' }],
  creator: 'PharmaStore',
  publisher: 'PharmaStore',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pharmastore.com',
    siteName: 'PharmaStore',
    title: 'PharmaStore — Licensed Online Pharmacy | Prescription Medications Delivered',
    description:
      'Order FDA-approved prescription and over-the-counter medications from a licensed, NABP-accredited online pharmacy.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PharmaStore — Licensed Online Pharmacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PharmaStore — Licensed Online Pharmacy',
    description:
      'Order FDA-approved medications from a licensed pharmacy. Free pharmacist consultation and discreet delivery.',
    images: ['/og-image.jpg'],
    creator: '@pharmastore',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="canonical" href="https://pharmastore.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
