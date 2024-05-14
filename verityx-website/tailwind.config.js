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
        md: ["1.3rem"],
        lg: ["1.75rem"],
        "2xl": ["2.375rem"],
        "3xl": ["3.125rem"],
        "mobile-sm": ["0.75rem"],
        "mobile-base": ["0.875rem"],
        "mobile-md": ["1rem"],
        "mobile-lg": ["1.3rem"],
        "mobile-2xl": ["1.5rem"],
        "mobile-3xl": ["2rem"],
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
