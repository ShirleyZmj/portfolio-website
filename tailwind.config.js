/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        fx: "#97A7ED",
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#97A7ED",
        // primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
    },
  },
  plugins: [],
};
