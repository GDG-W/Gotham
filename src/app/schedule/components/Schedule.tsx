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

  const getSection = (section: string) => {
    switch (true) {
      case section.split('-')[0] === 'general':
        return 'GENERAL';
        break;
      case section.split('-')[0] === 'breakouts':
        return 'BREAKOUTS';
        break;
      default:
        return 'POST BREAKOUTS';
    }
  };

  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.scheduleHeader}>
        <p>SECTIONS</p>
        <p>SCHEDULE</p>
      </div>
      <div className={styles.schedule}>
        {Object.entries(currentSchedule).map(([key, events]) => {
          const typedKey = key as keyof typeof currentSchedule;
          return (
            <div className={styles.sectionsContainer} key={key}>
              <div className={styles.sectionLine}>
                <p>{getSection(key)}</p>
                <div className={styles.sectionLineSpan}></div>
              </div>
              {key.split('-')[0] === 'general' && (
                <div className={styles.generalContainer}>
                  {currentSchedule[typedKey].map((block, index) => (
                    <EventBlock key={index} block={block} type='general' />
                  ))}
                </div>
              )}
              {key.split('-')[0] === 'breakouts' && (
                <EventCategory currentDay={currentDay} data={events} />
              )}
              {key === 'post_breakout' && (
                <div className={styles.postBreakoutContainer}>
                  {currentSchedule.post_breakout.map((block, index) => (
                    <EventBlock key={index} block={block} type='post_breakout' />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
