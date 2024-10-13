'use client';
import React from 'react';
import styles from '../styles/ScheduleItem.module.scss';
import { ScheduleItemProps, SingleEventScheduleItemProps } from '../types/schedule';

type Props = (ScheduleItemProps | SingleEventScheduleItemProps) & {
  isLastItem?: boolean;
};

const ScheduleItem: React.FC<Props> = (props) => {
  const { start_time, end_time, isLastItem } = props;

  const getLocationStyle = (location: string) => {
    switch (location.toLowerCase()) {
      case 'entrance':
        return styles.entrance;
      case 'room 1':
        return styles.room1;
      case 'all halls':
        return styles.allHalls;
      case 'room 2':
        return styles.room2;
      case 'outside':
        return styles.outside;
      case 'break':
        return styles.break;
      case 'room 3':
        return styles.room3;
      case 'room 4':
        return styles.room4;
      case 'closing':
        return styles.closing;
      default:
        return '';
    }
  };
  const renderSessions = () => {
    if ('sessions' in props) {
      return (
        <div className={styles.contain}>
          {props.sessions.map((session, index) => (
            <div key={index} className={styles.eventContent}>
              <div className={`${styles.location} ${getLocationStyle(session.location)}`}>
                {session.location.toUpperCase()}
              </div>
              <div className={styles.event}>{session.event}</div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className={styles.contain2}>
          <div className={`${styles.location} ${getLocationStyle(props.location)}`}>
            {props.location.toUpperCase()}
          </div>
          <div className={styles.event}>{props.event}</div>
        </div>
      );
    }
  };

  return (
    <div className={styles.scheduleItem}>
      <div className={styles.timeSlot}>
        <span>{start_time}</span>
        {end_time !== start_time && <span>{end_time}</span>}
        {!isLastItem && <span className={styles.line}></span>}
      </div>
      {renderSessions()}
    </div>
  );
};

export default ScheduleItem;
