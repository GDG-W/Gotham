'use client';
import React, { useState } from 'react';
import styles from './styles/schedule.module.scss';
import Image from 'next/image';
import Reservation from './components/reservation';
import { Button } from './components/button';
import { ScheduleData } from './types/schedule';
import data from './data/schedule.json';
import Schedule from './components/Schedule';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

type ScheduleDataByDay = {
  'day-1': ScheduleData;
  'day-2': ScheduleData;
};

const scheduleData = data as unknown as ScheduleDataByDay;

const SchedulePage = () => {
  const [currentDay, setCurrentDay] = useState<'day-1' | 'day-2'>('day-1');

  return (
    <>
      <Navbar />
      <main className={`${styles.scheduleContainer}`}>
        <div className={styles.Header}>
          <div className={`${styles.container}`}>
            <Image
              src='/images/svg/blue_arrow.svg'
              alt='arrow'
              width={72}
              height={82}
              className={`${styles['top-left']} responsive-image`}
            />
            <h1 className=''>Explore our very demure schedule</h1>
            <Image
              src='/images/svg/path.svg'
              alt='hash'
              width={107}
              height={107}
              className={`${styles['bottom-right']} responsive-image`}
            />
          </div>

          <div className={`${styles['cta-button-container']}`}>
            <Button
              backgroundColor={currentDay === 'day-1' ? '#F9AB00' : 'transparent'}
              textColor='#000000'
              borderColor='#000000'
              externalStyles={`${styles.ctaButton}`}
              onClick={() => setCurrentDay('day-1')}
            >
              Day 1 - Friday
            </Button>
            <Button
              backgroundColor={currentDay === 'day-2' ? '#F9AB00' : 'transparent'}
              borderColor='#000000'
              textColor='#000000'
              externalStyles={`${styles.ctaButton}`}
              onClick={() => setCurrentDay('day-2')}
            >
              Day 2 - Saturday
            </Button>
          </div>
        </div>

        <div className={`${styles.scheduleItemsContainer}`}>
          <Schedule data={scheduleData} currentDay={currentDay} />
        </div>

        <Reservation />
      </main>
      <Footer />
    </>
  );
};

export default SchedulePage;
