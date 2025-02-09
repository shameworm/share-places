/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fontFamily: {
          sans: "var(--font-sans)",
          serif: "var(--font-serif)",
          mono: "var(--font-mono)",
        },
        fontSize: {
          xs: "var(--text-xs)",
          sm: "var(--text-sm)",
          base: "var(--text-base)",
          lg: "var(--text-lg)",
          xl: "var(--text-xl)",
          "2xl": "var(--text-2xl)",
          "3xl": "var(--text-3xl)",
          "4xl": "var(--text-4xl)",
          "5xl": "var(--text-5xl)",
          "6xl": "var(--text-6xl)",
        },
        lineHeight: {
          tight: "var(--leading-tight)",
          normal: "var(--leading-normal)",
          relaxed: "var(--leading-relaxed)",
        },
        letterSpacing: {
          tight: "var(--tracking-tight)",
          normal: "var(--tracking-normal)",
          wide: "var(--tracking-wide)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        highlight: "hsl(49, 100%, 90%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
