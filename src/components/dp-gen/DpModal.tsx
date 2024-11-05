import React from 'react';
import Image from 'next/image';
import { Button } from '../shared';
import { generateXNumberArray } from '../../utils/helper';

interface IDpModalProps {
  open: boolean;
  onClose: () => void;
  handleDownload: () => void;
  handleXShare: () => void;
  isLoading: boolean;
  userName: string;
}

const stepLists = [
  {
    title: 'Download your DP',
    details: 'We have a surprise for you in step 3!',
  },
  {
    title: 'Tweet it on X',
    details: 'Make sure to use #devFestLagos2024 #devFestLagos',
  },
  {
    title: 'You stand a chance of getting extra merch at DevFest Lagos 2024',
    details: 'Your tweeted DP is your evidence🌝',
  },
];

export const DPModal: React.FC<IDpModalProps> = ({
  open,
  onClose,
  handleDownload,
  handleXShare,
  isLoading,
  userName,
}) => {
  const [step, setStep] = React.useState<number>(1);

  React.useEffect(() => {
    // check if user has downloaded
    const initalStep = localStorage.getItem(userName);
    if (initalStep) setStep(Number(initalStep));
  }, []);

  if (!open) return null;

  const handleNext = () => setStep(step + 1);

  return (
    <div className='dp_modal_overlay' onClick={onClose}>
      <div className='modal_container' onClick={(e) => e.stopPropagation()}>
        <div onClick={onClose} className='close_icon'>
          <Image
            src='/images/icon/rafiki.svg'
            alt='close icon'
            quality={100}
            width={35}
            height={35}
          />
        </div>
        <div className='modal_content'>
          <h5 className='title'> Share your DP in 3 easy steps!</h5>
          <div className='step_indicators'>
            {generateXNumberArray(3).map((_, id) => (
              <span
                key={id}
                onClick={() => setStep(id)}
                className={`line ${id <= step ? 'active' : ''}`}
              ></span>
            ))}
          </div>

          <div className='bg_img'>
            <Image
              src='/images/svg/rafiki.svg'
              alt='Download your devFest lagos DP and share'
              quality={100}
              fill
            />
          </div>

          <div className={`step_procedure ${step === 2 ? 'text_center' : ''}`}>
            <h6 className='title'>
              {step + 1}. {stepLists[step].title}
            </h6>

            {step < 2 && (
              <div className='btn-wrapper'>
                {step === 0 && (
                  <Button
                    size='sm'
                    isLoading={isLoading}
                    onClick={() => {
                      handleDownload();
                      if (!isLoading) {
                        handleNext();
                      }
                    }}
                    label={
                      <Image
                        src='/images/svg/dark-download-sharp.svg'
                        alt='Magic wand icon'
                        width={28}
                        height={28}
                      />
                    }
                  />
                )}

                {step === 1 && (
                  <Button
                    size='sm'
                    onClick={handleXShare}
                    label={
                      <Image
                        src='/images/svg/dark-x-icon.svg'
                        alt='Magic wand icon'
                        width={28}
                        height={28}
                      />
                    }
                  />
                )}

                <Button
                  onClick={handleNext}
                  size='sm'
                  label={
                    <div className='btn_label'>
                      Next
                      <Image
                        src='/images/svg/next-icon.svg'
                        alt='Magic wand icon'
                        width={28}
                        height={28}
                      />
                    </div>
                  }
                />
              </div>
            )}

            <p className='details'>{stepLists[step].details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
