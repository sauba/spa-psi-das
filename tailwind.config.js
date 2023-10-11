/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'gothamrounded-book': ['gothamrounded-book'],
        'gothamrounded-medium': ['gothamrounded-medium'],
        'snowdrop-regular': ['snowdrop-regular'],
        'allura': ['allura', 'cursive'],
        'athiti': ['athiti', 'sans-serif'],
        'bad-script': ["Bad Script", 'cursive'],
        'castoro-titling': ["Castoro Titling", 'cursive'],
        'caveat': ['Caveat', 'cursive'],
        'comforter': ['Comforter', 'cursive'],
        'david-libre': ["David Libre", 'serif'],
        'inspiration': ['inspiration', 'cursive'],
        'instrument-serif': ['Instrument Serif', 'serif'],
        'julius-sans-one': ["Julius Sans One", 'sans-serif'],
        'jura': ['jura', 'sans-serif'],
        'mate-sc': ["Mate SC", 'serif'],
        'meddon': ['Meddon', 'cursive'],
        'poiret-one': ["Poiret One", 'cursive'],
        'pt-mono': ["Pt Mono", 'monospace'],
        'reenie-beanie': ["Reenie Beanie", 'cursive'],
        'Shadows-into-light-two': ["Shadows Into Light Two", 'cursive'],
        'zeyada': ['Zeyada', 'cursive']
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-fast': 'ping 0.75s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 2s infinite ease-in-out',
        'bounce-personal': 'bounce 0.5s cubic-bezier(.07,.93,.93,.06) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'wiggle-stop': 'wiggle 3s ease-in-out',
        'wiggle-shrink': 'wiggle-shrink 6s ease-in-out infinite',
        'wiggle-shrink-slow': 'wiggle-shrink 9s ease-in-out infinite',
        'surf': 'surf 5s ease-in-out infinite',
        'surf-snap-left': 'surf-snap-left 2s ease-in-out infinite',
        'surf-snap-right': 'surf-snap-right 2s ease-in-out infinite',
        'surf-skew': 'surf-skew 3s ease-in-out infinite',
        'surf-inverted': 'surf-inverted 6s ease-in-out infinite',
        'skew': 'skew 5s ease-in-out infinite',
        'skew-stop': 'skew 0.5s ease-in-out',
        'skew-complete': 'skew-complete 2s ease-in-out infinite',
        'pulse-slow': 'pulse 200s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow-stop': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1)',
      },
      keyframes: {
        'pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5}
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'wiggle-shrink': {
          '0%, 100%': { transform: 'rotateY(-90deg)' },
          '50%': { transform: 'rotateY(90deg)' },
        },
        'surf': {
          '0%, 100%': { transform: 'rotate(-180deg)'},
          '50%': { transform: 'rotate(360deg)' },
        },
        'surf-snap-left': {
          '0%, 100%': { transform: 'rotate(-90deg)'},
          '50%': { transform: 'rotate(90deg)' },
        }
        ,
        'surf-snap-right': {
          '0%, 100%': { transform: 'rotate(0deg)'},
          '50%': { transform: 'rotate(-180deg)' },
        },
        'surf-inverted': {
          '0%, 100%': { transform: 'rotateY(-360deg)' },
          '50%': { transform: 'rotateY(360deg)' },
        },
        'surf-skew': {
          '0%, 100%': { transform: 'skewY(-15deg)' },
          '50%': { transform: 'skewY(15deg)' },
        },
        'skew': {
          '0%, 100%': { transform: 'skew(-3deg)' },
          '50%': { transform: 'skew(180deg)' },
        },
        'skew-complete': {
          '0%, 100%': { transform: 'skewY(-360deg)' },
          '50%': { transform: 'skewY(15deg)' }
        }
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
