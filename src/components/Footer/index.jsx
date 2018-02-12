import React from 'react';
import './style.scss';

class Footer extends React.Component {
    render() {
        const { copyright, author } = this.props.data;
        const links = {
            github: { url:`https://www.github.com/${author.github}`, icon: 'fa fa-fw fa-github'},
            feed: { url:author.rss, icon: 'icon-rss'},
        };
        const linksHtml = Object.keys(links).map((key) => {
            return (
                <li className="links__list-item">
                    <a href={`${links[key].url}`} target="_blank" >
                        <i className={`${ links[key].icon }`} /> {key.toUpperCase()}
                    </a>
                </li>
            );
        });
        return (
            <div className="page__footer">
                <footer>
                    <div className="page__footer-follow">
                        <ul className="social-icons">
                            <li><strong>Follow:</strong></li>
                            {linksHtml}
                        </ul>
                    </div>
                    <div className="page__footer-copyright">{copyright}</div>
                </footer>
            </div>
        );
    }
}

export default Footer;
