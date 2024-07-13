import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: '#C92071',
        secondary: '#B5B6F2',
        tertiary: '#991956',
        error: '#EE4266',
        success: '#52CA76',
        warning: '#F6AA1C',
        darkGray: '#1F1F1F',
        darkGray2: '#474747',
        darkGray3: '#666666',
        lightGray: '#8F8F8F',
        lightGray2: '#CCCCCC',
        lightGray3: '#F5F5F5',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}

export default config
