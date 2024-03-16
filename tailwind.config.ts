import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#1FA6A6",
        slate: "#1F2937",
      },
    },
  },

  darkMode: "class",

  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      prefix: "nextui", // prefix for themes variables
      defaultTheme: "dark", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      themes: {
        light: {
          colors: {
            primary: "#1FA6A6",
            foreground: "#f1f5f9",
          },
        },
      },
    }),
  ],
};
export default config;
