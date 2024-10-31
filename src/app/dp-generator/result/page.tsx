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
          downloadLink.download = `${dpDataObj?.name}-devfest-lagos-2024.png`;
          downloadLink.click();
          setIsLoading(false);
        });
      });
    }
  };

  const pictureBgStyle = {
    backgroundImage: ` url(${dpDataObj?.picture})`,
  };

  return (
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

                    <div className='Ellipses'>
                      <Image src='/images/png/elipses.png' alt='ellipse icon' fill />
                    </div>

                    <div className='double-quotes'>
                      <Image src='/images/png/double-quotes.png' alt='double quotes icon' fill />
                    </div>

                    <div className='forward-slash'>
                      <Image src='/images/png/forward-slashes.png' alt='forward slash icon' fill />
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
                  {/* <svg
                    className='img-shape-mask'
                    width='1380'
                    height='2547'
                    viewBox='0 0 1380 2547'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <mask
                      id='path-1-outside-1_2323_5250'
                      maskUnits='userSpaceOnUse'
                      x='-0.5'
                      y='0'
                      width='1380'
                      height='2547'
                      fill='black'
                    >
                      <rect fill='white' x='-0.5' width='1380' height='2547' />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M944.255 1273.38C1168.89 1175.19 1325.86 951.016 1325.86 690.18C1325.86 338.828 1041.03 54 689.681 54C338.328 54 53.5008 338.828 53.5008 690.18C53.5008 951.015 210.474 1175.19 435.106 1273.38C210.474 1371.57 53.5 1595.75 53.5 1856.58C53.5 2207.93 338.328 2492.76 689.68 2492.76C1041.03 2492.76 1325.86 2207.93 1325.86 1856.58C1325.86 1595.75 1168.89 1371.57 944.255 1273.38Z'
                      />
                    </mask>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M944.255 1273.38C1168.89 1175.19 1325.86 951.016 1325.86 690.18C1325.86 338.828 1041.03 54 689.681 54C338.328 54 53.5008 338.828 53.5008 690.18C53.5008 951.015 210.474 1175.19 435.106 1273.38C210.474 1371.57 53.5 1595.75 53.5 1856.58C53.5 2207.93 338.328 2492.76 689.68 2492.76C1041.03 2492.76 1325.86 2207.93 1325.86 1856.58C1325.86 1595.75 1168.89 1371.57 944.255 1273.38Z'
                      fill='black'
                    />
                    <path
                      d='M944.255 1273.38L922.883 1224.49L811.033 1273.38L922.883 1322.27L944.255 1273.38ZM435.106 1273.38L456.479 1322.27L568.329 1273.38L456.479 1224.49L435.106 1273.38ZM1272.5 690.18C1272.5 929.055 1128.79 1134.48 922.883 1224.49L965.628 1322.27C1208.99 1215.89 1379.22 972.976 1379.22 690.18H1272.5ZM689.681 107.36C1011.56 107.36 1272.5 368.298 1272.5 690.18H1379.22C1379.22 309.358 1070.5 0.639999 689.681 0.639999V107.36ZM106.861 690.18C106.861 368.298 367.798 107.36 689.681 107.36V0.639999C308.859 0.639999 0.140793 309.358 0.140793 690.18H106.861ZM456.479 1224.49C250.576 1134.48 106.861 929.055 106.861 690.18H0.140793C0.140793 972.976 170.372 1215.89 413.734 1322.27L456.479 1224.49ZM106.86 1856.58C106.86 1617.71 250.576 1412.28 456.479 1322.27L413.734 1224.49C170.372 1330.87 0.139999 1573.78 0.139999 1856.58H106.86ZM689.68 2439.4C367.798 2439.4 106.86 2178.46 106.86 1856.58H0.139999C0.139999 2237.4 308.858 2546.12 689.68 2546.12V2439.4ZM1272.5 1856.58C1272.5 2178.46 1011.56 2439.4 689.68 2439.4V2546.12C1070.5 2546.12 1379.22 2237.4 1379.22 1856.58H1272.5ZM922.883 1322.27C1128.79 1412.28 1272.5 1617.71 1272.5 1856.58H1379.22C1379.22 1573.79 1208.99 1330.87 965.628 1224.49L922.883 1322.27Z'
                      fill='#FFFAEB'
                      mask='url(#path-1-outside-1_2323_5250)'
                    />
                  </svg> */}

                  {/* User picture */}
                  <div style={pictureBgStyle} className='img-frame rounded-rectangle'></div>

                  {/* <div className='img-frame rounded-rectangle'>
                    <Image
                      src={dpDataObj?.picture as string}
                      alt={dpDataObj?.name as string}
                      fill
                      quality={100}
                    />
                  </div> */}
                </div>
              </div>
              <div className='row r2'>
                <div className='col box-4'>
                  <div className='logo'>
                    <Image src={'/images/png/devfest-lg-logo.png'} alt='DevFest Lagos Logo' fill />
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
              // onClick={handleShareOnX}
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
