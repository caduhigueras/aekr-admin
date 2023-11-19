import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#343957',
        'secondary': '#647DFC',
        'dark': '#242634',
        'dark2': '#1d1f2d',
        'lightblue': '#03a9f5',
        'light': '#e2dfdf',
        'white': '#ffffff',
        'blue': '#5873FE',
        'dark-gray': '#29292a',
        'light-gray': '#F8F9FE',
        'transparent': 'transparent',
      },
      zIndex: {
        '1': '1',
        '99': '99',
        '999': '999',
      },
      boxShadow: {
        'aekrbox': '0 5px 20px 0 rgba(0,0,0,0.1)]'
      },
    },
  },
  plugins: [],
}
export default config
