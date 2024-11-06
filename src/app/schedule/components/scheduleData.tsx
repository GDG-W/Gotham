// 'use client';
// import React from 'react';
// import styles from '../styles/ScheduleItem.module.scss';
// import { ScheduleItemProps, Event } from '../types/schedule';

// const ScheduleItem: React.FC<ScheduleItemProps> = ({
//   events,
//   start_time,
//   end_time,
//   isLastItem,
//   category
// }) => {
//   const getLocationStyle = (venueName: string) => {
//     switch (venueName.toLowerCase()) {
//       case 'outside':
//         return styles.outside;
//       case 'room 1':
//         return styles.room1;
//       case 'room 2':
//         return styles.room2;
//       case 'room 3':
//         return styles.room3;
//       case 'room 4':
//         return styles.room4;
//       default:
//         return '';
//     }
//   };

//   const renderEvent = (event: Event) => {
//     return (
//       <div className={styles.eventContent}>
//         {event.venue && (
//           <div className={`${styles.location} ${getLocationStyle(event.venue.name)}`}>
//             {event.venue.name.toUpperCase()}
//           </div>
//         )}
//         <div className={styles.event}>
//           <h3 className={styles.title}>{event.title}</h3>
//           {event.facilitator && (
//             <p className={styles.facilitator}>Facilitator: {event.facilitator}</p>
//           )}
//           {event.panelists && event.panelists.length > 0 && (
//             <div className={styles.panelists}>
//               {event.panelists.map((panelist, index) => (
//                 <span key={index} className={styles.panelist}>
//                   {panelist}
//                 </span>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderMultipleEvents = () => {
//     return (
//       <div className={styles.contain}>
//         {events.map((event, index) => (
//           <div key={index} className={styles.eventWrapper}>
//             {renderEvent(event)}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className={styles.scheduleItem}>
//       <div className={styles.timeSlot}>
//         <span>{start_time}</span>
//         {!isLastItem && <span className={styles.line}></span>}
//         {end_time !== start_time && <span>{end_time}</span>}
//       </div>
//       {category && <div className={styles.category}>{category}</div>}
//       {events.length > 1 ? renderMultipleEvents() : renderEvent(events[0])}
//     </div>
//   );
// };

// export default ScheduleItem;
