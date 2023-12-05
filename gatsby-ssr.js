const React = require('react')
// const Layout = require("./src/components/layout")

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' })
}

// Wraps every page in a component
// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }
