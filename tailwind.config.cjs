/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat"],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2137FF",
          secondary: "#7C7C7A",
          neutral: "#000000",
          "base-100": "#ffffff",
        },
      },
      "light",
      "dark",
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
  },
};
