/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          mint: "#47D7AC",
          lilac: "#7C5DC6",
          ink: "#0F172A",
          muted: "#64748B",
          line: "#E2E8F0",
        },
      },
    },
  },
};