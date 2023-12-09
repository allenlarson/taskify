import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL('https://taskify-allen-larsons-projects.vercel.app'),
  icons: [
    {
      url: '/logo.svg',
      href: '/logo.svg',
    },
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: 'https://taskify-allen-larsons-projects.vercel.app/',
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
