
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { brandBlue: "#0B1E3A", brandGold: "#D4AF37" },
      borderRadius: { "2xl": "1rem" },
      boxShadow: { soft: "0 12px 24px rgba(0,0,0,0.08)" }
    }
  },
  plugins: [],
};
export default config;
