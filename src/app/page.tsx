'use client';
import React from 'react';
import Image from 'next/image';
import TicketIcon from '@/assets/icons/ticket.svg';
import TicketQrIcon from '@/assets/icons/ticket-qr.svg';
import VideoIcon from '@/assets/icons/video.svg';
import GalleryIcon from '@/assets/icons/gallery.svg';
import ticketImage from '@/assets/images/ticket.png';
import throwbackImage from '@/assets/images/homepage-throwback.png';
import homeHero from '@/assets/images/home-hero.png';

const Ticket = ({ className = '' }: { className?: string }) => (
  <div className={`ticket ${className}`}>
    <div className='ticket__top-image-wrapper'>
      <figure className='ticket__top-image'>
        <Image src={ticketImage} alt='Ticket Preview Image' width={242} height={87} />
      </figure>
    </div>
    <div className='ticket__splitter'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className='ticket__splitter__dash'></div>
      ))}
    </div>
    <div className='ticket__details'>
      <div>
        <div className='ticket__detail-label'>Happening live at</div>
        <div className='ticket__detail-value'>Landmark Event Center, Lagos</div>
      </div>
      <div>
        <div className='ticket__detail-label'>Date</div>
        <div className='ticket__detail-value'>15 - 16 November, 2024</div>
      </div>
      <div>
        <div className='ticket__detail-label'>Ticket ID</div>
        <div className='ticket__detail-value'>1234567890</div>
      </div>
    </div>
    <div className='ticket__splitter'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className='ticket__splitter__dash'></div>
      ))}
    </div>
    <TicketQrIcon className='ticket__ticket-qr' />
    <div className='ticket__cubes'>
      {Array.from({ length: 7 }).map((_, index) => (
        <div className='ticket__cubes__tear' key={index} />
      ))}
    </div>
  </div>
);

const Homepage = () => {
  return (
    <div className='home'>
      <section className='hero'>
        <Image
          src={homeHero}
          alt='Picture of attendants'
          className='hero__bg-image'
          objectFit='cover'
          fill
        />
        <div className='hero__overlay'></div>
        <div className='hero__presents'>GDG LAGOS PRESENTS</div>
        <p className='hero__title'>DevFest Lagos 2024</p>
        <div className='hero__buttons'>
          <a
            href='https://tickets.devfestlagos.com/'
            target='_blank'
            rel='noreferrer'
            className='hero__get-tickets'
          >
            Get Tickets
            <TicketIcon />
          </a>
          {/*<button className='hero__download-app'>*/}
          {/*  Download App*/}
          {/*  <DownloadIcon />*/}
          {/*</button>*/}
        </div>
        <div className='hero__details'>
          <div className='hero-detail'>
            <figure className='hero-detail__icon-wrapper'>📍</figure>
            <div>
              <p className='hero-detail__label'>Where</p>
              <p className='hero-detail__value'>Landmark Event Center</p>
            </div>
          </div>
          <div className='hero__details-divider'></div>
          <div className='hero-detail'>
            <figure className='hero-detail__icon-wrapper'>🗓️</figure>
            <div>
              <p className='hero-detail__label'>When</p>
              <p className='hero-detail__value'>15th - 16th November, 2024</p>
            </div>
          </div>
          <div className='hero__details-divider'></div>
          <div className='hero-detail'>
            <figure className='hero-detail__icon-wrapper'>🌎</figure>
            <div>
              <p className='hero-detail__label'>Who</p>
              <p className='hero-detail__value'>Everyone</p>
            </div>
          </div>
        </div>
      </section>
      <section className='tickets'>
        <div className='tickets__pill'>TICKETS</div>
        <h3 className='tickets__title'>Don’t Miss Out - Get Your Ticket Now!</h3>
        <p className='tickets__description'>
          FOMO is real. DevFest Lagos 2024 tickets are selling fast, so don’t wait till the last
          minute.
        </p>
        <a
          href='https://tickets.devfestlagos.com/'
          target='_blank'
          rel='noreferrer'
          className='tickets__get-tickets'
        >
          Get Tickets
          <TicketIcon />
        </a>
        <div className='ticket-group-wrapper'>
          <Ticket className='tilt-left' />
          <Ticket className='tilt-right' />
          <Ticket />
        </div>
      </section>
      <section className='throwback'>
        <Image
          src={throwbackImage}
          objectFit='cover'
          fill
          alt='Throw back pictures'
          className='throwback__bg-image'
        />
        <div className='throwback__pill'>THROWBACK</div>
        <h3 className='throwback__title'>
          Throwback to DevFest Lagos &apos;23: Vibes and Tech All the Way
        </h3>
        <p className='throwback__description'>
          Remember the energy? The pictures, the jollof, the pure tech vibes? Last year, we turned
          up and showed out. From inspiring sessions to unforgettable connections, DevFest Lagos
          2023 was everything and more.
        </p>
        <div className='throwback__buttons'>
          <a
            target='_blank'
            rel='noreferrer'
            className='throwback__highlights'
            href='https://youtu.be/_estn5TK3tQ'
          >
            Play highlights
            <VideoIcon />
          </a>
          <a
            rel='noreferrer'
            className='throwback__photos'
            href='https://photos.app.goo.gl/64L7bt3vRqNxhESJA'
            target='_blank'
          >
            DevFest Lagos 2023 photos
            <GalleryIcon />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
