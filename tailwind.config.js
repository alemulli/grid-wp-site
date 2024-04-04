export default {
  presets: [
    // Manage Tailwind Typography's configuration in a separate file.
    require('./tailwind-typography.config.js'),
],
  content: [
    './resources/views/**/*.twig',
    './resources/components/**/*.twig',
    './theme.json',
    './resources/assets/styles/safelist.txt',
    './blocks/**/*.{css,js,twig}',
    './patterns/*.php',
    './resources/assets/scripts/**/*.{css,js}',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [
    require('./theme-provider.js')(require('./theme.json')),
    require('@tailwindcss/typography'),
  ],
}
