/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#202124",
        muted: "#5f6368",
        paper: "#ffffff",
        line: "#dadce0",
        accent: "#1a73e8",
        emerald: "#188038"
      }
    }
  },
  plugins: []
};
