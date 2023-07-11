/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,}"],
  theme: {
    extend: {
      colors: {
        'black': '#263238',
        'd-Grey': '#4D4D4D',
        'grey': '#717171',
        'l-grey': '#89939E',
        'grey-blue': '#ABBED1',
        'silver': '#F5F7FA',
        'white': '#FFFFFF',
        'primary': '#28CB8B',
        'secondary': '#263238',
        'info': '#2194f3',
        'shade-1': '#43A046',
        'shade-2': '#388E3B',
        'shade-3': '#237D31',
        'shade-4': '#1B5E1F',
        'shade-5': '#103E13',
        'tin-1': '#66BB69',
        'tin-2': '#81C784',
        'tin-3': '#A5D6A7',
        'tin-4': '#C8E6C9',
        'tin-5': '#E8F5E9',
        'warning': 'FBC02D',
        'error': '#E53835',
        'success': '#2E7D31',

      },
    },
  },
  plugins: [],
}