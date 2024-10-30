import React from 'react';

import { ScheduleData } from '../types/schedule';
import styles from '../styles/schedule.module.scss';
import EventBlock from './EventBlock';
import EventCategory from './EventCategory';

type ScheduleProps = {
  data: ScheduleData;
};

const Schedule = ({ data }: ScheduleProps) => {
  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.schedule}>
        {data.general.map((block, index) => (
          <EventBlock key={index} block={block} type='general' />
        ))}
        <div className={styles.breakoutContainer}>
          <EventCategory />
        </div>
        {data.post_breakout.map((block, index) => (
          <EventBlock key={index} block={block} type='post_breakout' />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
