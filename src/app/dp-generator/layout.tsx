import React from 'react';
import '../../styles/index.scss';
import { Metadata } from 'next';
import { Navbar } from '@/components/shared';
import { DpProvider } from '@/context/dp-context';
import Footer from '@/components/home/Footer';

const title = 'DevFest 2024 | DP Generator';
const description = 'Generator your picture and share on your social media platform';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'devfest, devfest lagos, coming soon, date, venue',
  openGraph: {
    title,
    description,
    images: ['/dp-opengraph-image.png'],
    type: 'website',
  },
};

export default function DPGLayout({ children }: { children: React.ReactNode }) {
  return (
    <DpProvider>
      <div className=''>
        <Navbar />
        {children}
        <Footer />
        {/* <Footer type='DpGen' /> */}
      </div>
    </DpProvider>
  );
}
