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
        sites: allContentfulHistoricalSite(sort: { title: ASC }) {
          edges {
            node {
              id
              title
              slug
              image {
                gatsbyImageData
                description
              }
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
            next {
              slug
              title
            }
          }
        }
        figures: allContentfulHistoricalFigure(sort: { title: ASC }) {
          edges {
            node {
              id
              title
              designation
              slug
              image {
                gatsbyImageData
                description
              }
              body {
                raw
                references {
                  ... on ContentfulImage {
                    contentful_id
                    altText
                    photo {
                      gatsbyImageData
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
            next {
              slug
              title
            }
          }
        }
        histories: allContentfulInterview(sort: { title: ASC }) {
          edges {
            node {
              id
              title
              slug
              image {
                gatsbyImageData
                description
              }
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
            next {
              slug
              title
            }
          }
        }
        tags: allContentfulTag(sort: { title: ASC }) {
          edges {
            node {
              id
              title
              slug
              historical_figure {
                id
                title
                slug
                brief
              }
              historical_site {
                id
                title
                slug
                brief
              }
              interview {
                id
                title
                slug
                brief
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
  result.data.sites.edges.forEach(({ node, next }) => {
    const path = `historical-sites/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/components/article.js`),
      context: { node, next },
    })
  })

  // Create page for each Historical Figure
  result.data.figures.edges.forEach(({ node, next }) => {
    const path = `historical-figures/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/components/article.js`),
      context: { node, next },
    })
  })

  // Create page for each Oral History
  result.data.histories.edges.forEach(({ node, next }) => {
    const path = `oral-histories/${node.slug}`
    createPage({
      path,
      component: internalPath.resolve(`src/components/article.js`),
      context: { node, next },
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
}
