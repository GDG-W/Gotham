'use client';

import Image from 'next/image';
import { Button } from '../shared';
import SplitType from 'split-type';
import { useEffect, useRef, useState } from 'react';
import { CountdownTimer } from './CountdownTimer';
import {
  logoAnimation,
  headerTextAnimation,
  headerSubTextAnimation,
} from '@/utils/animations/pages/homeAnimations';

export const HomeBanner = (/*{ ScrollToSubscription }: { ScrollToSubscription: () => void }*/) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const bannerHeaderTextRef = useRef<HTMLDivElement>(null);
  const bannerSubTextRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const bannerHeaderText = SplitType.create('#bannerHeaderText');
    logoAnimation(logoRef);
    headerTextAnimation(bannerHeaderText, bannerHeaderTextRef);
    headerSubTextAnimation(bannerSubTextRef);

    return () => {
      bannerHeaderText.revert();
    };
  }, [isMounted]);

  if (!isMounted) return <div className='home-banner-paceholder'></div>;

  return (
    <section className='home-banner'>
      <div className='container'>
        <div className='notify-block'>
          <div ref={logoRef}>
            <Image
              src='/images/svg/devfest-logo.svg'
              alt='DevFest Lagos Logo'
              height={50}
              width={167}
            />
          </div>
          <a href={'/apply-to-speak/'}>
            <Button label='Apply To Speak' size='sm' />
          </a>
        </div>
        <div className='hero-text-container'>
          <div className='hashtag-container'>
            <Image src='/images/svg/hashtag.svg' alt='Hashtag' height={40} width={40} />
          </div>
          <div className='asterisk-container'>
            <Image src='/images/svg/asterik.svg' alt='Asterisk' height={40} width={40} />
          </div>
          <div className='overflow-hidden'>
            <h2 className='text-5xl' id='bannerHeaderText' ref={bannerHeaderTextRef}>
              The Countdown Begins
            </h2>
          </div>

          <p className='text-xl' ref={bannerSubTextRef}>
            We&apos;re baaaack!!! DevFest Lagos 2024 is coming. It&apos;s bigger and better, and we
            know it will be unforgettable. Are you ready?
          </p>
        </div>
        <div className='text-center'>
          <a href={'https://tickets.devfestlagos.com/'}>
            <Button label='Get Early Bird Tickets' size='lg' />
          </a>
        </div>
        {process.env.NEXT_PUBLIC_EVENT_TIME && <CountdownTimer />}
      </div>
      <div className='arithmetic-container'></div>
    </section>
  );
};
