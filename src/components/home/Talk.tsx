import React from 'react';

type Props = {
  startTime: string;
  endTime: string;
  room: string;
  speakerName: string;
  speakerImage: string;
  title: string;
  description: string;
  hideLine?: boolean;
};

const Talk = ({
  speakerImage,
  speakerName,
  description,
  endTime,
  startTime,
  room,
  title,
  hideLine,
}: Props) => {
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const period = Number(hours) >= 12 ? 'PM' : 'AM';
    const formattedHours = Number(hours) % 12 || 12;
    return `${formattedHours}:${minutes} ${period}`;
  };

  return (
    <div className='talk'>
      <div className='talk__side'>
        <p className='talk__time'>
          {formatTime(startTime)} <br /> {formatTime(endTime)}
        </p>
        {!hideLine && <p className='talk__timeline' />}
      </div>
      <div>
        <div className='talk__details'>
          <p className='talk__room'>{room}</p>
          <p className='talk__speaker'>{speakerName}</p>
        </div>
        <div className='talk__content'>
          <img src={speakerImage} alt={speakerName} className='talk__image' />
          <div className='talk__text'>
            <p className='talk__title'>{title}</p>
            <p className='talk__description'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;
