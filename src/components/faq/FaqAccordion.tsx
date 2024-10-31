'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { mockData } from './mockData';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQData {
  devfest: FAQItem[];
  tickets: FAQItem[];
}
type FAQCategory = 'devfest' | 'tickets';

const FAQAccordion: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>('devfest');
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleCategory = (category: FAQCategory) => {
    setActiveCategory(category);
    setOpenItems({});
  };

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className='faqs-accordion'>
      <div className='faqs-buttons'>
        <button
          className={`faqs-button faqs-devfest ${activeCategory === 'devfest' ? 'active' : ''}`}
          onClick={() => toggleCategory('devfest')}
        >
          DevFest Lagos 2024
        </button>
        <button
          className={`faqs-button faqs-ticket ${activeCategory === 'tickets' ? 'active' : ''}`}
          onClick={() => toggleCategory('tickets')}
        >
          Tickets
        </button>
      </div>
      <div className='faqs-items'>
        {mockData[activeCategory].map((item) => (
          <div key={item.id} className={`faqs-item ${openItems[item.id] ? 'open' : ''}`}>
            <button className='faqs-question' onClick={() => toggleItem(item.id)}>
              {item.question}
              {openItems[item.id] ? (
                <ChevronUp className='chevron-icon' />
              ) : (
                <ChevronDown className='chevron-icon' />
              )}
            </button>
            {openItems[item.id] && <div className='faqs-answer'>{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
