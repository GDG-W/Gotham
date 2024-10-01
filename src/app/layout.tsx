import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import ReactQueryProvider from '@/lib/reactQuery/providers';
import localFont from 'next/font/local';
import { GeistSans } from 'geist/font/sans';
import '../styles/index.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DevFest 2024 | Coming Soon',
  description: 'The Biggest Tech Festival in Nigeria',
  keywords: 'devfest, devfest lagos, coming soon, date, venue',
  metadataBase: new URL('https://devfest-coming-soon.vercel.app/'), // synonymous to the base URL
};

const GeneralSans = localFont({
  src: [
    {
      path: '../fonts/GeneralSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/GeneralSans-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-generalSans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${GeistSans.variable} ${GeneralSans.variable}`}>
      <body>
        <ReactQueryProvider>
          {/* Your layout content, including header, main content, footer, etc goes here. */}

          {children}
        </ReactQueryProvider>
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}
