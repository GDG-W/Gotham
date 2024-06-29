import Image from 'next/image';
import { Button } from '../shared';
import { CountdownTimer } from './CountdownTimer';

export const HomeBanner = () => {
  return (
    <section className='home-banner'>
      <div className='container'>
        <div className='notify-block'>
          <Image src={'/images/svg/devfest-logo.svg'} alt='DevFest Lagos' height='36' width='111' />
          <Button label='Notify me' size='sm' />
        </div>
        <div className='hero-text-container'>
          <h2 className='text-5xl'>DevFest Lagos is Back, Bigger and Better</h2>
          <p className='text-xl'>
            We&apos;re back! and it&apos;s about to be the biggest and most unforgettable tech
            festival yet. Get ready for DevFest Lagos 2024.
          </p>
        </div>
        <div className='text-center'>
          <Button label='Get Early Bird Tickets' size='lg' />
        </div>
        {process.env.NEXT_PUBLIC_EVENT_TIME ? <CountdownTimer /> : ''}
      </div>
    </section>
  );
};
