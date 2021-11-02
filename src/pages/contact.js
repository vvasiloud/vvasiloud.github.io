import React from 'react';
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
    return <p>Thank you, your message has been submitted.</p>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  )
};

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social

  return (
    <Layout title={siteTitle} social={social}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <div className="post-content pb-0">
        <header className="post-content-header">
          <h1 className="post-content-title">/Drop me a line</h1>
        </header>
        <p className="post-content-excerpt mb-0">but not the mic</p>
      </div>
      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <ContactForm formId={"myyelawm"}/>
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
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
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
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
