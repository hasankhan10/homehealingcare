import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import EmergencyButton from '@/components/layout/emergency-button';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const siteConfig = {
  name: 'Home Healing Care',
  description: 'Your trusted partner for in-home healthcare services, offering personalized care, AI symptom checking, and easy appointment booking.',
  url: 'https://www.homehealingcare.com',
  ogImage: 'https://i.pinimg.com/736x/cf/a1/ee/cfa1ee06bf82375d4f6f567356055f07.jpg',
  links: {
    twitter: '#', // Replace with your Twitter/X profile
    facebook: '#', // Replace with your Facebook profile
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Home healthcare",
    "In-home care",
    "Elder care",
    "Post-operative care",
    "Symptom checker",
    "Book appointment",
    "Healthcare at home",
    "Kolkata healthcare",
    "Bangalore healthcare"
  ],
  authors: [{ name: 'Stova Media Agency' }],
  creator: 'Stova Media Agency',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
  },
  icons: {
    icon: '/favicon.ico',
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  'name': 'Home Healing Care',
  'url': siteConfig.url,
  'logo': 'https://cdn-icons-png.flaticon.com/512/2975/2975233.png',
  'image': siteConfig.ogImage,
  'description': siteConfig.description,
  'telephone': '+91 98327 11495',
  'email': 'homehealingcare@gmail.com',
  'address': [
    {
      '@type': 'PostalAddress',
      'addressLocality': 'Kolkata',
      'addressRegion': 'WB',
      'postalCode': '700091',
      'addressCountry': 'IN'
    },
    {
      '@type': 'PostalAddress',
      'addressLocality': 'Bangalore',
      'addressRegion': 'KA',
      'postalCode': '560009',
      'addressCountry': 'IN'
    }
  ],
  'openingHours': 'Mo,Tu,We,Th,Fr,Sa,Su 09:00-18:00',
  'sameAs': [
    siteConfig.links.facebook,
    siteConfig.links.twitter
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative flex min-h-screen flex-col">
          <Header navLinks={NAV_LINKS} />
          <main className="flex-1">{children}</main>
          <Footer navLinks={NAV_LINKS} />
        </div>
        <EmergencyButton />
        <Toaster />
      </body>
    </html>
  );
}
