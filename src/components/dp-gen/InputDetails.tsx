import { Textfield, Button } from '../shared';
import Image from 'next/image';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { fileToBase64 } from '@/utils/helper';
import { useDpObj } from '@/context/dp-context';

type TFormValue = {
  name: string;
  hook: string;
};

export const InputDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setDpDataObj } = useDpObj();
  const [picture, setPicture] = React.useState<string>('');
  const [formValues, setFormValues] = React.useState<TFormValue>({
    name: '',
    hook: '',
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const _preview = await fileToBase64(file);
      setPicture(_preview as string);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { ...formValues, picture };
    setDpDataObj(data);
    router.push(`${pathname}/result`);
  };

  return (
    <section className='input-details'>
      <div className='container'>
        <div className='flex-wrapper'>
          <div className='col'>
            <h3 className='title'>Input your details</h3>
            <form className='form-wrapper' onSubmit={handleSubmit}>
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

                <Textfield
                  id='name'
                  value={formValues.name}
                  className='text-field'
                  placeholder='Your Name'
                  onChange={handleChange}
                />
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
                  <input type='file' accept='image/*' name='picture' onChange={handleFileChange} />

                  <div className='drop-wrapper'>
                    {picture && (
                      <div className='img-wrapper'>
                        <Image
                          src={picture}
                          alt='picture'
                          width={100}
                          height={100}
                          priority={true}
                        />
                        <div className='text'>Change</div>
                      </div>
                    )}
                    {!picture && (
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
                    )}
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

                <Textfield
                  id='hook'
                  value={formValues.hook}
                  className='text-field'
                  placeholder='Input hook'
                  onChange={handleChange}
                />
              </div>

              <Button fullWidth={true} label='Generate' size='lg' animate={true} type='submit' />
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
