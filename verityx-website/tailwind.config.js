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
        16:["1rem"],
        21: ["1.3rem"],
        28: ["1.75rem"],
        38: ["2.375rem"],
        50: ["3.125rem"],
        80: ["5rem"],
        180: ['11.25rem'],
        hero: ["5rem"],
        "mobile-16": ["0.8rem"],
        "mobile-21": ["1rem"],
        "mobile-28": ["1.25rem"],
        "mobile-38": ["1.5rem"],
        "mobile-50": ["1.5rem"],
        "mobile-80": ["2rem"],
        "mobile-180": ["4rem"],
        "mobile-hero": ["2rem"],
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
            bg: "#F4F4F4",
            "bg-alt": "#000",
            "text-normal": "#222",
            "text-normal-70": "#00000050",
            "text-alt": "#fff",
            line: "rgb(229, 231, 235)",
            primary: "#E9204F",
            surface: "#121212",
          },
        },
      },
    }),
    fluid,
  ],
};
