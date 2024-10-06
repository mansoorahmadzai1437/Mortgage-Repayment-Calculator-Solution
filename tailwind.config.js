/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Lime: "hsl(61, 70%, 52%)",
        Red: "hsl(4, 69%, 50%)",

        // Neutral
        White: "hsl(0, 0%, 100%)",
        Slate100: "hsl(202, 86%, 94%)",
        Slate300: "hsl(203, 41%, 72%)",
        Slate500: "hsl(200, 26%, 54%)",
        Slate700: "hsl(200, 24%, 40%)",
        Slate900: "hsl(202, 55%, 16%)",
        Slate950: "hsl(202, 55%, 12%)",
      },
      fontFamily: {
        plusJakartaSans: ['"Plus Jakarta Sans"', "sans"],
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};
