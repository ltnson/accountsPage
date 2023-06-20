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
      "t-neutral/6": "#666666",
      "t-blue": "#5E90F0",
      "t-neutral/d2": "#D2D2D2",
      "t-red100": "#EC7474",

      "t-neutral/DE": "#EBEBEB",
    },

    extend: {
      backgroundColor: {
        "login-page": "#f8f9fa",
        "account-page": "#D8E0ED",
        "blue/10": "#EDF3FE",
        "alpha/4": "rgba(0,0,0,0.4)",
        "neutral/f5": "#F5F5F5",
        "red/F": "#FFF3F4",
        "tag/green10": "#E5FAE8",
      },
    },
    fontFamily: {
      sans: ["Poppins"],
    },
  },
  plugins: [],
};
