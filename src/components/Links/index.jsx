import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import kebabCase from 'lodash/kebabCase';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
        linkedin: { url:`https://www.linkedin.com/in/${author.linkedin}`, icon: 'fa fa-fw fa-linkedin', title: 'LinkedIn'},
        github: { url:`https://www.github.com/${author.github}`, icon: 'fa fa-fw fa-github', title: 'Github'},
        codepen: { url:`https://www.codepen.io/${author.codepen}`, icon: 'fa fa-fw fa-codepen', title: 'CodePen'},
        /*
        telegram: { url:`telegram:${author.telegram}`, icon: 'icon-paper-plane'},
        twitter: { url:`https://www.twitter.com/${author.twitter}`, icon: 'icon-twitter'},
        vk: { url:`https://www.vk.com/${author.vk}`, icon: 'icon-vkontakte'},
        rss: { url:author.rss, icon: 'icon-rss'},
        email: { url:`mailto:${author.email}`, icon: 'icon-mail'}
        */
    };

    const linksHtml = Object.keys(links).map((key) => {
      return (
          <li className="links__list-item">
              <a href={`${links[key].url}`} target="_blank" >
                  <i className={`${ links[key].icon }`} /> {links[key].title ? links[key].title : key }
              </a>
          </li>
      );
    });

    return (
      <div className="links">
        <ul className="links__list">
            <li className="links__list-item">
                <i className="fa fa-fw fa-map-marker" aria-hidden="true"></i>
                {author.location}
            </li>
            {linksHtml}
        </ul>
      </div>
    );
  }
}

export default Links;
