import { useStaticQuery, graphql } from 'gatsby'

const UseSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            baseUrl
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default UseSiteMetadata
