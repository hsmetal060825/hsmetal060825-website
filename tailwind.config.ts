
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0B1E3A",
        brandGold: "#D4AF37"
      },
      borderRadius: { "2xl": "1rem" }
    }
  },
  plugins: [],
};
export default config;
