import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'], // Use the Latin subset for better compatibility
  weight: ['400', '500', '700'], // Specify the desired font weights
  style: ['normal', 'italic'], // Include normal and italic styles
  variable: '--font-roboto', // Optional: Define a CSS variable for the font
});
