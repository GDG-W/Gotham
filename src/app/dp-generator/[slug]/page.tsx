'use client';

import { Button } from '@/components/shared';
import Image from 'next/image';

// params: { params: { slug: string } }
export default function DPGSlug() {
  return (
    <section className='viola-section'>
      <div className='generate-wrapper'>
        <div className='container'>
          <div className='header-text'>
            <p className='sub'>Viola✨</p>
            <h3 className='title'>Here’s your DP</h3>
          </div>

          <div className='dp-frame frame-4'>
            <div className='row r1'>
              <div className='col'>
                <div className='in-col ic-1 box-1'>
                  <div className='text'>WITH 100% STEEZE,</div>
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
                    Oluwatobi
                    <br />
                    <span>WILL BE AT</span>
                  </div>
                </div>
              </div>

              {/* Picture center */}
              <div className='col box-3'>
                <div className='img-frame rounded-rectangle'>
                  <Image src='/images/png/Tsticks.JPG' alt='dp picture' fill quality={100} />
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
                    <div className='value'>24th Nov</div>
                  </div>
                </div>
                <div className='in-col ic-2 box-6'>
                  <div className='schedule-text'>
                    <small className='name'>Venue</small>
                    <div className='value'>Landmark Even Center</div>
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
