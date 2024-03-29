/** @type {import('tailwindcss').Config} */
import sidls from "sidls";
import { fontFamily } from "tailwindcss/defaultTheme";

if (process.env.NODE_ENV === 'development') {
  const sidls = require('../preset');
} else {
  const sidls = require('sidls');
}

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "768px",
      },
      padding: {
        DEFAULT: "0.5rem",
        md: "0rem",
      },
    },
    fontFamily: {
      sans: ["Geist", ...fontFamily.sans],
    },

  },
  presets: [sidls],
};
