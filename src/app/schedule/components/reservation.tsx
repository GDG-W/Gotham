'use client';

import styles from '@/app/schedule/styles/Reservation.module.scss';
import Image from 'next/image';
import { Button } from './button';

const Reservation = () => {
  return (
    <div className={styles.reservationContainer}>
      <div className={styles.phoneBottom}>
        <img src='/images/png/phone-mockup1.png' alt='phone' className={styles.responsiveImage} />
      </div>
      <div className={styles.container}>
        <Button
          backgroundColor='transparent'
          textColor='#FFFFFF'
          borderColor='#FFFFFF'
          className={styles.btnContent}
        >
          MOBILE APP
        </Button>
        <h3 className='text-3xl'>Reserve Your Sessions</h3>
        <p>
          Book sessions and get real time notifications seamlessly from the Devfest mobile app.
          Available on Apple and iOS App store.
        </p>
        <Button
          backgroundColor='#FFFFFF'
          textColor='#000000'
          borderColor='#000000'
          className={styles.download}
        >
          <p>Download the mobile app</p>
          <Image
            src='/images/svg/download.svg'
            alt='download'
            layout='intrinsic'
            width={20}
            height={20}
          />
        </Button>
      </div>
      <div className={styles.phoneTop}>
        <img src='/images/png/phone-mockup2.png' alt='phone' className={styles.responsiveImage} />
      </div>
    </div>
  );
};

export default Reservation;
