'use client';
import Image from 'next/image';
import { useState } from 'react';

const faqs = [
  {
    question: 'So, what is DevFest Lagos 2023?',
    answer:
      'DevFest Lagos 2023 will be held on November 24th and 25th, 2023, starting at 9:00 AM each day. The venue is Landmark, Oniru, Lagos.',
  },
  {
    question: 'When and where is DevFest Lagos 2023 taking place?',
    answer:
      'DevFest Lagos 2023 will be held on November 24th and 25th, 2023, starting at 9:00 AM each day. The venue is Landmark, Oniru, Lagos.',
  },
  {
    question: 'How can i register for DevFest Lagos 2023?',
    answer:
      'DevFest Lagos 2023 will be held on November 24th and 25th, 2023, starting at 9:00 AM each day. The venue is Landmark, Oniru, Lagos.',
  },
  {
    question: 'When and where is DevFest Lagos 2023 taking place?',
    answer:
      'DevFest Lagos 2023 will be held on November 24th and 25th, 2023, starting at 9:00 AM each day. The venue is Landmark, Oniru, Lagos.',
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
    <li key={index} className='faq-accordion-item' onClick={() => setIsOpened(!isOpened)}>
      <div className='item-question'>
        <p>
          {index + 1}. {faq.question}
        </p>
        <Image
          src={'/images/svg/chevron-arrow-down.svg'}
          alt='Arrow Down Icon'
          height={24}
          width={24}
        />
      </div>
      <div className='item-answer'>
        <p>{faq.answer}</p>
      </div>
    </li>
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
      <button className='faq-action-btn'>
        <p>I still have more questions</p>
        <Image
          src={'/images/svg/message-question-icon.svg'}
          alt='Message Question Icon'
          height={24}
          width={24}
        />
      </button>
    </section>
  );
};
export default FAQs;
