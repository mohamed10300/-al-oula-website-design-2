import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E40521",
          darkGray: "#414042",
          mediumGray: "#6D6E71",
          lightGray: "#D1D3D4",
          white: "#FFFFFF",
          navy: "#234D7E",
          sage: "#7DC0A6",
          amber: "#F59D00",
        },
      },
      fontFamily: {
        alexandria: ["var(--font-alexandria)", "sans-serif"],
        kanit: ["var(--font-kanit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
