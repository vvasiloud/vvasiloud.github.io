import React from 'react';
import get from 'lodash/get';
import Link from 'gatsby-link';
import Links from '../Links';
import profilePic from '../../assets/images/avatar.jpg';
import './style.scss';

class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const { author, subtitle } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={profilePic}
            className="sidebar__author-photo"
            width="110"
            height="110"
            alt={author.name}
          />
        </Link>
        { isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
          </h1>
        ) :
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
          </h2>
        }
        <p className="sidebar__author-subtitle">{author.bio}</p>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">
            {authorBlock}
          </div>
          <div>
            <Links data={author} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
