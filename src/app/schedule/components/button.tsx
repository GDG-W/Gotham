'use client';

import React from 'react';
import styles from '../styles/Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  variant?: 'default' | 'outlined';
  externalStyles?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  textColor,
  borderColor,
  variant = 'default',
  className,
  externalStyles,
  ...props
}) => {
  const buttonStyle = {
    backgroundColor: variant === 'default' ? backgroundColor : 'transparent',
    color: textColor,
    borderColor: borderColor,
  };

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className || ''} ${externalStyles || ''}`}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
};
