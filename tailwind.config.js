/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
    colors:{
      'gray':'#2f4f4f',
      'cyan':'#1e90ff',
      'semicyan':'#b0e0e6',
      'white':'#fff8dc',
      'snowwhite':'#fffff0',
      'black':'#000000',
      'semiblack':'#e6e6fa',
      'lavender':'#f0f8ff',
    },
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1224px',
      'xl':'679px',
    }
  },
  plugins:[]
}
