import localFont from 'next/font/local';

export const GeneralSans = localFont({
  src: [
    {
      path: '../fonts/general-sans/GeneralSans-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/general-sans/GeneralSans-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/general-sans/GeneralSans-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/general-sans/GeneralSans-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-generalSans',
});

export const GoogleSans = localFont({
  src: [
    {
      path: '../fonts/google-sans/ProductSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/google-sans/ProductSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/google-sans/ProductSans-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-googleSans',
});
