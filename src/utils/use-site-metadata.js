import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            wordPressBackend
          }
        }
      }
    `
  )
  return site.siteMetadata
}