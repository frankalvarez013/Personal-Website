import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-blue': 'linear-gradient(180deg, #97AEFF 0%, #FFDBCA 100%)',
        stack:
          "url('/LowTier.svg'), url('/MiddleTier.svg'), url('/HighTier.svg')",
      },
      backgroundSize: {
        fullW: '100% Auto',
      },
    },
  },
  plugins: [],
}
export default config
