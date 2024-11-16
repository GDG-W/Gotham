import React, { useState } from 'react';
import styles from '../styles/EventCategory.module.scss';
// import data from '../data/schedule.json';

type EventCategoryProps = {
  currentDay: 'day-1' | 'day-2';
  data: {
    venue: {
      name: string;
      size: number[];
    };
    duration: number;
    category: string;
    events: {
      session_id: number;
      duration: number;
      start_time: string;
      end_time: string;
      title: string;
      facilitator: string;
    }[];
  }[];
};

const EventCategory = ({ currentDay, data }: EventCategoryProps) => {
  const [selectedRoomCategory, setSelectedRoomCategory] = useState<string>('room 1 - Speaker Led');

  const roomCategories = [
    'room 1 - Speaker Led',
    'room 2 - generic',
    'room 3 - codelabs',
    'room 4 - workshops',
  ];

  type Event = {
    session_id: number;
    duration: number;
    start_time: string;
    end_time: string;
    title: string;
    facilitator?: string | undefined;
  };

  const formatFacilitatorName = (name: string) => {
    return name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getEventsByRoomAndCategory = (roomCategory: string): Event[] => {
    const [room, category] = roomCategory.split(' - ');
    return (
      data.find(
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
              {roomCategory.split('-').map((word) => {
                return (
                  <span className={styles.categoryWord} key={word}>
                    {word.toUpperCase()}
                  </span>
                );
              })}
            </button>
          );
        })}
      </div>

      {/* Events List */}
      <div
        className={`${styles.eventSchedule__events} ${styles[`room${selectedRoomCategory.charAt(5)}-active`]}`}
      >
        {getEventsByRoomAndCategory(selectedRoomCategory).map((event, index) => (
          <div
            key={`${currentDay}-${index}`}
            className={`${styles.eventSchedule__event} ${styles[`eventSchedule__event--${selectedRoomCategory.split('-')[0].trim()}`]}`}
          >
            <div className={styles['eventSchedule__event-time']}>
              <span className='text-sm'>
                {formatTime(event.start_time)} - {formatTime(event.end_time)}
              </span>
            </div>

            <h3 className={styles['eventSchedule__event-title']}>{event.title}</h3>

            {event.facilitator && (
              <p className={styles['eventSchedule__event-facilitator']}>
                {formatFacilitatorName(event.facilitator)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCategory;
