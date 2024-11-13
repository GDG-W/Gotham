import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './DpGeneratorSection.module.scss';

const DpGeneratorSection = () => {
  return (
    <section className={styles.sectionWrapper}>
      <Image
        src={'/images/png/dpgeneratesection.png'}
        alt='a generated dp'
        height={520}
        width={520}
        className={styles.generateImg}
      />
      <div className={styles.generateText}>
        <div className={styles.generatePill}>
          <p>DP GENERATOR</p>
        </div>
        <div className={styles.header}>
          <h2>Generate your Devfest Lagos ‘24 DP</h2>
          <p>
            Let everyone know that you will be at Devfest 2024 no matter what. Create your own super
            cool DP
          </p>
        </div>
        <Link href={'/dp-generator'} className={styles.generateLink}>
          <p>Let’s go</p>
          <Image src='/images/svg/arrow-right.svg' alt='Right Arrow' width={24} height={24} />
        </Link>
      </div>
    </section>
  );
};
export default DpGeneratorSection;
