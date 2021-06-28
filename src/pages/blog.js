import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from '../components/postCard';

const BlogPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle} social={social}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <div className="post-content pb-0">
        <header className="post-content-header">
          <h1 className="post-content-title">/dev/null</h1>
        </header>
        <p className="post-content-excerpt">
          Sometimes I Write, Therefore I Am... about dev, learning and other</p>
      </div>

      <div className="row post-feed">
        {posts.map(({ node }) => {
          postCounter++
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`col-xs-12 col-sm-4 post`}
            />
          )
        })}
      </div>

    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        social {
          github
          linkedIn
        }
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(articles)/" }}, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogPage location={props.location} data={data} {...props} />
    )}
  />
)
