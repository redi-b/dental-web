import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-dark': '#07213a',
        'secondary-dark': '#132d44',
        'primary-green': '#22c55e',
        'secondary-green': '#16a34a',
        'secondary-fg': '#c4c2c2',
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1124px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "467px" },

      "min-2xl": { min: "1535px" },
      "min-xl": { min: "1124px" },
      "min-lg": { min: "1023px" },
      "min-md": { min: "767px" },
      "min-sm": { min: "639px" },
    }
  },
  plugins: [],
}
export default config
