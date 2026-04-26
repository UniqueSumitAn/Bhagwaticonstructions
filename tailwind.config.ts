import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ink: "var(--ink)",
        bone: "var(--bone)",
        sand: "var(--sand)",
        muted: "var(--muted)",
        line: "var(--line)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 9vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 6rem)", { lineHeight: "1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widerer: "0.18em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
