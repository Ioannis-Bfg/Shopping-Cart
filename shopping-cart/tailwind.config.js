/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
            filter: "blur(2px)",
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        "fade-in": "fade 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
