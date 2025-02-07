/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-gradient': "linear-gradient(324.93deg, #007AFF 0.74%, #0F70DA 100%)",
        'additional-gradient': "linear-gradient(324.93deg, #0F70DA 0.74%, #007AFF 100%)",
      },
      colors: {
        'blue': '#007AFF',
        'border': '#D1D1D1',
        'dark': '#1D1D1D',
        'dark-gray': '#2D3748',
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {
        'ss': '10px',
        'xxs': '14px',
        'xsm': '18px',
        '28': '28px',
      },
      lineHeight: {
        '9.5': '38px',
        '12': '42px',
      },
      screens: {
        'mobile': '430px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop-small': '1280px',
        'desktop-big': '1680px',
      },
      spacing: {
        '2.75': '11px',
        '82': '82px',
        '98': '98px',
        '130': '130px',
        '162': '162px',
        '196': '196px',
        '370': '370px',
        '450': '450px',
        '554': '554px',
        '593': '593px',
        'fill': '-webkit-fill-available',
      },
    },
  },
  plugins: [],
}

