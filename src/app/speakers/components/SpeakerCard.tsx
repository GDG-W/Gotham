'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Speaker } from '../data/speakerData';
import styles from '../styles/SpeakerCard.module.scss';
import Image from 'next/image';

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardWrapper = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleOutsideClicking = (e: Event) => {
      const target = e.target as Node;

      if (!cardWrapper.current?.contains(target)) {
        setIsFlipped(false);
      }
    };

    if (isFlipped) {
      document.addEventListener('click', handleOutsideClicking);
    }

    return () => document.removeEventListener('click', handleOutsideClicking);
  }, [isFlipped]);

  return (
    <li className={styles.cardWrapper} ref={cardWrapper}>
      <div className={`${styles.flipInner}  ${isFlipped ? styles.isFlipped : ''}`}>
        <div className={styles.flipFront}>
          <div className={styles.frontHead}>
            <p>{speaker.name.slice(0, 1)}</p>
            <div className={styles.speakerImageWrap} style={{ position: 'relative' }}>
              <Image
                src={speaker.image_url}
                fill
                alt={speaker.name + "'s Image"}
                loading='eager'
                style={{ objectFit: 'cover', minHeight: '100%' }}
              />
            </div>
          </div>
          <div className={styles.frontContent}>
            <p className={styles.speakerName}>{speaker.name}</p>
            <p className={styles.topic}>{speaker.session_title}</p>
            <p className={styles.date}>
              {speaker.day === 1 ? 'Day 1 - Friday' : 'Day 2 - Saturday'}
            </p>
          </div>
          <button className={styles.flipBtn} onClick={() => setIsFlipped(true)}>
            <p>View Bio</p>
          </button>
        </div>
        <div className={styles.flipBack}>
          <button className={styles.cancelBtn} onClick={() => setIsFlipped(false)}>
            <Image src={'/images/svg/Cancel-icon.svg'} alt='cancel icon' height={36} width={36} />
          </button>
          <div className={styles.content}>
            <div className={styles.speakerName}>{speaker.name}</div>
            <div className={styles.career}>{speaker.title}</div>
            <div className={styles.bio}>{speaker.shortbio || ''}</div>
          </div>
          <div className={styles.socialsWrapper}>
            <p>SPEAKERS SOCIALS</p>
            <div className={styles.socialLinksContainer}>
              {speaker.links.twitter && (
                <a href={speaker.links.twitter} target='_blank' rel='noreferrer'>
                  <Image src={'/images/svg/X-icon.svg'} alt='x icon' width={24} height={24} />
                </a>
              )}
              {speaker.links.linkedin && (
                <a href={speaker.links.linkedin} target='_blank' rel='noreferrer'>
                  <Image
                    src={'/images/svg/Linkedin-icon.svg'}
                    alt='linkdin icon'
                    width={24}
                    height={24}
                  />
                </a>
              )}
              {speaker.links.github && (
                <a href={speaker.links.github} target='_blank' rel='noreferrer'>
                  <Image
                    src={'/images/svg/github-icon.svg'}
                    alt='linkdin icon'
                    width={24}
                    height={24}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SpeakerCard;
