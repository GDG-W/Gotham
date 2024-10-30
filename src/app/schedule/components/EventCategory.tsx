import React, { useState } from 'react';
import styles from '../styles/EventCategory.module.scss';
import data from '../data/schedule.json';

const EventCategory = () => {
  const [selectedRoomCategory, setSelectedRoomCategory] = useState<string>('room 1 - Speaker Led');

  const roomCategories = [
    'room 1 - Speaker Led',
    'room 2 - codelabs',
    'room 3 - generic',
    'room 4 - workshops',
  ];

  type Event = {
    session_id: number;
    duration: number;
    start_time: string;
    end_time: string;
    title: string;
    facilitator?: string;
  };

  const getEventsByRoomAndCategory = (roomCategory: string): Event[] => {
    const [room, category] = roomCategory.split(' - ');
    return (
      data.breakouts.find(
        (breakout) =>
          breakout.venue.name === room &&
          breakout.category.toLowerCase() === category.toLowerCase(),
      )?.events || []
    );
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const period = Number(hours) >= 12 ? 'PM' : 'AM';
    const formattedHours = Number(hours) % 12 || 12;
    return `${formattedHours}:${minutes} ${period}`;
  };

  return (
    <div className={styles.eventSchedule__container}>
      {/* Room and Category Tabs */}
      <div className={styles.eventSchedule__tabs}>
        {roomCategories.map((roomCategory, index) => {
          const isActive = selectedRoomCategory === roomCategory;

          return (
            <button
              key={index}
              onClick={() => setSelectedRoomCategory(roomCategory)}
              className={`${styles['eventSchedule__tab']} ${isActive ? styles.active : styles.inactive} ${styles[`room${index + 1}`]}`}
            >
              {roomCategory.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Events List */}
      <div className={styles.eventSchedule__events}>
        {getEventsByRoomAndCategory(selectedRoomCategory).map((event, index) => (
          <div
            key={index}
            className={`${styles.eventSchedule__event} ${styles[`eventSchedule__event--${selectedRoomCategory.split('-')[0].trim()}`]}`}
          >
            <div className={styles['eventSchedule__event-time']}>
              <span className='text-sm'>
                {formatTime(event.start_time)} - {formatTime(event.end_time)}
              </span>
            </div>

            <h3 className={styles['eventSchedule__event-title']}>{event.title}</h3>

            {event.facilitator && (
              <p className={styles['eventSchedule__event-facilitator']}>{event.facilitator}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCategory;
