'use client';

import React, { useEffect, useState } from 'react';
import Talk from '../Talk';
import talkData from './talkData.json';
import Link from 'next/link';
import MenuBoardIcon from '/public/images/svg/menu-board.svg';

const Talks = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [displayedData, setDisplayedData] = useState(talkData['day-1']);

  useEffect(() => {
    setDisplayedData(selectedDay === 1 ? talkData['day-1'] : talkData['day-2']);
  }, [selectedDay]);

  return (
    <section className='talks'>
      <p className='talks__pill'>TALKS</p>
      <p className='talks__title'>Options For Everyone</p>
      <p className='talks__description'>
        At DevFest Lagos 2024, we’re serving up a full menu of talks and session to match every
        taste. No matter what you’re into, there’s something for you.
      </p>
      <div className='talks__dates'>
        <button
          className={`talks__date ${selectedDay === 1 ? 'active' : ''}`}
          onClick={() => setSelectedDay(1)}
        >
          Day 1 - Friday
        </button>
        <button
          className={`talks__date  ${selectedDay === 2 ? 'active' : ''}`}
          onClick={() => setSelectedDay(2)}
        >
          Day 2 - Saturday
        </button>
      </div>
      {displayedData.map((speaker, index) => {
        const descText = speaker.session_description || speaker.shortbio;
        return (
          <Talk
            key={index}
            startTime={speaker.start_time}
            endTime={speaker.end_time}
            room={speaker.venue.toUpperCase()}
            speakerName={speaker.speaker_name}
            speakerImage={speaker.speaker_image}
            title={speaker.title}
            description={descText.length > 200 ? descText.slice(0, 200) + '...' : descText}
            hideLine={index === displayedData.length - 1}
          />
        );
      })}
      <Link href={'/schedule'} className='talks__scheduleLink'>
        <p>View Schedule</p>
        <MenuBoardIcon />
      </Link>
    </section>
  );
};
export default Talks;
