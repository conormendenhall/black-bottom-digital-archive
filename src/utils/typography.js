import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.44,
  scaleRatio: 2.15,
  blockMarginBottom: 0.75,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['400', '700'],
    },
    {
      name: 'Rockwell',
      styles: ['700'],
    },
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  headerColor: '#000',
  bodyColor: '#000',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography
