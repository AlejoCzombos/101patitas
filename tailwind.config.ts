import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            '50': '#fffcea',
            '100': '#fff4c5',
            '200': '#ffe885',
            '300': '#ffd646',
            '400': '#ffc21b',
            '500': '#ff9f00',//Principal
            '600': '#e27700',
            '700': '#bb5102',
            '800': '#983e08',
            '900': '#7c330b',
            '950': '#481900',
        },
        secondary: {
          '50': '#f2fbfa',
          '100': '#d2f5f1',
          '200': '#a6e9e4',
          '300': '#56cfcb',//Principal
          '400': '#44bdbd',
          '500': '#2b9fa1',
          '600': '#207d81',
          '700': '#1d6568',
          '800': '#1c4f53',
          '900': '#1b4446',
          '950': '#0a2629',
      },

        gray: {
          '50': '#f5f5f6',
          '100': '#e6e6e7',
          '200': '#d0d0d1',
          '300': '#aeaeb2',
          '400': '#86878a',
          '500': '#77787c',//Principal
          '600': '#5b5b5f',
          '700': '#4e4f50',
          '800': '#444546',
          '900': '#3c3c3d',
          '950': '#252527',
        },
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("flowbite/plugin")
  ],
};

export default config;
