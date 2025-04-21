/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            strong: {
              color: '#fff',
            },
            em: {
              color: '#fff',
            },
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#fff',
            },
            h4: {
              color: '#fff',
            },
            code: {
              color: '#fff',
            },
            blockquote: {
              color: '#fff',
            },
            'ol > li::marker': {
              color: '#fff',
            },
            'ul > li::marker': {
              color: '#fff',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
