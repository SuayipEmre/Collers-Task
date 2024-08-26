import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        mali: ['var(--font-mali)', 'sans-serif'],
      },
      boxShadow: {
        'white-soft': '0px 0px 15px 0px #FFFFFF12',
        'white-strong': '0px 25px 50px -12px #FFFFFF40',
        'black-soft': '0px 0px 10px 0px #00000012',
        'black-strong': '0px 20px 25px -5px #0000001A',
        'black-light': '0px 0px 6px 0px #00000012',
        'black-medium': '0px 10px 15px -3px #0000001A',
        'black-heavy': '0px 25px 50px -12px #00000040',
      },
      colors: {
        'dark-blue': '#0F172A',
        'custom-gray': '#E2E8F0',
      },
    },
  },
  plugins: [],
};
export default config;
