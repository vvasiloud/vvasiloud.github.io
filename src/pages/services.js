import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social

  return (
    <Layout title={siteTitle} social={social}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <div className="post-content pb-0">
        <header className="post-content-header">
          <h1 className="post-content-title">/services</h1>
        </header>
      </div>

      <article className="container">
        <div className="post-content-body">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h4>Website design & development</h4>
              <p className="text-justify">Needing a static or a dynamic site? I can come up with design that specially suits your needs, mobile friendly and optimized for search engines.</p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h4>E-Commerce</h4>
              <p className="text-justify">
                Starting up a new business or having an existing one? I can help scale your business, import your product catalogue, integrate third party services, payment gateways and design your storefront.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h4>Mobile applications</h4>
              <p className="text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h4>Ongoing Support</h4>
              <p className="text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
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
      <ServicesPage location={props.location} data={data} {...props} />
    )}
  />
)
