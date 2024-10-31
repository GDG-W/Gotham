import React, { useMemo, useRef, useState } from 'react';
import SpeakersIcon from '@/assets/icons/speakers.svg';
import speakersData from '@/app/speakers/data/speakers.json';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';
import { SpeakerCard } from '@/components/home/speakers/speaker-card';
import { SpeakerDataType } from '@/components/home/speakers/type';
import Link from 'next/link';

const speakersWithInvalidPictures = ['john-ohio', 'ngesa-marvin'];

const speakers = Object.values(speakersData).filter(
  ({ id }) => !speakersWithInvalidPictures.includes(id),
);

function wrapValue(min: number, max: number, current: number) {
  const range = max - min + 1;
  return ((((current - min) % range) + range) % range) + min;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const MAX_SMALL_ITEMS = 6;

const Speakers = () => {
  const [activeSpeakerIndex, setActiveSpeakerIndex] = useState(0);
  const isAnimating = useRef(false);

  const visibleSpeakers = useMemo(() => {
    // Extract speakers before and after the active speaker
    const previousSpeakers = speakers.slice(0, activeSpeakerIndex);
    const nextSpeakers = speakers.slice(activeSpeakerIndex + 1);

    // Helper function to ensure each side has the correct number of items
    const padOrTrimArray = (arr: SpeakerDataType[], maxItems: number, addToStart: boolean) => {
      // Calculate the number of items needed to reach the maxItems length
      const paddingCount = maxItems - arr.length;

      if (paddingCount > 0) {
        // If more items are needed, add from the start or end of `speakers`
        const paddingSpeakers = addToStart
          ? speakers.slice(-paddingCount)
          : speakers.slice(0, paddingCount);
        return addToStart ? [...paddingSpeakers, ...arr] : [...arr, ...paddingSpeakers];
      }

      // If we have too many items, trim from the beginning or end as needed
      return arr.slice(addToStart ? -maxItems : 0, addToStart ? undefined : maxItems);
    };

    // Ensure both `previousSpeakers` and `nextSpeakers` have the correct number of items
    return {
      previousSpeakers: padOrTrimArray(previousSpeakers, MAX_SMALL_ITEMS, true).reverse(),
      activeSpeaker: speakers[activeSpeakerIndex],
      nextSpeakers: padOrTrimArray(nextSpeakers, MAX_SMALL_ITEMS, false),
    };
  }, [activeSpeakerIndex]);

  const onChangeSpeaker = (direction: 'left' | 'right') => () => {
    if (isAnimating.current) return;

    isAnimating.current = true;

    const isGoingRight = direction === 'right';

    const activeElement = document.querySelector('.speaker-large')! as HTMLDivElement;
    const leftElement = document.querySelector('[data-prev]')! as HTMLDivElement;
    const rightElement = document.querySelector('[data-next]')! as HTMLDivElement;

    const nextActiveElement = isGoingRight ? rightElement : leftElement;

    // Transition coloring of image
    activeElement.querySelector('.speaker-image')?.classList.add('black-and-white');
    nextActiveElement.querySelector('.speaker-image')?.classList.add('colored');

    //Show name text on closing element
    nextActiveElement.querySelector('.speaker-name')?.classList.add('hide');
    sleep(150).then(() => {
      activeElement.querySelector('.speaker-name')?.classList.add('show');
    });

    //Show details on opening element
    nextActiveElement.querySelector('.speaker-details')?.classList.add('show');
    activeElement.querySelector('.speaker-details')?.classList.add('hide');

    if (isGoingRight) {
      activeElement.classList.add('shrink-left');
    } else {
      activeElement.classList.add('shrink-right');
    }

    nextActiveElement.classList.add('grow');

    const speakersElements = [...document.querySelectorAll('.speaker-small')];

    speakersElements
      .filter((s) => s !== nextActiveElement)
      .map((e) => {
        if (isGoingRight) {
          e.classList.add('slide-left');
        } else {
          e.classList.add('slide-right');
        }
      });

    sleep(400).then(() => {
      isAnimating.current = false;
      // This reset the elements so that the classes and translations are reset and we can start from scratch
      setActiveSpeakerIndex((index) =>
        wrapValue(0, speakers.length - 1, isGoingRight ? index + 1 : index - 1),
      );
    });
  };

  return (
    <section className='speakers'>
      <div className='speakers__pill'>SPEAKERS</div>
      <div className='speakers__controls'>
        <button className='speakers__button' onClick={onChangeSpeaker('left')}>
          <ArrowLeft width={25} />
        </button>
        <p className='speakers__title'>Meet Our Speakers</p>
        <button className='speakers__button' onClick={onChangeSpeaker('right')}>
          <ArrowRight width={25} />
        </button>
      </div>
      <p className='speakers__description'>
        We&#39;ve raised the bar this year with our impressive lineup of speakers, each prepared to
        share valuable insights on different aspects of the tech community.
      </p>
      <div className='speakers-row'>
        {visibleSpeakers.previousSpeakers.map((speaker, index) => (
          <SpeakerCard
            key={`${speaker.id}-${index}`}
            speaker={speaker}
            position='left'
            index={index}
            isPrev={index === 0}
          />
        ))}

        <SpeakerCard speaker={visibleSpeakers.activeSpeaker} isActive={true} />

        {visibleSpeakers.nextSpeakers.map((speaker, index) => (
          <SpeakerCard
            key={`${speaker.id}-${index}`}
            speaker={speaker}
            position='right'
            index={index}
            isNext={index === 0}
          />
        ))}
      </div>
      <div className='speakers__mobile-controls'>
        <button className='speakers__mobile-control-button' onClick={onChangeSpeaker('left')}>
          <ArrowLeft height={12} width={12} />
        </button>
        <button className='speakers__mobile-control-button' onClick={onChangeSpeaker('right')}>
          <ArrowRight height={12} width={12} />
        </button>
      </div>
      <Link href='/speakers' className='speakers__see-speakers'>
        See all Speakers
        <SpeakersIcon />
      </Link>
    </section>
  );
};

export default Speakers;
