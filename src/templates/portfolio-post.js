import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class PortfolioPostTemplate extends React.Component {
  render() {
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
            <div className="portfolio-preview-container text-center">
              <div className="desktop-view d-none d-sm-block">
                <picture>
                  <img src="/static/d7a391f647e031a19a043a63d20504f7/73f08/laptop-frame.png"/>
                </picture>
                <div className="portfolio-image-container position-absolute top-0 start-50 transform translate-x-50 w-100 h-100">
                  <img src="/static/f59ec654a3fdd99e05a5f6861caaa8ab/6050d/annakristina-desktop.png"/>
                </div>
                </div>
                <div className="mobile-view">
                  <picture>
                    <img src="/static/8b35d56d9110a50f22ab837690964c47/57fc3/mobile-frame.png"/>
                  </picture>

                  <div className="portfolio-image-container position-absolute top-0 start-50 transform translate-x-50 w-100 h-100 mx-auto">
                    <img src="/static/2e9c776dc77c3b59297247f56e8b9322/3cde2/annakristina-mobile.png"/>
                  </div>
              </div>
            </div>
          )}

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
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
