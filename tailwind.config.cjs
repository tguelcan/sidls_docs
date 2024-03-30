/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
//import sidls from 'sidls'
import sidls from './../preset/preset';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/svhighlight/**/*.svelte'],
  theme: {
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
  presets: [sidls]
};
