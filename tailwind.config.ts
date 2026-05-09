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
        navy: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a4bafb",
          400: "#7f94f7",
          500: "#6069f1",
          600: "#4e4ae3",
          700: "#3f3bc8",
          800: "#3434a2",
          900: "#2f3281",
          950: "#1c1e4b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
