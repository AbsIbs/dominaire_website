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
      height: {
        128: "32rem",
        256: "64rem",
      },
      fontSize: {
        16: ["1rem"],
        21: ["1.3rem"],
        28: ["1.75rem"],
        38: ["2.375rem"],
        50: ["3.125rem"],
        64: ["4rem"],
        80: ["5rem"],
        100: ["6rem"],
        120: ["7.5rem"],
        140: ["8.75rem"],
        180: ["11.25rem"],
        hero: ["8rem"],
        "mobile-16": ["0.8rem"],
        "mobile-21": ["1rem"],
        "mobile-28": ["1.25rem"],
        "mobile-38": ["1.5rem"],
        "mobile-50": ["1.6rem"],
        "mobile-64": ["1.75rem"],
        "mobile-80": ["2rem"],
        "mobile-100": ["2.5rem"],
        "mobile-120": ["2.75rem"],
        "mobile-140": ["3rem"],
        "mobile-180": ["4rem"],
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
            bg: "#F4F4F4",
            "bg-alt": "#000",
            "text-normal": "#222",
            "text-normal-70": "#00000050",
            "text-alt": "#fff",
            line: "#333",
            primary: "#E9204F",
            surface: "#111",
            onSurface: "#404040",
          },
        },
      },
    }),
    fluid,
  ],
};
