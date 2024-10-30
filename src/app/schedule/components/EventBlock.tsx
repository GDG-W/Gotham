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

const EventBlock = ({ block, type }: EventBlockProps) => {
  return (
    <div className={`${styles.eventBlock} ${styles[type]}`}>
      <div className={styles.time}>{`${block.start_time} - ${block.end_time}`}</div>
      <div className={styles.events}>
        {block.events.map((event, index) => (
          <div key={index} className={styles.event}>
            <h3>{event.title}</h3>
            {event.facilitator && <p>Facilitator: {event.facilitator}</p>}
            {/* <p>Venue: {event.venue.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBlock;
