/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#4731D3",
          light_purple: "#B7AAFF",
          gray: "#6B7280",
          hero_title_light: "#AEBCCF",
          hero_title_dark: "#1F2937",
          text_gray: "#6B7280",
          subtitle_gray: "#1F2937",
          title_gray_dark: "#AEBCCF",
          project_category_light: "#3730A3",
          project_category_dark: "#8F88FF",
          project_link_dark: "#8F88FF"
        },
        secondary: {
        },
        background: {
          light: "#ffffff",
          dark: "#252128",
          logo_dark: "#4731D3",
          logo_light: "#EEEBFF"
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
