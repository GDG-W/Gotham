import React from 'react';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';
import Speakers from '@/assets/icons/speakers.svg';
import Talk from '@/components/home/Talk';
import Image from 'next/image';
import appMockup1 from '@/assets/images/app-mockup-1.png';
import appMockup2 from '@/assets/images/app-mockup-2.png';
import PopoutLeft from '@/assets/icons/pill-popout-left.svg';
import PopoutRight from '@/assets/icons/pill-popout-right.svg';
import DownloadIcon from '@/assets/icons/download.svg';
import FAQs from '@/components/shared/FAQS';
import stayUpdated from '@/assets/images/stay-updated.png';
import generateDp from '@/assets/images/generate-dp.png';

/**
 * Only the first three sections of the homepage are being deployed in the initial release
 * so I'm just putting this already built content here which will be moved to the index page.tsx when ready
 *
 * */
const HomepageRemainingContent = () => {
  return (
    <>
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
            key={index}
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
            Let&apos;s go
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
    </>
  );
};

export default HomepageRemainingContent;
