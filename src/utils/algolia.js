const figureQuery = `{
  figures: allContentfulHistoricalFigure(
    sort: { order: ASC, fields: title }
  ) {
    edges {
      node {
        id
        title
        slug
        designation
        brief
        internal {
          type
        }
      }
    }
  }
}`

const siteQuery = `{
  sites: allContentfulHistoricalSite(
    sort: { order: ASC, fields: title }
  ) {
    edges {
      node {
        id
        title
        slug
        brief
        internal {
          type
        }
      }
    }
  }
}`

const interviewQuery = `{
  interviews: allContentfulInterview(
    sort: { order: ASC, fields: title }
  ) {
    edges {
      node {
        id
        title
        slug
        brief
        internal {
          type
        }
      }
    }
  }
}`

const figureToAlgoliaRecord = (arr) =>
  arr.map(({ node: { id, internal, ...rest } }) => ({
    objectID: id,
    type: internal.type,
    ...rest,
  }))

const settings = { attributesToSnippet: [`brief:20`] }

const queries = [
  {
    query: figureQuery,
    transformer: ({ data }) => figureToAlgoliaRecord(data.figures.edges),
    indexName: `Figures`,
    settings,
  },
  {
    query: siteQuery,
    transformer: ({ data }) => figureToAlgoliaRecord(data.sites.edges),
    indexName: `Sites`,
    settings,
  },
  {
    query: interviewQuery,
    transformer: ({ data }) => figureToAlgoliaRecord(data.interviews.edges),
    indexName: `Interviews`,
    settings,
  },
]

module.exports = queries
