/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './services/themes/**/*.{ts}',
  ],
  theme: {
    extend: {
      screens: {
        tiny: '400px',
        phone: '520px',
        tablet: '640px',
        desktop: '768px',
      },
      maxWidth: {
        max: '888px',
      },
      fontSize: {
        /**
         * Do not override defaults
         */
        tiny: ['0.65rem', '0.75rem'],
      },
      colors: {
        /**
         * Global colors
         */
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        /**
         * SJ colors
         */
        'sj-yellow': '#ff0',
        'sj-blue': '#0066fe',
        /**
         * CoiW colors
         */
        'coiw-blue': '#202046',
        'coiw-purple': '#383476',
        'coiw-gold': '#D8B52A',
      },
      backgroundImage: {
        /**
         * CoiW images
         */
        // 'coiw-banner-1': '/backdrops/coiw_banner_1.png',
        // 'coiw-banner-2': '/backdrops/coiw_banner_2.png',
        // 'coiw-banner-3': '/backdrops/coiw_banner_3.png',
        // 'coiw-banner-4': '/backdrops/coiw_banner_4.png',
      },
    },
  },
  plugins: [],
};
