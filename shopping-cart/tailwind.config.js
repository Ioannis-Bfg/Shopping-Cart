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
        slidein: {
          "0%": {
            opacity: 0,
            filter: "blur(px)",
            transform: "translateX(40vw)",
          },
          "100%": {
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateX(0vw)",
          },
        },
        slideout: {
          "0%": {
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateX(0vw)",
          },
          "100%": {
            opacity: 1,
            filter: "blur(1px)",
            transform: "translateX(40vw)",
          },
        },
      },
      animation: {
        "fade-in": "fade 0.3s ease-out",
        "slide-in": "slidein 0.3s ease-out",
        "slide-out": "slideout 0.4s ease-in forwards",
      },
    },
  },
  plugins: [],
};
