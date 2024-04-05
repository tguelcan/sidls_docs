/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import sidls from 'sidls';
// import sidls from './../preset/preset';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/svhighlight/**/*.svelte'],
  theme: {
    extend: {
      colors: {
        light: '#f4f4f5',
        primary: '#111927',
        alert: '#ef4444'
      }
    },
    container: {
      center: true,
      screens: {
        '2xl': '768px'
      },
      padding: {
        DEFAULT: '0.5rem',
        md: '0rem'
      }
    },
    fontFamily: {
      sans: ['Geist', ...fontFamily.sans]
    }
  },
  presets: [sidls],
  plugins: [typography]
};
