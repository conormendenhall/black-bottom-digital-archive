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
  const internalPath = require('path')

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
        themes: allContentfulTheme {
          edges {
            node {
              id
              title
              slug
              image {
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
              body {
                json
              }
              tags {
                id
                name
                slug
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
  result.data.sites.edges.forEach(({ node }) => {
    const path = `historical-sites/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/pages/historical-site.js`),
      context: node,
    })
  })

  // Create page for each Tag
  result.data.tags.edges.forEach(({ node }) => {
    const path = `tags/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/pages/tag.js`),
      context: node,
    })
  })

  // Create page for each Interview
  result.data.interviews.edges.forEach(({ node }) => {
    const path = `interviews/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/pages/interview.js`),
      context: node,
    })
  })

  // Create page for each theme
  result.data.themes.edges.forEach(({ node }) => {
    const path = `themes/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/pages/theme.js`),
      context: node,
    })
  })
}
