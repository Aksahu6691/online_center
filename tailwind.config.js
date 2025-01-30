import { heroui } from "@heroui/theme";
import tailwindColors from "tailwindcss/colors.js";
import colors from "./src/themes/colors";
import screensSizes from "./src/themes/screensSizes";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...tailwindColors,
      ...colors,
    },
    screens: { ...screensSizes },
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
