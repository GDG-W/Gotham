import Faq from '@/components/faq/Faq';
import Footer from '@/components/home/Footer';
import Navbar from '@/components/home/Navbar';
import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <div>
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default page;
