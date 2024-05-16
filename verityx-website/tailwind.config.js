/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    extract,
  ],
  theme: {
    screens,
    fontSize,
    extend: {
      fontSize: {
        "21": ["1.3rem"],
        "38": ["2.375rem"],
        "50": ["3.125rem"],
        hero: ["4.125rem"],
        "mobile-21": ["1rem"],
        "mobile-38": ["1.5rem"],
        "mobile-50": ["1.75rem"],
        "mobile-hero": ["2.5rem"],
        
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            bg: "#ffffff",
            "bg-alt": "#000",
            "text-normal": "#222",
            "text-normal-70": "#00000050",
            "text-alt": "#fff",
            line: "#ffffff50",
            primary: "#E9204F",
            surface: "#121212",
          },
        },
      },
    }),
    fluid,
  ],
};
