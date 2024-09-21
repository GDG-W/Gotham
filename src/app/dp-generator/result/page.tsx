'use client';
import { Button } from '@/components/shared';
import Image from 'next/image';
import html2canvas from 'html2canvas';
import React from 'react';
import { useDpObj } from '@/context/dp-context';
import { getRandomFrame } from '@/utils/helper';
import { useRouter } from 'next/navigation';

export default function DPGResult() {
  const frames = ['frame-1', 'frame-2', 'frame-3', 'frame-4'];
  const router = useRouter();
  const { dpDataObj } = useDpObj();
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const [frameType, setFrameType] = React.useState<string>(frames[getRandomFrame()]);

  React.useLayoutEffect(() => {
    if (!dpDataObj?.hook || !dpDataObj.name || !dpDataObj.picture) {
      router.push('/dp-generator');
    }
  });

  const handleDownload = () => {
    if (sectionRef.current) {
      const sectionElement = sectionRef.current;

      const loadImages = () => {
        const imageElements = Array.from(sectionElement.querySelectorAll('img, svg'));

        return Promise.allSettled<void>(
          imageElements.map((img) => {
            return new Promise<void>((resolve) => {
              if (img instanceof HTMLImageElement || img instanceof SVGImageElement) {
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
        // All images have loaded, proceed to capture the section with html2canvas
        html2canvas(sectionElement, { scale: 4, useCORS: true }).then((canvas) => {
          // Get the canvas as a data URL with maximum quality
          const image = canvas.toDataURL('image/png', 1.0);

          // Create a download link for the captured image
          const downloadLink = document.createElement('a');
          downloadLink.href = image;
          downloadLink.download = `${name}-devfest-lagos-2024.png`;
          downloadLink.click();
        });
      });
    }
  };

  return (
    <section className='viola-section'>
      <div className='generate-wrapper'>
        <div className='container'>
          <div className='header-text'>
            <p className='sub'>Viola✨</p>
            <h3 className='title'>Here’s your DP</h3>
          </div>

          <div ref={sectionRef} className={`dp-frame ${frameType}`}>
            <div className='row r1'>
              <div className='col'>
                <div className='in-col ic-1 box-1'>
                  <div className='text'>{dpDataObj?.hook}</div>
                  <Image
                    src='/images/icons/Arrow.svg'
                    alt='arrow icon'
                    width={130}
                    height={80}
                    className='arrow'
                  />
                  <Image
                    src='/images/icons/Elipses.svg'
                    alt='ellipse icon'
                    width={140}
                    height={40}
                    className='Ellipses'
                  />
                  <Image
                    src='/images/icons/Opening-double-quotes.svg'
                    alt='double quotes icon'
                    width={107}
                    height={75}
                    className='double-quotes'
                  />
                  <Image
                    src='/images/icons/Double-forward-slashes.svg'
                    alt='forward slash icon'
                    width={119}
                    height={121}
                    className='forward-slash'
                  />
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
                <Image
                  src={'/images/svg/DF24-Logo.svg'}
                  alt='DevFest Lagos Logo'
                  width={300}
                  height={94}
                  className='logo'
                />
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
              size='sm'
              label={
                <Image src='/images/icons/share.svg' alt='Magic wand icon' width={28} height={28} />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
