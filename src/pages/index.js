import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

import Typewriter from 'typewriter-effect';

import './index.scss';

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
            <p>Hi, I am Vasilis</p>
            <h2 className="page-head-title">
                <Typewriter
                options={{
                    //strings: [data.site.siteMetadata.description],
                    strings: ['I like to build websites', 'Do you have a project in mind?', 'Let\'s ignite your ideas together!'],
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    console.log('String typed out!');
                }}
                />
            </h2>
        </header>
      )}
        <section className="container-fluid">
          <h2 className="text-center">My Recent Works</h2>
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
        </section>
      <section>
        <div className="container text-center">
          <h2>Services</h2>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <h4>Design & Development</h4>
              <p className="text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="col-xs-12 col-sm-4">
              <h4>E-Commerce</h4>
              <p className="text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="col-xs-12 col-sm-4">
              <h4>Mobile apps</h4>
              <p className="text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="col-xs-12">
              <button className="btn btn-outline-info">See all</button>
            </div>
          </div>
        </div>
      </section>
      <section>
          <div className="container text-center">
            <h2> About Me</h2>
            <div className="row">
                   <div className="col-xs-12 col-sm-6 text-justify about-typewriter">
                     <h4>
                       I am <Typewriter options={{
                                          strings: ['a web developer', 'a full stack octopus', 'the breaker of the builds', 'the mother of dragons',  'the lord of the sevenths', '... (are you still reading??)'],
                                          autoStart: true,
                                          loop: true,
                                        }}
                                        onInit={(typewriter) => {
                                          console.log('String typed out!');
                                        }}/>
                     </h4>
                     <p>A passionate Full Stack Web Developer helping people bring their ideas to life.
                       with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.
                       </p>
                     <p>Got any questions? <a href="#">Contact me.</a></p>
                       [social-icon]
                       [see my resume here]
                   </div>
              <div className="col-xs-12 col-sm-6">
                       Tech stack [make-it-rain]
                <i className="icon icon-lg icon-shape shadow rounded-circle mb-5 fab fa-angular"></i>
                </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="text-center">Let's talk about your next</h2>
            <div className="row">
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="text-center">Contact</h2>
            <div className="row">
            </div>
          </div>
        </section>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/" }}, sort: { fields: [frontmatter___date], order: DESC }) {
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
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
