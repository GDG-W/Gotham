'use client';
import React, { useEffect, useState } from 'react';
import styles from './sponsors.module.scss';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const SponsorList = () => {
  const [sponsorData, setSponsorData] = useState<
    { link: string; logo: string; name: string }[] | null
  >(null);

  useEffect(() => {
    fetch('/app-assets/sponsors.json')
      .then((response) => response.json())
      .then((data) => setSponsorData(data))
      .catch((error) => console.error('Error fetching sponsor data:', error));
  }, []);

  if (!sponsorData) return null;

  return (
    <>
      {sponsorData.map((item, index) => (
        <div className={styles.sponsorItem} key={index}>
          <a href={item.link} target='_blank' rel='noreferrer'>
            <Image
              src={item.logo}
              alt={item.name + 'logo'}
              height={32}
              width={180}
              loading='eager'
              className={`${item.name === 'Cleva' ? styles.cleva : ''}`}
            />
          </a>
        </div>
      ))}
    </>
  );
};

const Sponsors = () => {
  return (
    <section className={styles.sponsorsWrapper}>
      <div className={styles.heading}>
        <div className={styles.sponsorsPill}>
          <p>PARTNERS</p>
        </div>
        <h2>It’s Not Set Without Our Partners and Sponsors</h2>
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
