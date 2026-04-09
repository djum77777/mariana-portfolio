/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E90FF',    // electric blue for accents
          background: '#0D0D0D', // deep black background
          textPrimary: '#E0E0E0', // light grey for text
        },
      },
    },
    plugins: [],
  };