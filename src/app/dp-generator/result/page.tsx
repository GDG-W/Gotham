'use client';
import { Button } from '@/components/shared';
import Image from 'next/image';
import React from 'react';
import { useDpObj } from '@/context/dp-context';
import { getRandomFrame } from '@/utils/helper';
import { useRouter } from 'next/navigation';
import { DPModal } from '@/components/dp-gen';
import html2canvas from 'html2canvas-pro';

export default function DPGResult() {
  const frames = ['frame-1', 'frame-2', 'frame-3', 'frame-4'];
  const router = useRouter();
  const { dpDataObj } = useDpObj();
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [frameType, setFrameType] = React.useState<string>(frames[getRandomFrame()]);

  React.useLayoutEffect(() => {
    if (!dpDataObj?.hook || !dpDataObj.name || !dpDataObj.picture) {
      router.push('/dp-generator');
    }
  });

  const handleDownload = () => {
    if (sectionRef.current) {
      const sectionElement = sectionRef.current;
      setIsLoading(true);
      const loadImages = () => {
        const imageElements = Array.from(sectionElement.querySelectorAll('img, svg'));

        return Promise.allSettled<void>(
          imageElements.map((img) => {
            return new Promise<void>((resolve) => {
              if (img instanceof HTMLImageElement || img instanceof SVGImageElement) {
                img.style.objectFit = 'cover';
                img.onload = () => resolve();
                img.dispatchEvent(new Event('load'));
              } else {
                resolve();
              }
            });
          }),
        );
      };

      loadImages().then(() => {
        // All images have loaded, proceed to download
        html2canvas(sectionElement, { scale: 4, useCORS: true }).then((canvas) => {
          // maximum quality = 1
          const image = canvas.toDataURL('image/png', 1.0);

          // Create a download link
          const downloadLink = document.createElement('a');
          downloadLink.href = image;
          downloadLink.download = `${dpDataObj?.name}-devfest-lagos-2024.png`;
          downloadLink.click();
          localStorage.setItem(dpDataObj?.name as string, `1`);
          setIsLoading(false);
          setShowModal(true);
        });
      });
    }
  };

  const handleClose = () => setShowModal(false);

  const handleXShare = () => {
    const text = '#devFestLagos2024 #devFestLagos';
    const url = 'https://devfestlagps.com/dp-generator';
    localStorage.setItem(dpDataObj?.name as string, `2`);
    const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
    setShowModal(true);
  };

  return (
    <>
      <section className='viola-section google_sans'>
        <div className='generate-wrapper'>
          <div className='container'>
            <div className='header-text'>
              <p className='sub'>Viola✨</p>
              <h3 className='title'>Here’s your DP</h3>
            </div>

            <div className='frame-wrapper'>
              <div ref={sectionRef} className={`dp-frame ${frameType}`}>
                <div className='row r1'>
                  <div className='col'>
                    <div className='in-col ic-1 box-1'>
                      <div className='text'>{dpDataObj?.hook}</div>
                      <div className='arrow'>
                        <Image src='/images/png/arrow.png' alt='arrow icon' fill />
                      </div>

                      <div className='ellipses'>
                        <Image src='/images/png/elipses.png' alt='ellipse icon' fill />
                      </div>

                      <div className='double-quotes'>
                        <Image src='/images/png/double-quotes.png' alt='double quotes icon' fill />
                      </div>

                      <div className='forward-slash'>
                        <Image
                          src='/images/png/forward-slashes.png'
                          alt='forward slash icon'
                          fill
                        />
                      </div>
                    </div>
                    <div className='in-col ic-2 box-2'>
                      <div className='name-text'>
                        {dpDataObj?.name}
                        <br />
                        <span>WILL BE AT</span>
                      </div>
                    </div>
                  </div>

                  {/* Picture center */}
                  <div className='col box-3'>
                    <div className='img-frame rounded-rectangle'>
                      <Image
                        src={dpDataObj?.picture as string}
                        alt={dpDataObj?.name as string}
                        fill
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
                <div className='row r2'>
                  <div className='col box-4'>
                    <div className='logo'>
                      <Image
                        src={'/images/png/devfest-lg-logo.png'}
                        alt='DevFest Lagos Logo'
                        fill
                      />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='in-col ic-1 box-5'>
                      <div className='schedule-text'>
                        <small className='name'>Date</small>
                        <div className='value'>15 - 16th Nov</div>
                      </div>
                    </div>
                    <div className='in-col ic-2 box-6'>
                      <div className='schedule-text'>
                        <small className='name'>Venue</small>
                        <div className='value'>Landmark Event Center</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row r3'>
                  <div className='masked'>
                    <Image src='/images/png/buildings.png' alt='buildings in cities' fill />
                  </div>
                  <div className='col box-7'></div>
                  <div className='col box-8'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='function-wrapper'>
          <div className='container'>
            <div className='btn-wrapper'>
              <Button
                size='sm'
                onClick={() => setFrameType(frames[getRandomFrame()])}
                label={
                  <Image
                    src='/images/icons/magic-wand.svg'
                    alt='Magic wand icon'
                    width={28}
                    height={28}
                  />
                }
              />
              <Button
                size='sm'
                isLoading={isLoading}
                onClick={handleDownload}
                label={
                  <Image
                    src='/images/icons/download-sharp.svg'
                    alt='Magic wand icon'
                    width={28}
                    height={28}
                  />
                }
              />
              <Button
                onClick={() => setShowModal(true)}
                size='sm'
                label={
                  <Image
                    src='/images/icons/share.svg'
                    alt='Magic wand icon'
                    width={28}
                    height={28}
                  />
                }
              />
            </div>
          </div>
        </div>
      </section>

      <DPModal
        open={showModal}
        onClose={handleClose}
        userName={dpDataObj?.name as string}
        isLoading={isLoading}
        handleXShare={handleXShare}
        handleDownload={handleDownload}
      />
    </>
  );
}
