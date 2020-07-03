import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.44,
  scaleRatio: 2.15,
  blockMarginBottom: 0.75,
  googleFonts: [
    {
      name: 'Arvo',
      styles: ['400'],
    },
    {
      name: 'Cabin',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Arvo', 'sans-serif'],
  bodyFontFamily: ['Cabin', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,1)',
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography
