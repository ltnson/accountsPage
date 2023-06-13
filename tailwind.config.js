/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cyan: "#F2F7FF",
      "cyan-paraph": "#80A2D9",
      white: "rgb(255 255 255)",
      red: "#FF1C03",
      "t-light": "#9DA7B9",
      "t-neutral": "#999999",
      "t-blue": "#5E90F0",
    },

    extend: {
      backgroundImage: {
        login: 'url("./src/assets/SVG/loginSVG/right-bg.svg")',
      },
      backgroundColor: {
        "login-page": "#f8f9fa",
        "account-page": "#D8E0ED",
        "blue/10": "#EDF3FE",
      },
    },
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [],
};
