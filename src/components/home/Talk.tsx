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
}

const Talk = ({ speakerImage, speakerName, description, endTime, startTime, room, title, hideLine }: Props) => {
  return (
    <div className='talk'>
      <div className='talk__side'>
        <p className='talk__time'>
          {startTime} <br /> {endTime}
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
          <div>
            <p className='talk__title'>{title}</p>
            <p className='talk__description'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;