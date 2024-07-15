'use client';

import Image from 'next/image';
import { Modal } from '../shared';
import SplitType from 'split-type';
import { useState, useEffect, useRef } from 'react';
import {
  highlightsIntroHeader,
  highlightsHeaderAnimation,
} from '@/utils/animations/homeAnimations';

export const highlightsVideoUrl = 'https://www.youtube.com/embed/_estn5TK3tQ';

export const Highlights = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const highlightsHeaderRef = useRef<HTMLHeadingElement>(null);
  const highlightsIntroHeaderRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const highlightsHeader = SplitType.create('#highlightsHeader');
    highlightsHeaderAnimation(highlightsHeader, highlightsHeaderRef);
    highlightsIntroHeader(highlightsIntroHeaderRef);

    return () => {
      highlightsHeader.revert();
    };
  }, []);

  return (
    <section className='highlights-wrapper'>
      <div className='container'>
        <p className='text-lg' role='heading' aria-level={2} ref={highlightsIntroHeaderRef}>
          Highlights
        </p>
        <h2 className='text-5xl' id='highlightsHeader' ref={highlightsHeaderRef}>
          Highlights From DevFest Lagos &apos;23
        </h2>
        <div className='highlights-img' role='img' aria-label="DevFest Lagos '23 Highlight Video">
          <div
            className='play-icon centered-flex'
            role='presentation'
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src='/images/svg/play-icon.svg'
              alt='Play Video Call to action'
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>
      <Modal
        size='lg'
        isOpen={isModalOpen}
        showCloseIcon={false}
        className='highlights-modal'
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div className='video-iframe-wrapper'>
          <iframe
            src={`${highlightsVideoUrl}?autoplay=1&controls=0`}
            title='2023 DevFest Highlights Video'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            className='w-full video-frame'
          ></iframe>
        </div>
      </Modal>
    </section>
  );
};
