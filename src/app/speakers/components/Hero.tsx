'use client';
import Image from 'next/image';
import styles from '../styles/Hero.module.scss';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { speakerData } from '../data/speakerData';

const speakersSlideData = speakerData.map((speaker) => {
  return { image: speaker.image_url, name: speaker.name };
});
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
        <h2>Meet The DevFest Lagos 2024 Speakers!</h2>
        <Image
          src={'/images/svg/yellow_hashtag.svg'}
          alt='blue icon'
          width={108}
          height={108}
          className={styles.yellowHashtag}
        />
      </div>
      {/* DISPLAY VERTICAL OR HORIZONTAL SLIDERS BASED ON SCREEN WIDTHH */}
      {screenWidth ? (
        screenWidth > 768 ? (
          // Vertical React fast Marquee is buggy. Hence a manual implementation...
          <div
            className={styles.verticalMarquee}
            aria-label='Scrolling images of DevFest 2024 Speakers'
          >
            <ul className={`${styles.marqueeContent} ${styles.marqueeContent_up}`}>
              {[
                ...speakersSlideData.slice(0, speakersSlideData.length / 2),
                ...speakersSlideData.slice(0, speakersSlideData.length / 2),
              ].map((speaker, index) => {
                return (
                  <li className={styles.marqueeItem} key={index}>
                    <Image
                      src={speaker.image}
                      fill
                      alt={speaker.name + "'s image"}
                      loading='eager'
                    />
                    <div className={styles.speakerName}>{speaker.name}</div>
                  </li>
                );
              })}
            </ul>
            <ul className={`${styles.marqueeContent} ${styles.marqueeContent_down}`}>
              {[
                ...speakersSlideData.slice(speakersSlideData.length / 2),
                ...speakersSlideData.slice(speakersSlideData.length / 2),
              ].map((speaker, index) => {
                return (
                  <li className={styles.marqueeItem} key={index}>
                    <Image
                      src={speaker.image}
                      fill
                      alt={speaker.name + "'s image"}
                      loading='eager'
                      priority
                    />
                    <div className={styles.speakerName}>{speaker.name}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <Marquee speed={60} aria-label='Scrolling images of DevFest 2024 Speakers'>
            {speakersSlideData.map((speaker, index) => {
              return (
                <div
                  className={`${styles.marqueeItem} ${styles.horizontalMarqueeItem}`}
                  key={index}
                >
                  <Image
                    src={speaker.image}
                    fill
                    alt={speaker.name + "'s image"}
                    loading='eager'
                    priority
                  />
                  <div className={styles.speakerName}>{speaker.name}</div>
                </div>
              );
            })}
          </Marquee>
        )
      ) : (
        <div className={styles.placeHolder}></div>
      )}
    </section>
  );
};
export default Hero;
