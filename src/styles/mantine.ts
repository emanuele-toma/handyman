import { createTheme } from '@mantine/core';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export const handymanTheme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary: [
      '#e6f1ff',
      '#cddfff',
      '#9abcff',
      '#6397ff',
      '#3677ff',
      '#1863ff',
      '#0059ff',
      '#004ae5',
      '#0042cd',
      '#0038b6',
    ],
  },
  fontFamily: `${rubik.style.fontFamily}, sans-serif`,
});
