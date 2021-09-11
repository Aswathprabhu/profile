module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      'semi-bold': ['semi-bold', 'sans-serif'],
      'bold': ['bold', 'sans-serif']
    },
    minHeight: {
      '1/2': '50%'
    },
    colors: {
      'green-100': '#179b9e',
      'green-200': '#243b3b',
      'yellow-100': '#fcd739',
      'white': '#eff0f2',
      'ghost-white': '#fff',
      'black': '#000'
    },
    extend: {
      inset: {
        18: '4.5rem'
      },
      spacing: {
        112: '28rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
