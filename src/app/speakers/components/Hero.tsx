'use client';
import Image from 'next/image';
import styles from '../styles/Hero.module.scss';
import { speakersSlideData } from '../mockData/mock';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  if (!screenWidth) {
    return null;
  }

  return (
    <section className={styles.headerWrapper}>
      <div className={styles.headerText}>
        <Image
          src={'/images/svg/green_arrow.svg'}
          alt='green icon'
          width={72}
          height={72}
          className={styles.greenArrow}
        />
        <Image
          src={'/images/svg/blue_arrow.svg'}
          alt='blue icon'
          width={72}
          height={72}
          className={styles.blueArrow}
        />
        <h2>Meet The DevFest 2024 Speakers!</h2>
        <Image
          src={'/images/svg/yellow_hashtag.svg'}
          alt='blue icon'
          width={108}
          height={108}
          className={styles.yellowHashtag}
        />
      </div>
      {/* DISPLAY VERTICAL OR HORIZONTAL SLIDERS BASED ON SCREEN WIDTH */}
      {screenWidth > 768 ? (
        <div className={styles.verticalMarquee}>
          <ul className={`${styles.marqueeContent} ${styles.marqueeContent_up}`}>
            {[...speakersSlideData.slice(0, 3), ...speakersSlideData.slice(0, 3)].map(
              (speaker, index) => {
                return (
                  <li className={styles.marqueeItem} key={index}>
                    <Image src={speaker.image} fill alt={speaker.name + "'s image"} />
                    <div className={styles.speakerName}>{speaker.name}</div>
                  </li>
                );
              },
            )}
          </ul>
          <ul className={`${styles.marqueeContent} ${styles.marqueeContent_down}`}>
            {[...speakersSlideData.slice(3), ...speakersSlideData.slice(3)].map(
              (speaker, index) => {
                return (
                  <li className={styles.marqueeItem} key={index}>
                    <Image src={speaker.image} fill alt={speaker.name + "'s image"} />
                    <div className={styles.speakerName}>{speaker.name}</div>
                  </li>
                );
              },
            )}
          </ul>
        </div>
      ) : (
        <div className={styles.horizontalMarquee}>
          <ul className={styles.marqueeContent}>
            {[...speakersSlideData, ...speakersSlideData].map((speaker, index) => {
              return (
                <li className={styles.marqueeItem} key={index}>
                  <Image src={speaker.image} fill alt={speaker.name + "'s image"} />
                  <div className={styles.speakerName}>{speaker.name}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};
export default Hero;
