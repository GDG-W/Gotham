import React from 'react';
import '../../styles/index.scss';
import { Metadata } from 'next';
import { Footer, Navbar } from '@/components/shared';
import { DpProvider } from '@/context/dp-context';
import { SEO } from '@/seo';

export const metadata: Metadata = {
  title: 'DevFest 2024 | DP Generator',
  description: 'Generator your picture and share on your social media platform',
  keywords: 'devfest, devfest lagos, coming soon, date, venue',
  //   metadataBase: new URL('https://devfest-coming-soon.vercel.app/'), // synonymous to the base URL
};

export default function DPGLayout({ children }: { children: React.ReactNode }) {
  return (
    <DpProvider>
      <SEO
        title='Generate Your DevFest Lagos 2024 DP'
        description='Create and Share your DevFest Lagos 2023 DP with friends and on your socials'
        image='/images/png/dp-opengraph.png'
      />

      <div className=''>
        <Navbar />
        {children}
        <Footer type='DpGen' />
      </div>
    </DpProvider>
  );
}
