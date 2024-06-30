import Image from 'next/image';
import { Button } from '../shared';

export const Celebration = () => {
  return (
    <section className='celebration-wrapper'>
      <div className='container celebration-content'>
        <h2 className='text-5xl text-center'>
          You don&apos;t Want to Miss Out on the 11th Year of DevFest Lagos!
        </h2>
        <p className='text-xl'>
          We&apos;re celebrating 11 years of DevFest Lagos. Get your Early Bird tickets soon.
        </p>
        <Button label='Get Early Bird Tickets' size='lg' />
      </div>
      <div className='celebration-image-gallery-wrapper'>
        <div className='celebration-image-gallery'>
          <div className='celebration-image-one'>
            <Image src='/images/png/free-swag-white.png' layout='fill' alt='' />
          </div>
          <div className='celebration-image-two'>
            <Image src='/images/png/community.png' layout='fill' alt='' />
          </div>
          <div className='celebration-image-three'>
            <Image src='/images/png/amazing-sessions.png' layout='fill' alt='' />
          </div>
          <div className='celebration-image-four'>
            <Image src='/images/png/free-swag-white.png' layout='fill' alt='' />
          </div>
          <div className='celebration-image-five'>
            <Image src='/images/png/fun-activities.png' layout='fill' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};
