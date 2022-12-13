/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    // see the link
    // https://ant.design/docs/react/faq-cn#css-in-js-%E4%B8%8E-tailwindcss-%E4%BC%98%E5%85%88%E7%BA%A7%E5%86%B2%E7%AA%81
    preflight: false,
  },
}
