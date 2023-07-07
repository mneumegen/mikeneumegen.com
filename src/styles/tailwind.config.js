module.exports = {
  content: ['_site/**/*.html'],
  safelist: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'rgb(0, 243, 152) 2px underline'
            },
          },
        },
      },
    },
  },
  plugins: [
		require('@tailwindcss/typography')
	],
}