import React from 'react';
import { Event } from '../types/schedule';
import styles from '../styles/EventBlock.module.scss';

type EventBlockProps = {
  block: {
    duration: number;
    start_time: string;
    end_time: string;
    events: Event[];
  };
  type: 'general' | 'breakout' | 'post_breakout';
};

const formatFacilitatorName = (name: string) => {
  return name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const EventBlock = ({ block, type }: EventBlockProps) => {
  const shouldUseRowLayout = (startTime: string) => {
    return startTime === '9:50' || startTime === '10:35';
  };

  const getVenueClass = (venueName?: string) => {
    if (!venueName) return '';

    switch (venueName.toLowerCase()) {
      case 'outside':
        return styles.outside;
      case 'room 1':
        return styles.room1;
      case 'room 2':
        return styles.room2;
      default:
        return '';
    }
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const period = Number(hours) >= 12 ? 'PM' : 'AM';
    const formattedHours = Number(hours) % 12 || 12;
    return `${formattedHours}:${minutes} ${period}`;
  };

  const isRowLayout = shouldUseRowLayout(block.start_time);

  return (
    <div className={`${styles.eventBlock} ${styles[type]} ${isRowLayout ? styles.rowGrid : ''}`}>
      <div className={`${styles.events} ${isRowLayout ? styles.rowLayout : ''}`}>
        {block.events.map((event, index) => (
          <div key={index} className={styles.event}>
            {event.venue && (
              <div className={`${styles.venue} ${getVenueClass(event.venue.name)}`}>
                <span>{event.venue.name}</span>
              </div>
            )}
            <div
              className={styles.time}
            >{`${formatTime(block.start_time)} - ${formatTime(block.end_time)}`}</div>
            <h3>{event.title}</h3>
            {event.facilitator && (
              <p className={styles['eventSchedule__event-facilitator']}>
                {formatFacilitatorName(event.facilitator)}
              </p>
            )}

            {event.panelists && Array.isArray(event.panelists) && (
              <div className={styles.panelists}>
                <ul>
                  {event.panelists.map((panelist, idx) => (
                    <li key={idx}>{panelist}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBlock;
