import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import EmergencyButton from '@/components/layout/emergency-button';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Home Healing Care',
    template: '%s | Home Healing Care',
  },
  description: 'Your trusted partner for in-home healthcare services.',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
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
