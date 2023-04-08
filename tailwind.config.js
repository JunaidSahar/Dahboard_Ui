/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",
  "./app.vue",
];
export const theme = {
  extend: {
    display: ["group-hover"],
    colors: {
      transparent: "transparent",
      black: "#141414",
      balticSea: "#262626",
      white: "#FFFFFF",
      catskillWhite: "#F2F4F8",
      bluish: "#0B67B2",
      lightGray: "#F2F2F2",
      doveGrey: "#6D6D6D",
      vampireGrey: "#525252",
      granite: "#808080",
      success: "#00C851",
      danger: "#FF5252",
      warning: "#FFEB3B",
      info: "#2196F3",
      light: "#F2F2F2",
      "oslo-Grey": "#8e8e8e",
      platinum: "#e4e4e4",
      gainsBoro: "#DCDCDC",
    },
    screens: {
      xs: "312px",
      // => @media (min-width: 312px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
// export const plugins = [require("@tailwindcss/line-clamp")];
