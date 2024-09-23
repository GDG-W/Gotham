import { Footer } from '@/components/shared';
import FAQs from '@/components/shared/FAQS';
import Subscribe from '@/components/shared/Subscribe';
import React from 'react';

const page = () => {
  return (
    <>
      <div>Hello DevFest2024!</div>
      <FAQs />
      <Subscribe />
      <Footer />
    </>
  );
};

export default page;
