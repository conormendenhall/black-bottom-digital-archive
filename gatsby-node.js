/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const path = require('path')

  // Query for entries to use in creating pages
  const result = await graphql(
    `
      query {
        sites: allContentfulHistoricalSite {
          edges {
            node {
              id
              title
              slug
              abstract {
                id
                abstract
              }
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each historical site
  const historicalSiteComponent = path.resolve(`src/pages/historical-site.js`)
  result.data.sites.edges.forEach(({ node }) => {
    const path = 'historical-sites/' + node.slug
    createPage({
      path,
      component: historicalSiteComponent,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: node,
    })
  })
}
