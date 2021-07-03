import React from "react"
import { graphql, Link } from 'gatsby';
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PortfolioPostTemplate extends React.Component {
  render() {
    const data = this.props.data;
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const social = this.props.data.site.siteMetadata.social

    return (
      <Layout location={this.props.location} title={siteTitle} social={social}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}site-head-left
        />
        <article
          className={`container ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <div className="post-content pb-0">
            <header className="post-content-header">
              <h1 className="post-content-title">{post.frontmatter.title}</h1>
            </header>

            {post.frontmatter.description && (
              <p className="post-content-excerpt">{post.frontmatter.description}</p>
            )}
          </div>

          {post.frontmatter.thumbnail && (
            <div className="portfolio-preview-container">
              <div className="desktop-view">
                <picture>
                  <Img fluid={data.laptopFrame.childImageSharp.fluid}/>
                </picture>
                <div className="portfolio-image-container position-absolute top-0 start-50 transform translate-x-50 w-100 h-100">
                  <Img fluid={post.frontmatter.thumbnail.childImageSharp.fluid}/>
                </div>
              </div>
              <div className="mobile-view position-absolute col-xs-12 col-sm-3">
                <picture>
                  <Img fluid={data.mobileFrame.childImageSharp.fluid}
                       imgStyle={{ objectFit: 'contain' }}/>
                </picture>
                <div className="portfolio-image-container position-absolute top-0 start-50 transform translate-x-50 w-100 h-100 mx-auto">
                  <Img fluid={post.frontmatter.mobileThumbnail.childImageSharp.fluid}
                       imgStyle={{ objectFit: 'contain' }}/>
                </div>
              </div>
            </div>
          )}
          [Visit the website](https://www.annakristina.net/)


          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="post-content-footer">
            {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
          </footer>
        </article>
      </Layout>
    )
  }
}

export default PortfolioPostTemplate

export const pageQuery = graphql`
  query PortfolioPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        social {
          github
          linkedIn
        }
      }
    }
    laptopFrame: file(
      relativePath: { eq: "laptop-frame.png" }
    ) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileFrame: file(
      relativePath: { eq: "mobile-frame.png" }
    ) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mobileThumbnail {
          childImageSharp {
            fluid(maxWidth: 1360, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
