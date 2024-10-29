/* eslint-disable react/react-in-jsx-scope */
'use client';
import { useEffect, useRef, useState } from 'react';
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
              <Image src={speaker.image_url} fill alt={speaker.name + "'s Image"} />
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
            <div className={styles.bio}>
              {speaker.bio.length > 520 ? speaker.bio.slice(0, 520) + '...' : ''}
            </div>
          </div>
          <div className={styles.socialsWrapper}>
            <p>SPEAKERS SOCIALS</p>
            <div className={styles.socialLinksContainer}>
              {speaker.links.twitter && (
                <a href={speaker.links.twitter}>
                  <Image src={'/images/svg/X-icon.svg'} alt='x icon' width={24} height={24} />
                </a>
              )}
              {speaker.links.linkedin && (
                <a href={speaker.links.linkedin}>
                  <Image
                    src={'/images/svg/Linkedin-icon.svg'}
                    alt='linkdin icon'
                    width={24}
                    height={24}
                  />
                </a>
              )}
              {speaker.links.github && (
                <a href={speaker.links.github}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <g
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='1.5'
                    >
                      <path d='M3.5 15.668q.675.081 1 .618c.326.537 1.537 2.526 2.913 2.526H9.5m5.672-3.513q.823 1.078.823 1.936V21m-5.625-5.609q-.87.955-.869 1.813V21' />
                      <path d='M15.172 15.299c1.202-.25 2.293-.682 3.14-1.316c1.448-1.084 2.188-2.758 2.188-4.411c0-1.16-.44-2.243-1.204-3.16c-.425-.511.819-3.872-.286-3.359c-1.105.514-2.725 1.198-3.574.947c-.909-.268-1.9-.416-2.936-.416c-.9 0-1.766.111-2.574.317c-1.174.298-2.296-.363-3.426-.848c-1.13-.484-.513 3.008-.849 3.422C4.921 7.38 4.5 8.44 4.5 9.572c0 1.653.895 3.327 2.343 4.41c.965.722 2.174 1.183 3.527 1.41' />
                    </g>
                  </svg>
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
