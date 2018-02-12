import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';
import Footer from "../components/Footer";
import Header from "../components/Header";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    const { siteMetadata} = this.props.data.site;

      return (
        <div>
            <Header data={siteMetadata} />
          <div className="layout">
            <Helmet defaultTitle="Blog by John Doe" />
            {children()}
          </div>
           <Footer data={siteMetadata}/>
        </div>
    );
  }
}

export default Layout;

export const pageQuery = graphql`
  query LayoutDataQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        
        author {
          github
          rss
        }
      }
    }
  }
`;
