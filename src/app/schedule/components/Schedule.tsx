import React from 'react';
import { ScheduleData } from '../types/schedule';
import styles from '../styles/ScheduleItem.module.scss';
import EventBlock from './EventBlock';
import EventCategory from './EventCategory';

type ScheduleProps = {
  data: {
    'day-1': ScheduleData;
    'day-2': ScheduleData;
  };
  currentDay: 'day-1' | 'day-2';
};

const Schedule = ({ data, currentDay }: ScheduleProps) => {
  const currentSchedule = data[currentDay];

  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.scheduleHeader}>
        <p>SECTIONS</p>
        <p>SCHEDULE</p>
      </div>
      <div className={styles.schedule}>
        <div className={styles.sectionsContainer}>
          <div className={styles.sectionLine}>
            <p>GENERAL</p>
            <div className={styles.sectionLineSpan}></div>
          </div>
          <div className={styles.generalContainer}>
            {currentSchedule.general.map((block, index) => (
              <EventBlock key={index} block={block} type='general' />
            ))}
          </div>
        </div>
        <div className={styles.sectionsContainer}>
          <div className={styles.sectionLine}>
            <p>BREAKOUTS</p>
            <div className={styles.sectionLineSpan}></div>
          </div>
          <EventCategory currentDay={currentDay} />
        </div>

        <div className={styles.sectionsContainer}>
          <div className={styles.sectionLine}>
            <p>POST BREAKOUTS</p>
            <div className={styles.sectionLineSpan}></div>
          </div>
          <div className={styles.postBreakoutContainer}>
            {currentSchedule.post_breakout.map((block, index) => (
              <EventBlock key={index} block={block} type='post_breakout' />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
