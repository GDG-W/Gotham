import { classNames } from '@/utils/classNames';
import type { FieldError } from 'react-hook-form';
import React from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface TextfieldProps {
  id: string;
  className?: string;
  type?: string;
  error?: FieldError | string;
  placeholder?: string;
  required?: boolean;
  [key: string]: any;
}

export const Textfield: React.FC<TextfieldProps> = ({
  id,
  type = 'text',
  placeholder,
  className,
  register,
  error,
  required = false,
  ...rest
}) => {
  const textFieldClassName = classNames('textfield', className);
  const errorId = `${id}-error`;

  return (
    <div className='textfield-wrapper'>
      <input
        type={type}
        className={textFieldClassName}
        id={id}
        name={id}
        tabIndex={0}
        placeholder={placeholder}
        // required={required}
        {...(register ? register(id) : {})}
        aria-required={required}
        aria-label={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...rest}
        {...rest}
      />
      {error && <p className='text-sm text-error'>{error as string}</p>}
    </div>
  );
};
