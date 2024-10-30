'use client';

import React, { useState } from 'react';
import styles from './styles/schedule.module.scss';
import Image from 'next/image';
import Reservation from './components/reservation';
import { Button } from './components/button';
import { ScheduleData } from './types/schedule';
import data from './data/schedule.json';
import Schedule from './components/Schedule';
// import { notFound } from 'next/navigation';

const scheduleData = data as unknown as ScheduleData;

const SchedulePage = () => {
  // notFound(); //re-routes to not found
  const [currentSchedule, setCurrentSchedule] = useState(scheduleData);

  const handleDayClick = (day: string) => {
    if (day === 'friday') {
      setCurrentSchedule(scheduleData);
    } else if (day === 'saturday') {
      setCurrentSchedule(scheduleData);
    }
  };

  return (
    <main className={`${styles.scheduleContainer}`}>
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
          backgroundColor={currentSchedule === scheduleData ? '#F9AB00' : 'transparent'}
          textColor='#000000'
          borderColor='#000000'
          externalStyles={`${styles.ctaButton}`}
          onClick={() => handleDayClick('friday')}
        >
          Day 1 - Friday
        </Button>
        <Button
          backgroundColor={currentSchedule === scheduleData ? '#F9AB00' : 'transparent'}
          borderColor='#000000'
          textColor='#000000'
          externalStyles={`${styles.ctaButton}`}
          onClick={() => handleDayClick('saturday')}
        >
          Day 2 - Saturday
        </Button>
      </div>

      <div className={`${styles.scheduleItemsContainer}`}>
        <Schedule data={scheduleData} />
      </div>

      <Reservation />
    </main>
  );
};

export default SchedulePage;
