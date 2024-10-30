import React from 'react';

import { ScheduleData } from '../types/schedule';
import styles from '../styles/Schedule.module.scss';
import EventBlock from '../components/EventBlock';

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
        {/* <div className={styles.breakoutContainer}>
          {data.breakouts.map((breakout, index) => (
            <EventBlock key={index} block={breakout} type='breakout' />
          ))}
        </div> */}
        {data.post_breakout.map((block, index) => (
          <EventBlock key={index} block={block} type='post_breakout' />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
