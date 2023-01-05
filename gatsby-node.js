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
        events: allContentfulEvent {
          edges {
            node {
              id
              title
              slug
              dateAndTime
              body {
                raw
              }
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
              tags {
                id
                title
                slug
              }
              internal {
                type
              }
            }
          }
        }
        sites: allContentfulHistoricalSite {
          edges {
            node {
              id
              title
              slug
              body {
                raw
              }
              bibliography {
                childMarkdownRemark {
                  html
                }
              }
              tags {
                id
                title
                slug
              }
              internal {
                type
              }
            }
          }
        }
        figures: allContentfulHistoricalFigure {
          edges {
            node {
              id
              title
              slug
              body {
                raw
                references {
                  ... on ContentfulImage {
                    contentful_id
                    altText
                    photo {
                      gatsbyImageData(width: 1000)
                    }
                    imageCaption {
                      imageCaption
                    }
                    __typename
                  }
                }
              }
              bibliography {
                childMarkdownRemark {
                  html
                }
              }
              tags {
                id
                title
                slug
              }
              internal {
                type
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
              body {
                raw
              }
              audio {
                id
                title
                file {
                  url
                  contentType
                }
              }
              transcript {
                id
                title
                file {
                  url
                }
              }
              tags {
                id
                title
                slug
              }
              internal {
                type
              }
            }
          }
        }
        tags: allContentfulTag {
          edges {
            node {
              id
              title
              slug
              historical_figure {
                id
                title
                slug
              }
              historical_site {
                id
                title
                slug
              }
              interview {
                id
                title
                slug
              }
              theme {
                id
                title
                slug
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
              body {
                raw
              }
              tags {
                id
                title
                slug
              }
              historicalFigures {
                id
                title
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

  // Create page for each Event
  result.data.events.edges.forEach(({ node }) => {
    const path = `events/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/components/event.js`),
      context: node,
    })
  })

  // Create page for each Historical Site
  result.data.sites.edges.forEach(({ node }) => {
    const path = `historical-sites/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/components/historical-site.js`),
      context: node,
    })
  })

  // Create page for each Historical Figure
  result.data.figures.edges.forEach(({ node }) => {
    const path = `historical-figures/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/components/historical-figure.js`),
      context: node,
    })
  })

  // Create page for each Interview
  result.data.interviews.edges.forEach(({ node }) => {
    const path = `interviews/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/components/interview.js`),
      context: node,
    })
  })

  // Create page for each Tag
  result.data.tags.edges.forEach(({ node }) => {
    const path = `tags/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/components/tag.js`),
      context: node,
    })
  })

  // Create page for each Theme
  result.data.themes.edges.forEach(({ node }) => {
    const path = `themes/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/components/theme.js`),
      context: node,
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    })
  }
}
