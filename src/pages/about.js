import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social

  return (
    <Layout title={siteTitle} social={social}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <div className="post-content pb-0">
        <header className="post-content-header">
          <h1 className="post-content-title">/about/me</h1>
        </header>
        <p className="post-content-excerpt">test</p>
      </div>

      <article className="container post-content-body">
        <figure className="kg-card kg-image-card m-0">
          <Img
            fluid={data.benchAccounting.childImageSharp.fluid}
            className="kg-image"
          />
          <figcaption>Well that's me... maybe several years ago</figcaption>
        </figure>
        <div className="row justify-content-center">
          <div className="col-xs-12 col-lg-8">
              <h3>Hi, my name is Vasilis. Nice to meet you.</h3>
              <p>I’m a software engineer from Greece.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia suscipit ex, vitae scelerisque erat rutrum id. Morbi tortor nisl, rutrum ut accumsan nec,</p>

                <p>sodales quis nisl. Pellentesque eros tellus, vestibulum quis nisi tristique, commodo ultricies enim. Suspendisse at dolor tempus, hendrerit lorem ac, aliquet quam. Nam ac</p>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia suscipit ex, vitae scelerisque erat rutrum id. Morbi tortor nisl, rutrum ut accumsan nec,</p>

                    <p>sodales quis nisl. Pellentesque eros tellus, vestibulum quis nisi tristique, commodo ultricies enim. Suspendisse at dolor tempus, hendrerit lorem ac, aliquet quam. Nam ac</p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia suscipit ex, vitae scelerisque erat rutrum id. Morbi tortor nisl, rutrum ut accumsan nec,</p>

                        <p>sodales quis nisl. Pellentesque eros tellus, vestibulum quis nisi tristique, commodo ultricies enim. Suspendisse at dolor tempus, hendrerit lorem ac, aliquet quam. Nam ac</p>

                          <p>Find me online @vvasiloud.</p>
            </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          github
          linkedIn
        }
      }
    }
    benchAccounting: file(
      relativePath: { eq: "about-me.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
