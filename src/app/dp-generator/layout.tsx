import React from 'react';
import '../../styles/index.scss';
import { Metadata } from 'next';
import { Footer, Navbar } from '@/components/shared';

export const metadata: Metadata = {
  title: 'DevFest 2024 | DP Generator',
  description: 'Generator your picture and share on your social media platform',
  keywords: 'devfest, devfest lagos, coming soon, date, venue',
  //   metadataBase: new URL('https://devfest-coming-soon.vercel.app/'), // synonymous to the base URL
};

export default function DPGLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=''>
      <Navbar />
      {children}
      <Footer type='DpGen' />
    </div>
  );
}
