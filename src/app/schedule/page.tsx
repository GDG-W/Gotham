'use client';

import React, { useState } from 'react';
import styles from '@/styles/pages/schedule.module.scss';
import Image from 'next/image';
import { Button } from './components/button';
import ScheduleItem from './components/scheduleData';
import { scheduleData, saturdayScheduleData } from '@/app/schedule/mock/schedule';
import Reservation from './components/reservation';

const SchedulePage = () => {
  const [currentSchedule, setCurrentSchedule] = useState(scheduleData);

  const handleDayClick = (day: string) => {
    if (day === 'friday') {
      setCurrentSchedule(scheduleData);
    } else if (day === 'saturday') {
      setCurrentSchedule(saturdayScheduleData);
    }
  };

  return (
    <main className={styles.scheduleContainer}>
      <div className={styles.container}>
        <Image
          src='/images/svg/blue_arrow.svg'
          alt='arrow'
          width={72}
          height={82}
          className={`${styles['top-left']} responsive-image`}
        />
        <h1 className='text-7xl'>Explore Our Very Demure Schedule</h1>
        <Image
          src='/images/svg/path.svg'
          alt='hash'
          width={107}
          height={107}
          className={`${styles['bottom-right']} responsive-image`}
        />
      </div>

      <div className={styles['cta-button-container']}>
        <Button
          backgroundColor={currentSchedule === scheduleData ? '#F9AB00' : 'transparent'}
          textColor='#000000'
          borderColor='#000000'
          externalStyles={styles.ctaButton}
          onClick={() => handleDayClick('friday')}
        >
          Day 1 - Friday, Nov 15
        </Button>
        <Button
          backgroundColor={currentSchedule === saturdayScheduleData ? '#F9AB00' : 'transparent'}
          borderColor='#000000'
          textColor='#000000'
          externalStyles={styles.ctaButton}
          onClick={() => handleDayClick('saturday')}
        >
          Day 2 - Saturday, Nov 16
        </Button>
      </div>

      <div className={styles.scheduleItemsContainer}>
        {currentSchedule.map((item, index) => (
          <ScheduleItem key={index} {...item} isLastItem={index === currentSchedule.length - 1} />
        ))}
      </div>

      <Reservation />
    </main>
  );
};

export default SchedulePage;
