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
      screens: {
        'sm': '640px',    // Small screens
        'md': '768px',    // Medium screens
        'lg': '1024px',   // Large screens
        'xl': '1280px',   // Extra-large screens
      },
      fontSize: {
      'xs': '.75rem',     // Extra small
      'sm': '.875rem',    // Small
      'base': '1rem',     // Base
      'lg': '1.125rem',   // Large
      'xl': '1.25rem',    // Extra large
      '2xl': '1.5rem',    // 2 Extra large
      '3xl': '1.875rem',  // 3 Extra large
      '4xl': '2.25rem',   // 4 Extra large
      '5xl': '3rem',      // 5 Extra large
      '6xl': '4rem',      // 6 Extra large
    },
    },
  },
  plugins: [],
};
export default config;
