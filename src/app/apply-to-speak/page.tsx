import React from 'react';
import Image from 'next/image';
// import { Footer } from '@/components/shared';
import styles from './apply.module.scss';

const ApplyToSpeak = () => {
  return (
    <div className={styles.apply}>
      <div className={styles.container}>
        <div className={styles.header}>
          <a href='/'>
            <Image
              src='/images/svg/devfest-logo.svg'
              alt='DevFest Lagos Logo'
              height={50}
              width={167}
            />
          </a>
        </div>
        <div className={styles.form}>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSfIhzZoEnmcC1ZD0jZ8sXXyo5OpJzJSfFywFGWyTv1R8EXzcg/viewform?embedded=true'
            width='640'
            height='1790'
            frameBorder='0'
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ApplyToSpeak;
