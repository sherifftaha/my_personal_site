/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f8f6",
        ink: "#1b2927",
        body: "#4d5e5a",
        muted: "#7c8b87",
        line: "#dbe3e0",
        tint: "#eef5f2",
        mint: "#cdeee4",
        brand: { DEFAULT: "#0f7a66", dark: "#0b6252" },
        plum: "#7a4a6d",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 12px 32px -18px rgba(27, 41, 39, 0.25)",
      },
    },
  },
  plugins: [],
};
