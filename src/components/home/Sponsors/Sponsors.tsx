import React from 'react';
import styles from './sponsors.module.scss';

import AbegLogo from './assets/abeg.svg';
import AndelaLogo from './assets/andela.svg';
import DearDesignerLogo from './assets/deardesigner.svg';
import FourthCanvasLogo from './assets/fourthcanvas.svg';
import KorapayLogo from './assets/korapay.svg';
import PatriciaLogo from './assets/patricia.svg';
import SerahKassimLogo from './assets/serahkassimlogo.svg';
import WalletsAfricaLogo from './assets/walletsafrica.svg';
import Marquee from 'react-fast-marquee';

const SponsorList = () => {
  return (
    <>
      <div className={styles.sponsorItem}>
        <AbegLogo />
      </div>
      <div className={styles.sponsorItem}>
        <AndelaLogo />
      </div>
      <div className={styles.sponsorItem}>
        <DearDesignerLogo />
      </div>
      <div className={styles.sponsorItem}>
        <FourthCanvasLogo />
      </div>
      <div className={styles.sponsorItem}>
        <KorapayLogo />
      </div>
      <div className={styles.sponsorItem}>
        <PatriciaLogo />
      </div>
      <div className={styles.sponsorItem}>
        <SerahKassimLogo />
      </div>
      <div className={styles.sponsorItem}>
        <WalletsAfricaLogo />
      </div>
    </>
  );
};

const Sponsors = () => {
  return (
    <section className={styles.sponsorsWrapper}>
      <div className={styles.heading}>
        <div className={styles.sponsorsPill}>
          <p>SPONSORS</p>
        </div>
        <h2> It’s Not Set Without Our Sponsors</h2>
        <p className={styles.sponsorsText}>
          DevFest Lagos 2023 was lit! But this year, we’re not just doing a repeat—we’re raising the
          bar higher with their support.
        </p>
      </div>
      <div className={styles.sponsorsList}>
        <SponsorList />
      </div>
      <Marquee
        speed={30}
        aria-label='Scrolling images of DevFest 2024 Sponsors'
        className={styles.sponsorsMarquee}
      >
        <div className={styles.horizontalSponsorsList}>
          <SponsorList />
        </div>
      </Marquee>
    </section>
  );
};
export default Sponsors;
