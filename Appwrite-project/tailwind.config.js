/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-short": "ping 0.5s ease-in-out 1",
      },
    },
  },

  plugins: [],
};
