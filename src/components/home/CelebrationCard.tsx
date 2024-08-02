'use client';

import { classNames } from '@/utils/classNames';
import { cva } from 'class-variance-authority';
import { componentSize } from '../shared/types';

export interface CelebrationCardProps {
  text: string;
  size?: componentSize;
  state?: 'green' | 'blue' | 'white';
}

const celebrationCardVariants = cva(`item-card`, {
  variants: {
    state: {
      green: 'item-card-green',
      blue: 'item-card-blue',
      white: 'item-card-white',
    },
    size: {
      sm: 'item-card-sm',
      md: 'item-card-md',
      lg: 'item-card-lg',
    },
  },
  defaultVariants: {
    state: 'white',
    size: 'sm',
  },
});

const CelebrationCard: React.FC<CelebrationCardProps> = ({ text, size, state }) => {
  return (
    <div
      className={classNames(celebrationCardVariants({ size, state }))}
      role='region'
      aria-label='Celebration Card'
    >
      <div className='text-containers' aria-live='polite'>
        <p>{text}</p>
        <span aria-hidden='true'>E</span>
      </div>
      <div className='bottom-icon-container' aria-hidden='true'>
        pp
      </div>
    </div>
  );
};

export default CelebrationCard;
