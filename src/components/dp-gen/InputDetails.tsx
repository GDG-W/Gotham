import { Textfield, Button } from '../shared';
import Image from 'next/image';

export const InputDetails = () => {
  return (
    <section className='input-details'>
      <div className='container'>
        <div className='flex-wrapper'>
          <div className='col'>
            <h3 className='title'>Input your details</h3>
            <form className='form-wrapper'>
              <div className='input-group'>
                <div className='label-wrapper'>
                  <label> Full name </label>
                  <small>
                    <div className='info-icon'>
                      <Image src='/images/svg/Info.svg' alt='info icon' fill priority={true} />
                    </div>
                    Nickname, first name, how you want it
                  </small>
                </div>

                <Textfield id='name' className='text-field' placeholder='Your Name' />
              </div>

              <div className='input-group'>
                <div className='label-wrapper'>
                  <label> Upload image </label>
                  <small>
                    <div className='info-icon'>
                      <Image src='/images/svg/Info.svg' alt='info icon' fill priority={true} />
                    </div>
                    Preferably in a square resolution
                  </small>
                </div>

                <div className='upload-wrapper'>
                  <input type='file' accept='*/image' />

                  <div className='drop-wrapper'>
                    <div className='text-wrapper'>
                      <div className='upload-icon'>
                        <Image
                          src='/images/svg/upload-df.svg'
                          alt='upload icon'
                          fill
                          priority={true}
                        />
                      </div>
                      <div className='text'>
                        Drag and drop to upload or <span>browse</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='input-group'>
                <div className='label-wrapper'>
                  <label> Hook </label>
                  <small>
                    <div className='info-icon'>
                      <Image src='/images/svg/Info.svg' alt='info icon' fill priority={true} />
                    </div>
                    Press the wand if you’re not creative enough😂
                  </small>
                </div>

                <Textfield id='name' className='text-field' placeholder='Input hook' />
              </div>

              <Button fullWidth={true} label='Generate' size='lg' animate={false} />
            </form>
          </div>
          <div className='sample-dp'>
            <Image src='/images/png/side-frame.png' alt='sample dp' fill />
          </div>
        </div>
      </div>
    </section>
  );
};
