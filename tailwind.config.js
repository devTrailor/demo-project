/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white": "#fff",
      "primary": "#2D2D2D",
      "secondary": "#F3EFEC",
      "light-gray": "#F3F3F3",
      "light-green": "#D2FBDF",
      "dark-green": "#039856",
    },
    plugins: [],
  }
}