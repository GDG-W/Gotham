'use client';
import React from 'react';
import Image from 'next/image';
import TicketIcon from '@/assets/icons/ticket.svg'
import DownloadIcon from '@/assets/icons/download.svg'
import TicketQrIcon from '@/assets/icons/ticket-qr.svg'
import VideoIcon from '@/assets/icons/video.svg'
import GalleryIcon from '@/assets/icons/gallery.svg'
import ticketImage from '@/assets/images/ticket.png'
import appMockup1 from '@/assets/images/app-mockup-1.png'
import appMockup2 from '@/assets/images/app-mockup-2.png'
import PopoutLeft from '@/assets/icons/pill-popout-left.svg'
import PopoutRight from '@/assets/icons/pill-popout-right.svg'
import throwbackImage from '@/assets/images/homepage-throwback.png'
import homeHero from '@/assets/images/home-hero.png'
import ArrowLeft from '@/assets/icons/arrow-left.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import Speakers from '@/assets/icons/speakers.svg'
import stayUpdated from '@/assets/images/stay-updated.png'
import generateDp from '@/assets/images/generate-dp.png'
import Talk from '@/components/home/Talk';
import Footer from '@/components/home/Footer';
import FAQs from '@/components/shared/FAQS';

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
          <button className='hero__get-tickets'>
            Get Tickets
            <TicketIcon />
          </button>
          <button className='hero__download-app'>
            Download App
            <DownloadIcon />
          </button>
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
        <button className='tickets__get-tickets'>
          Get Tickets
          <TicketIcon />
        </button>
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
          Throwback to DevFest Lagos '23: Vibes and Tech All the Way
        </h3>
        <p className='throwback__description'>
          Remember the energy? The pictures, the jollof, the pure tech vibes? Last year, we turned
          up and showed out. From inspiring sessions to unforgettable connections, DevFest Lagos
          2023 was everything and more.
        </p>
        <div className='throwback__buttons'>
          <button className='throwback__highlights'>
            Play highlights
            <VideoIcon />
          </button>
          <button className='throwback__photos'>
            DevFest Lagos 2023 photos
            <GalleryIcon />
          </button>
        </div>
      </section>
      <section className='speakers'>
        <div className='speakers__pill'>SPEAKERS</div>
        <div className='speakers__controls'>
          <button className='speakers__button'>
            <ArrowLeft />
          </button>
          <p className='speakers__title'>Expert Speakers</p>
          <button className='speakers__button'>
            <ArrowRight />
          </button>
        </div>
        <p className='speakers__description'>
          We’ve upped the ante this year with 42 speakers, each ready to drop knowledge that will
          leave you with more than just ideas.
        </p>
        <button className='speakers__see-speakers'>
          See all Speakers
          <Speakers />
        </button>
      </section>
      <section className='sponsors'>
        <div className='sponsors__details'>
          <p className='sponsors__pill'>SPONSORS</p>
          <p className='sponsors__title'>It’s Not Set Without Our Sponsors</p>
          <p className='sponsors__description'>
            DevFest Lagos 2023 was lit! But this year, we’re not just doing a repeat—we’re raising
            the bar higher with their support.
          </p>
        </div>
      </section>
      <section className='talks'>
        <p className='talks__pill'>TALKS</p>
        <p className='talks__title'>Options For Everyone</p>
        <p className='talks__description'>
          At DevFest Lagos 2024, we’re serving up a full menu of talks and session to match every
          taste. No matter what you’re into, there’s something for you.
        </p>
        <div className='talks__dates'>
          <button className='talks__date'>Day 1 - Friday, Nov 15</button>
          <button className='talks__date active'>Day 2 - Saturday, Nov 16</button>
        </div>
        {Array.from({ length: 6 }).map((_, index) => (
          <Talk
            startTime='1:50PM'
            endTime='2:30PM'
            room='ROOM 2'
            speakerName='Adora Nwodo'
            speakerImage='https://picsum.photos/200/300'
            title='The future of design-to-code workflows'
            description='Lorem ipsum dolor sit amet consectetur. Elit porta nunc morbi risus egestas sit massa lacinia facilisis. Molestie tristique iaculis tellus sem. Mi risus mauris aenean nibh turpis interdum ultrices sem quisque.'
            hideLine={index === 5}
          />
        ))}
      </section>
      <section className='mobile-app'>
        <Image
          src={appMockup1}
          alt='App Mockup'
          width={303}
          height={450}
          className='mobile-app__mockup-1'
        />
        <Image
          src={appMockup2}
          alt='App Mockup'
          width={303}
          height={450}
          className='mobile-app__mockup-2'
        />
        <PopoutLeft className='mobile-app__popout-left' />
        <PopoutRight className='mobile-app__popout-right' />
        <p className='mobile-app__pill'>MOBILE APP</p>
        <p className='mobile-app__title'>No Loose Guard! Get Notified First!</p>
        <p className='mobile-app__description'>
          The DevFest Lagos mobile app is your inside connect—real-time updates, booking sessions,
          and more, all in your pocket keeping you two steps ahead.
        </p>
        <button className='mobile-app__download-app'>
          Download the mobile app
          <DownloadIcon />
        </button>
      </section>
      <FAQs />
      <section className='gdg-lagos'>
        <div className='gdg-lagos__content'>
          <p className='gdg-lagos__pill'>GDG LAGOS</p>
          <h3 className='gdg-lagos__title'>Stay updated on GDG Lagos activities</h3>
          <p className='gdg-lagos__description'>
            Get updated on all our activities, events , webinars. Be the first to know what the GDG
            Lagos community is up to.
          </p>
          <button className='gdg-lagos__download-app'>
            Let's go
            <ArrowRight />
          </button>
        </div>
        <Image src={stayUpdated} alt='Speakers taking a selfie with the audience' />
      </section>
      <section className='generate-dp'>
        <Image src={generateDp} alt='Generate dp' />
        <div className='generate-dp__content'>
          <p className='generate-dp__pill'>DP GENERATOR</p>
          <p className='generate-dp__title'>Generate your Devfest Lagos ‘24 DP</p>
          <p className='generate-dp__description'>
            Let everyone know that you will be at Devfest 2024 no matter what. Create your own super
            cool DP
          </p>
          <button className='generate-dp__button'>
            Download the mobile app
            <DownloadIcon />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
