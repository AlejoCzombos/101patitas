import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF9F00',
        secondary: '#56CFCB',
        gray: '#77787C'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

export default config;
