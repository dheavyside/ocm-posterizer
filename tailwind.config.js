/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './services/themes/**/*.ts',
  ],
  theme: {
    extend: {
      screens: {
        'tiny': '400px',
        'phone': '520px',
        'tablet': '640px',
        'desktop': '768px',
      },
      maxWidth: {
        'max': '888px',
      },
      fontSize: {
        'tiny': ['0.65rem', {
          lineHeight: '0.75rem',
        }],
      },
      colors: {
        // Global colors
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        
        // SJ colors
        'sj': {
          neon: '#00f3b8',
          orange: '#FF9900',
        },
        
        // CoiW colors
        'coiw': {
          blue: '#202046',
          purple: '#383476',
          gold: '#D8B52A',
        },
      },
      backgroundImage: {
        // CoiW images - using modern pattern
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
