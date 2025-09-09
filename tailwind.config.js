/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.gray.800'),
              fontSize: theme('fontSize.4xl'),
            },
            h2: {
              color: theme('colors.gray.800'),
              fontSize: theme('fontSize.3xl'),
            },
            h3: {
              color: theme('colors.gray.800'),
              fontSize: theme('fontSize.2xl'),
            },
            h4: {
              color: theme('colors.gray.800'),
              fontSize: theme('fontSize.xl'),
            },
            h5: {
              color: theme('colors.gray.800'),
              fontSize: theme('fontSize.lg'),
            },
            h6: {
              color: theme('colors.gray.800'),
              fontSize: theme('fontSize.base'),
            },
          },
        },
        dark: {
          css: {
            h1: {
              color: theme('colors.gray.300'),
              fontSize: theme('fontSize.4xl'),
            },
            h2: {
              color: theme('colors.gray.300'),
              fontSize: theme('fontSize.3xl'),
            },
            h3: {
              color: theme('colors.gray.300'),
              fontSize: theme('fontSize.2xl'),
            },
            h4: {
              color: theme('colors.gray.300'),
              fontSize: theme('fontSize.xl'),
            },
            h5: {
              color: theme('colors.gray.300'),
              fontSize: theme('fontSize.lg'),
            },
            h6: {
              color: theme('colors.gray.300'),
              fontSize: theme('fontSize.base'),
            },
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
