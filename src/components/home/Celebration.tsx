import { Button } from '../shared';
import SplitType from 'split-type';
import { useRef, useEffect } from 'react';
import {
  celebrationHeaderTextAnimation,
  celebrationSubTextAnimation,
  celebrationImageGalleryAnimation,
} from '@/utils/animations/pages/homeAnimations';

const TopicPill = ({ topic }: { topic: { title: string; bg: string } }) => {
  return (
    <div
      className='topic-pill'
      style={{ backgroundColor: topic.bg }}
      role='region'
      aria-label={`Topic: ${topic.title}`}
    >
      <p>{topic.title}</p>
    </div>
  );
};

const topics = [
  {
    title: 'Cloud Computing ☁️',
    bg: '#FFFAEB',
  },
  {
    title: '⁠⁠Blockchain 💎',
    bg: '#F8D8D8',
  },
  {
    title: '⁠⁠Cybersecurity 👾',
    bg: '#D3F1F8',
  },
  {
    title: 'AI & ML 🦾',
    bg: '#CCF6C5',
  },
  {
    title: 'Android Development 📱',
    bg: '#F8D8D8',
  },
  {
    title: 'Web Development 🌐',
    bg: '#D3F1F8',
  },
  {
    title: 'UX/UI Design 🤩',
    bg: '#FFFAEB',
  },
  {
    title: '⁠⁠Data Science 📊',
    bg: '#CCF6C5',
  },
  {
    title: 'DevOps 👨‍💻',
    bg: '#FFFFFF',
  },
  {
    title: '⁠⁠IoT (Internet of Things) 📶',
    bg: '#D3F1F8',
  },

  {
    title: '⁠⁠Product Management 🫂',
    bg: '#CCF6C5',
  },
];

export const Celebration = () => {
  const headerTextRef = useRef<HTMLDivElement>(null);
  const subTextRef = useRef<HTMLDivElement>(null);
  const imageGallerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerText = SplitType.create('#celebrationHeading');
    celebrationHeaderTextAnimation(headerText, headerTextRef);
    celebrationSubTextAnimation(subTextRef);
    celebrationImageGalleryAnimation(imageGallerRef);

    return () => {
      headerText.revert();
    };
  }, []);

  return (
    <section className='celebration-wrapper' aria-labelledby='celebration-heading'>
      <div className='container celebration-content'>
        <div className='overflow-hidden'>
          <h2 id='celebrationHeading' className='text-5xl text-center' ref={headerTextRef}>
            You Don&apos;t Want to Miss Out on The 11th Year of DevFest Lagos!
          </h2>
        </div>

        <p className='text-xl' ref={subTextRef}>
          We&apos;re celebrating 11 years of DevFest Lagos. Early Bird tickets coming soon.
        </p>
        <a href={'/apply-to-speak'}>
          <Button label='Apply To Speak' size='lg' />
        </a>
      </div>
      <div className='container topics-wrapper'>
        {topics.map((topic, index) => (
          <TopicPill topic={topic} key={index} />
        ))}
      </div>
    </section>
  );
};
