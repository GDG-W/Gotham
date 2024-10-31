import React from 'react';
import { SpeakerDataType } from '@/components/home/speakers/type';
import { classNames } from '@/utils/classNames';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import TwitterIcon from '@/assets/icons/twitter-icon.svg';
import GithubIcon from '@/assets/icons/github.svg';

interface SpeakerCardProps {
  speaker: SpeakerDataType;
  isActive?: boolean;
  position?: 'left' | 'right';
  index?: number;
  isPrev?: boolean;
  isNext?: boolean;
}

// Add this mapping object for custom image positions
const speakerImagePositions: Record<string, string> = {
  'samuel-abada': '0 0',
  'ngesa-marvin': '0 -40px',
  'yves-kalume': '0 -130px',
  'confidence-okoghenun': '0 -94px',
  'emike-dania': '0 -200px',
  'ololade-adesuyi': '0 -60px',
  'anita-ihuman': '0 -48px',
  'adejoke-haastrup': '0 -120px',
  'john-ohio': '0 -60px',
};

export const SpeakerCard = ({
  speaker,
  isActive,
  position,
  index = 0,
  isPrev,
  isNext,
}: SpeakerCardProps) => {
  const imagePosition = speakerImagePositions[speaker.id] || '0 0'; // Default to '0 0' if no custom position

  const speakerName = <p className='speaker-name'>{speaker.name.split(' ')[0]}</p>;
  const speakerDetails = (
    <div className='speaker-details'>
      <div>
        <p className='speaker-details__name'>{speaker.name}</p>
        <p className='speaker-details__job'>{speaker.title}</p>
      </div>
      <div className='speaker-details__links'>
        {speaker.links.linkedin && (
          <a
            href={speaker.links.linkedin}
            target='_blank'
            rel='noreferrer noopener'
            className='speaker-details__link'
          >
            <LinkedinIcon width={16} />
          </a>
        )}
        <a
          href={speaker.links.twitter}
          target='_blank'
          rel='noreferrer noopener'
          className='speaker-details__link'
        >
          <TwitterIcon width={14} />
        </a>
        {speaker.links.github && (
          <a
            href={speaker.links.github}
            target='_blank'
            rel='noreferrer noopener'
            className='speaker-details__link'
          >
            <GithubIcon width={16} />
          </a>
        )}
      </div>
    </div>
  );

  if (isActive) {
    return (
      <div className='speaker-large' key={speaker.id}>
        {speakerName}
        {speakerDetails}
        <div className='speaker-image-container'>
          <img
            src={speaker.image_url}
            className='speaker-image'
            alt=''
            style={{ objectPosition: imagePosition }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      key={`${speaker.id}-${index}`}
      className={classNames('speaker-small', position)}
      data-prev={isPrev ? true : undefined}
      data-next={isNext ? true : undefined}
      data-index={index}
    >
      {speakerName}
      {speakerDetails}
      {position === 'left' && speaker.id}
      <div className='speaker-image-container'>
        <img
          src={speaker.image_url}
          className='speaker-image'
          alt=''
          style={{ objectPosition: imagePosition }}
        />
      </div>
      {position === 'right' && speaker.id}
    </div>
  );
};
