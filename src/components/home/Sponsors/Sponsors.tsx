import React from 'react';
import styles from './sponsors.module.scss';
import sponsorData from './sponsors.json';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const SponsorList = () => {
  return (
    <>
      {sponsorData.map((item, index) => (
        <div className={styles.sponsorItem} key={index}>
          <Image src={item.logo} alt={item.name + 'logo'} height={32} width={180} />
        </div>
      ))}
    </>
  );

  // <>
  //   <div className={styles.sponsorItem}>
  //     <AbegLogo />
  //   </div>
  //   <div className={styles.sponsorItem}>
  //     <AndelaLogo />
  //   </div>
  //   <div className={styles.sponsorItem}>
  //     <DearDesignerLogo />
  //   </div>
  //   <div className={styles.sponsorItem}>
  //     <FourthCanvasLogo />
  //   </div>
  //   <div className={styles.sponsorItem}>
  //     <KorapayLogo />
  //   </div>
  //   <div className={styles.sponsorItem}>
  //     <PatriciaLogo />
  //   </div>
  //   <div className={styles.sponsorItem}>
  //     <SerahKassimLogo />
  //   </div>
  //   <div className={styles.sponsorItem}>
  //     <WalletsAfricaLogo />
  //   </div>
  // </>,
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
