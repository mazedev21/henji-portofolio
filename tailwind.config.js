/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/data/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans Flex"', 'system-ui', 'sans-serif'],
        mono: ['"Google Sans Code"', 'monospace'],
      },
      colors: {
        surface: 'var(--bg-surface)',
        container: 'var(--bg-container)',
        'container-high': 'var(--bg-container-high)',
        'on-surface': 'var(--text-primary)',
        'on-surface-variant': 'var(--text-secondary)',
        hairline: 'var(--border-hairline)',
        accent: 'var(--accent-blue)',
      },
    },
  },
  plugins: [],
};
