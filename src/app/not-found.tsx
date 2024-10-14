'use client';

import styles from './styles/not-found.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './schedule/components/button';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src='/images/construction.svg' alt='Construction Logo' />
      </div>
      <h2>This page is unavailable at the moment. Kindly check back later.</h2>
      <div className={styles.nfcta}>
        <div className={styles.ctaButton}>
          <Link href='https://tickets.devfestlagos.com' target='__blank'>
            <Button backgroundColor={'#F9AB00'} textColor='#000000' borderColor='#000000'>
              <p>Get Tickets</p>
              <Image src='/images/icons/ticket.svg' alt='Ticket' width={20} height={20} />
            </Button>
          </Link>
        </div>
        <div className={styles.ctaButton}>
          <Link href='/' target='__blank'>
            <Button backgroundColor={'transparent'} textColor='#000000' borderColor='#000000'>
              <p>Go Home</p>
              <Image src='/images/svg/home.svg' alt='Home' width={20} height={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
