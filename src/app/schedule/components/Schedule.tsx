import React from 'react';

import { ScheduleData } from '../types/schedule';
import styles from '../styles/schedule.module.scss';
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
      <div className={styles.schedule}>
        {currentSchedule.general.map((block, index) => (
          <EventBlock key={index} block={block} type='general' />
        ))}
        <div className={styles.breakoutContainer}>
          <EventCategory currentDay={currentDay} />
        </div>

        <div className={styles.postBreakoutContainer}>
          {currentSchedule.post_breakout.map((block, index) => (
            <EventBlock key={index} block={block} type='post_breakout' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
