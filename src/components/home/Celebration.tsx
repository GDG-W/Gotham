import { Button } from '../shared';
import SplitType from 'split-type';
import { useRef, useEffect } from 'react';
import CelebrationCard, { CelebrationCardProps } from './CelebrationCard';
import {
  celebrationHeaderTextAnimation,
  celebrationSubTextAnimation,
  celebrationImageGalleryAnimation,
} from '@/utils/animations/pages/homeAnimations';

const devfestTopics = [
  {
    text: 'Free Swag',
    state: 'green',
  },
  {
    text: 'Free Swag',
    size: 'lg',
    state: 'blue',
  },
  {
    text: 'Community',
  },
  {
    text: 'Fun Activities',
  },
  {
    text: 'Fun Activities',
  },
] as CelebrationCardProps[];

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
            You don&apos;t Want to Miss Out on the 11th Year of DevFest Lagos!
          </h2>
        </div>

        <p className='text-xl' ref={subTextRef}>
          We&apos;re celebrating 11 years of DevFest Lagos. Early Bird tickets coming soon.
        </p>
        <a href={process.env.NEXT_PUBLIC_TICKETING_APP_URL || '#'}>
          <Button label='Apply To Speak' size='lg' />
        </a>
      </div>
      <div className='celebration-image-gallery-wrapper'>
        <div className='celebration-image-gallery'>
          {devfestTopics.map((devFestTopic) => (
            <CelebrationCard {...devFestTopic} />
          ))}

          {/* <div className='celebration-image-one'>
            <Image src='/images/png/free-swag-white.png' fill alt='Free swag' />
          </div>
          <div className='celebration-image-two'>
            <Image src='/images/png/community.png' fill alt='Community engagement' />
          </div>
          <div className='celebration-image-three'>
            <Image src='/images/png/amazing-sessions.png' fill alt='Amazing sessions' />
          </div>
          <div className='celebration-image-four'>
            <Image src='/images/png/free-swag-white.png' fill alt='Free swag' />
          </div> */}
          {/* <div className='celebration-image-five'>
            <Image src='/images/png/fun-activities.png' fill alt='Fun activities' />
          </div> */}
        </div>
      </div>
    </section>
  );
};
