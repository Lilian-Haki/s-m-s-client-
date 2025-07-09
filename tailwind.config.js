/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limegreen: "#b1ec9a",
        aliceblue:"aliceblue",
        primary: "#2E3A59", // Add your custom primary color
        button: "4CAF50  ", // Add your custom secondary color
        background: "F5F7FA   ", // Add your custom background color
        success: "#13DEB9", // Add your custom success color
        text: {
          headings: "#1E1E1E ", // Add your custom primary text color
          subtext: "#6B7280 ", // Add your custom secondary text color
        },
        action: {
          disabledBackground: "rgba(73,82,88,0.12)",
          hoverOpacity: 0.02,
          hover: "#f6f9fc",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "Arial", "sans-serif"],
        roboto: ['Roboto', 'sans-serif'],   
        inter:['inter'],
       },
      fontSize: {
        "2xl": "1.875rem",
        "3xl": "1.5rem",
        "4xl": "1.3125rem",
        "5xl": "1.125rem",
        "6xl": "1rem",
      },
      lineHeight: {
        "2xl": "2.25rem",
        "3xl": "1.75rem",
        "4xl": "1.6rem",
        "5xl": "1.6rem",
        "6xl": "1.2rem",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
      },
    },
  },
  plugins: [],
}
