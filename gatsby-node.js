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
              historicalSiteImage {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
              tags {
                id
                name
                slug
              }
            }
          }
        }
        events: allContentfulEvent {
          edges {
            node {
              id
              title
            }
          }
        }
        tags: allContentfulTag {
          edges {
            node {
              id
              name
              slug
              historical_site {
                id
                title
                slug
              }
              place {
                id
                name
              }
              interview {
                id
                title
              }
              event {
                id
                title
              }
            }
          }
        }
        interviews: allContentfulInterview {
          edges {
            node {
              id
              title
              slug
              text {
                text
              }
              interviewAudio {
                title
                file {
                  url
                  contentType
                }
              }
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    let errorMessage = result.errors.join(' ')
    reporter.panicOnBuild(`Error while running GraphQL query: ${errorMessage}`)

    return
  }

  // Create page for each Historical Site
  const historicalSitePageComponent = path.resolve(
    `src/pages/historical-site.js`
  )
  result.data.sites.edges.forEach(({ node }) => {
    const path = `historical-sites/${node.slug}`
    createPage({
      path,
      component: historicalSitePageComponent,
      context: node,
    })
  })

  // Create page for each Tag
  const tagPageComponent = path.resolve(`src/pages/tag.js`)
  result.data.tags.edges.forEach(({ node }) => {
    const path = `tags/${node.slug}`
    createPage({
      path,
      component: tagPageComponent,
      context: node,
    })
  })

  // Create page for each Interview
  const interviewPageComponent = path.resolve(`src/pages/interview.js`)
  result.data.interviews.edges.forEach(({ node }) => {
    const path = `interviews/${node.slug}`
    createPage({
      path,
      component: interviewPageComponent,
      context: node,
    })
  })
}
