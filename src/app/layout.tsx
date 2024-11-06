import React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import ReactQueryProvider from '@/lib/reactQuery/providers';
import { GeistSans } from 'geist/font/sans';
import '../styles/index.scss';
import { Metadata } from 'next';
import { GoogleSans, GeneralSans } from '@/utils/font';
// import Navbar from '@/components/home/Navbar';
// import Footer from '@/components/home/Footer';

export const metadata: Metadata = {
  title: 'DevFest Lagos 2024',
  description: 'The Biggest Tech Festival in Nigeria',
  keywords: 'devfest, devfest lagos, coming soon, date, venue',
  metadataBase: new URL('https://deploy-preview-42--devfestlagos.netlify.app/'), // synonymous to the base URL
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${GeistSans.variable} ${GeneralSans.variable} ${GoogleSans.variable}`}
    >
      <body>
        <ReactQueryProvider>
          {/* Your layout content, including header, main content, footer, etc goes here. */}
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </ReactQueryProvider>
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}
