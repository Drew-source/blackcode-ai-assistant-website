/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main colors
        primary: {
          blue: "#0A2463",
          teal: "#1E91D6",
          DEFAULT: "#5D63FF", // Hugging Face inspired primary
        },
        secondary: {
          orange: "#FF6B35",
          DEFAULT: "#FFD166", // Hugging Face inspired secondary
        },
        neutral: {
          light: "#F5F5F5",
          dark: "#333333",
        },
        // Dark mode colors
        dark: {
          bg: "#1A1C2A",
          card: "#252A41",
          highlight: "#353C5A",
          text: "#EDF2F7",
          muted: "#A0AEC0",
        },
        accent: {
          green: "#00B16A",
          purple: "#7C3AED",
          pink: "#F472B6",
          yellow: "#F59E0B",
        },
        // Semantic text colors with better organization
        text: {
          primary: "#000000", // Pure black for maximum contrast in light mode
          secondary: "#333333", // Very dark gray
          muted: "#555555", // Still dark enough for contrast
          disabled: "#777777", // For disabled text
          inverse: {
            DEFAULT: "#FFFFFF", // White text for dark backgrounds
            muted: "#DDDDDD", // Slightly muted white
          }
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}; 