/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,}"],
  theme: {
    extend: {
      backgroundImage: {
        '1': "url('/public/images/image01.png')",
        '2': "url('/public/images/image02.png')",
        '3': "url('/public/images/image03.png')",
      },
      colors: {

        'neutral-black': '#263238',
        'neutral-d-grey': '#4D4D4D',
        'neutral-grey': '#717171',
        'neutral-l-grey': '#89939E',
        'neutral-grey-blue': '#ABBED1',
        'neutral-silver': '#F5F7FA',
        'neutral-white': '#FFF',
        'brand-primary': '#4CAF4F',
        'brand-secondary': '#263238',
        'brand-info': '#2194F3',
        'shade-s-1': '#43A046',
        'shade-s-2': '#388E3B',
        'shade-s-3': '#237D31',
        'shade-s-4': '#1B5E1F',
        'shade-s-5': '#103E13',
        'tint-t-1': '#66BB69',
        'tint-t-2': '#81C784',
        'tint-t-3': '#A5D6A7',
        'tint-t-4': '#C8E6C9',
        'tint-t-5': '#E8F5E9',
        'action-warning': '#FBC02D',
        'action-error': '#E53835',
        'action-success': '#2E7D31',
        

      },
    },
  },
  plugins: [],
}