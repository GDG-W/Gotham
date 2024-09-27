import React from 'react';
import Image from 'next/image';
import FAQAccordion from './FaqAccordion';
import Footer from '../home/Footer';
import Community from './Community';

const Faq = () => {
  return (
    <div className='faqs'>
      <div className='faqs__text'>
        <p>
          We Have <Image src='/images/svg/faq-img.svg' alt='Faq Icon' width={80} height={80} />{' '}
          Answers To Your Questions
        </p>
      </div>

      <FAQAccordion />
      <Community />
      <Footer />
    </div>
  );
};

export default Faq;
