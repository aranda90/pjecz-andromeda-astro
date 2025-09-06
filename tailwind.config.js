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
            h1: { color: theme('colors.gray.700') },
            h2: { color: theme('colors.gray.700') },
            h3: { color: theme('colors.gray.700') },
            h4: { color: theme('colors.gray.700') },
            h5: { color: theme('colors.gray.700') },
            h6: { color: theme('colors.gray.700') },
          },
        },
        dark: {
          css: {
            h1: { color: theme('colors.gray.300') },
            h2: { color: theme('colors.gray.300') },
            h3: { color: theme('colors.gray.300') },
            h4: { color: theme('colors.gray.300') },
            h5: { color: theme('colors.gray.300') },
            h6: { color: theme('colors.gray.300') },
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
