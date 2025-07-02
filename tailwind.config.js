/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': 'var(--bg-main)', // #0B0C17
        'bg-container': 'var(--bg-container)', // #1B1D2B
        'text-primary': 'var(--text-primary)', // #FFFFFF
        'text-secondary': 'var(--text-secondary)', // #B0B0B0
        'text-muted': 'var(--text-muted)', // #777D8E
        'button-primary-bg': 'var(--button-primary-bg)', // #6358FF
        'button-primary-hover': 'var(--button-primary-hover)', // #7F74FF
        'badge-rating-bg': 'var(--badge-rating-bg)', // #F5C518
        'highlight-glow': 'var(--highlight-glow)', // #7488FF
        'icon-color': 'var(--icon-color)', // #3E3F4D
        'overlay-black': 'var(--overlay-black)', // rgba(0, 0, 0, 0.4)
      },
    },
  },
  plugins: [],
}
