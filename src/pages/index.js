import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

import Typewriter from 'typewriter-effect';

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
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
        <section>
          <h2 className="text-center">My Recent Works</h2>
          <div className="post-feed">
            {posts.map(({ node }) => {
              postCounter++
              return (
                <PostCard
                  key={node.fields.slug}
                  count={postCounter}
                  node={node}
                  postClass={`post`}
                />
              )
            })}
          </div>
        </section>
        <section>
             <div className="row">
                 <div className="col-12">
                     <h2> About Me</h2>
                     <h3>
                         I am <Typewriter className="inline"
                                          options={{
                                              strings: ['a web developer', 'mother of dragons', 'build breaker', 'full stack octopus'],
                                              autoStart: true,
                                              loop: true,
                                          }}
                                          onInit={(typewriter) => {
                                              console.log('String typed out!');
                                          }}
                     />
                     </h3>
                 </div>

                 <div className="col-6">
                     A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications
                     with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.
                     [social-icon]
                     [see my resume here]
                 </div>
                 <div className="col-6">
                     Tech stack
                 </div>
             </div>
        </section>
        <section>
            <div className="row">
                <div className="col-12"><h2>Services</h2></div>
            </div>
        </section>
        <section>
            <div className="row">
                <div className="col-12"><h2>Let's talk about your next</h2></div>
            </div>
        </section>
        <section>
            <div className="row">
                <div className="col-12"><h2>Contact</h2></div>
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
