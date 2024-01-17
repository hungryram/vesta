import { Inter } from 'next/font/google';
import localFont from "next/font/local"
 
export const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--body-font'
});
 
export const headingFont = localFont({
  src: './ChongModernProRegular.otf',
  display: 'swap',
  variable: '--heading-font'
});