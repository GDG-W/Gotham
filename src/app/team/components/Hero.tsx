'use client';
import { useEffect, useRef } from 'react';
import styles from '../styles/Hero.module.scss';

// name card images
import MobileGroupCards from '../assets/GroupCards.svg';
import DesktopGroupCards from '../assets/DesktopGroup.svg';

// cursors
import AiCursor from '../assets/Ai-cursor.svg';
import FoomayCursor from '../assets/foomay-cursor.svg';
import TtaCursor from '../assets/tta-cursor.svg';

import AiCursorMobile from '../assets/Ai-cursor-mobile.svg';
import FoomayCursorMobile from '../assets/foomay-cursor-mobile.svg';
import TtaCursorMobile from '../assets/tta-cursor-mobile.svg';

const Hero = () => {
  const groupImageContainerRef = useRef<HTMLDivElement>(null);

  const animateCursor = (cursor: Element, width: number) => {
    const containerRect = groupImageContainerRef.current!.getBoundingClientRect();

    const moveCursor = () => {
      const x = Math.random() * (containerRect.width - width); // Cursor within bounds
      const y = Math.random() * (containerRect.height - width);

      (cursor as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;

      // Random interval between 3 to 5 seconds
      const randomInterval = Math.random() * 2000 + 3000;
      setTimeout(moveCursor, randomInterval);
    };

    moveCursor();
  };

  useEffect(() => {
    if (document) {
      const cursors = document.querySelectorAll(`#cursor`);
      cursors.forEach((cursor) => {
        const width = cursor.clientWidth;
        animateCursor(cursor, width);
      });
    }
  }, []);

  return (
    <section className={styles.HeroWrapper}>
      <h2>Meet The Team</h2>
      <div className={styles.creativeGroup} ref={groupImageContainerRef}>
        <div className={styles.FoomayCursor} id='cursor'>
          <FoomayCursor className={styles.desktopIcon} />
          <FoomayCursorMobile className={styles.mobileIcon} />
        </div>
        <div className={styles.imageCards}>
          <MobileGroupCards className={styles.mobileGroupCards} />
          <DesktopGroupCards className={styles.desktopGroupCards} />
        </div>
        <div className={styles.AiCursor} id='cursor'>
          <AiCursor className={styles.desktopIcon} />
          <AiCursorMobile className={styles.mobileIcon} />
        </div>
        <div className={styles.TtaCursor} id='cursor'>
          <TtaCursor className={styles.desktopIcon} />
          <TtaCursorMobile className={styles.mobileIcon} />
        </div>
      </div>
    </section>
  );
};
export default Hero;
