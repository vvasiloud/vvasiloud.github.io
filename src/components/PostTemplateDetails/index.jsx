import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import Disqus from '../Disqus/Disqus';
import './style.scss';

class PostTemplateDetails extends React.Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const tags = post.fields.tagSlugs;
    const url = typeof window !== 'undefined' && window.location.href;

    const homeBlock = (
      <div>
        <Link className="post-single__home-button" to="/">All Articles</Link>
      </div>
    );

    const tagsBlock = (
      <div className="post-single__tags">
        <ul className="post-single__tags-list">
          {tags && tags.map((tag, i) => (
            <li className="post-single__tags-list-item" key={tag}>
              <Link to={tag} className="post-single__tags-list-item-link">
                {post.frontmatter.tags[i]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

    const commentsBlock = (
      <div>
        <Disqus postNode={post} siteMetadata={this.props.data.site.siteMetadata} />
      </div>
    );

    return (
      <div>
        {homeBlock}
        <div className="post-single">
          <div className="post-single__inner">
            <h1 className="post-single__title">{post.frontmatter.title}</h1>
            <div className="post-single__body" dangerouslySetInnerHTML={{ __html: post.html }} />
            <div className="post-single__date">
              <em>Published {moment(post.frontmatter.date).format('D MMM YYYY')}</em>
            </div>
          </div>
          <div className="post-single__footer">
            {tagsBlock}
            <hr />
              <section className="post-single__share">
                  <h4 className="post-single__share-title">Share on</h4>
                  <a href={"https://twitter.com/intent/tweet?text=" + url} className="btn btn--twitter" title="Share on Twitter" target="_blank"><i className="fa fa-fw fa-twitter" aria-hidden="true"></i><span> Twitter</span></a>
                  <a href={"https://www.facebook.com/sharer/sharer.php?u=" + url} className="btn btn--facebook" title="Share on Facebook" target="_blank"><i className="fa fa-fw fa-facebook" aria-hidden="true"></i><span> Facebook</span></a>
                  <a href={"https://plus.google.com/share?url=" + url} className="btn btn--google-plus" title="Share on Google Plus" target="_blank"><i className="fa fa-fw fa-google-plus" aria-hidden="true"></i><span> Google+</span></a>
                  <a href={"https://www.linkedin.com/shareArticle?mini=true&amp;url=" + url} className="btn btn--linkedin" title="Share on LinkedIn" target="_blank"><i className="fa fa-fw fa-linkedin" aria-hidden="true"></i><span> LinkedIn</span></a>
              </section>
            <div className="post-single__footer-text">
                <h4 className="post-single__comments-title">Leave a Comment</h4>
            </div>
            {commentsBlock}
          </div>
        </div>
      </div>
    );
  }
}

export default PostTemplateDetails;
