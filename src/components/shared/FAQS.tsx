'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is Devfest?',
    answer:
      'DevFest is an annual developer conference organized by Google Developers Groups (GDGs) across the world. The event brings together tech-enthusiasts, developers, and industry experts to share knowledge, experience, and innovation.',
  },
  {
    question: 'What is Devfest Lagos 2024?',
    answer:
      "DevFest Lagos 2024 is a dynamic two-day festival that'll convene tech enthusiasts, from beginners to experts, and everyone in between in one place.",
  },
  {
    question: 'When & where will DevFest Lagos 2024 take place?',
    answer:
      'DevFest Lagos 2024 will be held on the 15th and 16th of November 2024, with each day’s session kickstarting by 9:00 AM prompt at the Landmark Event Center, Oniru, Lagos.',
  },
  {
    question: 'What should I expect at Devfest Lagos 2024?',
    answer:
      "DevFest Lagos 2024 is obviously going to be bigger and better! This time, you'll not only learn from industry experts, or  connect with like-minded professionals, or even network with potential collaborators, or gain insights into the latest trends and innovations in technology, but you'll have an unforgettable experience with lots of fun, relaxation, and  memories to last a lifetime.",
  },
];

const FaqItem = ({
  index,
  faq,
}: {
  index: number;
  faq: {
    question: string;
    answer: string;
  };
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      key={index}
      className={`faq-accordion-item ${isOpened && 'is-opened'}`}
      onClick={() => setIsOpened(!isOpened)}
    >
      <div className='item-question'>
        <p>
          {index + 1}. {faq.question}
        </p>
        <Image
          src={'/images/svg/chevron-arrow-down.svg'}
          alt='Arrow Down Icon'
          className='arrow-icon'
          height={24}
          width={24}
        />
      </div>
      <div className='item-answer'>
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQs = () => {
  return (
    <section className='faq-component-wrapper'>
      <div className='faq-pill'>FAQs</div>
      <div className='faq-heading'>
        <h3>Questions We Get Asked</h3>
        <p>From registration to what to expect on the day, our FAQs have all the info you need.</p>
      </div>
      <ul className='faq-accordion'>
        {faqs.map((faq, index) => {
          return <FaqItem index={index} faq={faq} key={index} />;
        })}
      </ul>
      <Link href='/faqs' className='faq-action-btn'>
        <p>I still have more questions</p>
        <Image
          src={'/images/svg/message-question-icon.svg'}
          alt='Message Question Icon'
          height={24}
          width={24}
        />
      </Link>
    </section>
  );
};
export default FAQs;
