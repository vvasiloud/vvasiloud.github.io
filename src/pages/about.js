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
        <p className="post-content-excerpt">aka. giving a few seconds to speak about yourself.</p>
      </div>

      <article className="container post-content-body">
        <figure className="kg-card kg-image-card m-0 rounded">
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

              <p>I’ve been working since several years ago, and have always taken a deep interest in making websites the best they can be for everyone using them.</p>

              <p>I value great user interaction and aim to develop smooth user experiences as possible.</p>

              <p>As of my story up to now, I had the opportunity and priviledge to work for an amazing <a href="#" target="_blank">design agency</a>, the largest <a href="#" target="_blank">particle physics laboratory</a> in the world and an <a href="#" target="_blank">innovative digital bank</a>.</p>

              <p>When I'm not working I love to travel, drinking anti-murder juice (coffee), playing piano and doodling around with new ideas.</p>

              <p>Find me online <a href="https://github.com/vvasiloud" target="_blank">@vvasiloud</a>.</p>
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
