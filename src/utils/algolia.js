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
]

module.exports = queries
