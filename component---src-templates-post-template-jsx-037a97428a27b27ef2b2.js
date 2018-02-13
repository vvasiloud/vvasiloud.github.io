webpackJsonp([0x623bdfc73907],{428:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function u(e,t){var n=t.onNewComment,a=t.language,r=s(t,["onNewComment","language"]);for(var o in r)e.page[o]=r[o];e.language=a,n&&(e.callbacks={onNewComment:[n]})}Object.defineProperty(t,"__esModule",{value:!0});var f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(1),p=a(d),m=n(8),h=a(m),b=["shortname","identifier","title","url","category_id","onNewComment","language"],y=!1,g=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return b.some(function(e){return e===n})?t:f({},t,r({},n,e.props[n]))},{});return p.default.createElement("div",t,p.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!y){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),y=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};b.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){u(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){u(this,t)},this.addDisqusScript())}}]),t}(p.default.Component);g.displayName="DisqusThread",g.propTypes={id:h.default.string,shortname:h.default.string.isRequired,identifier:h.default.string,title:h.default.string,url:h.default.string,category_id:h.default.string,onNewComment:h.default.func,language:h.default.string},g.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=g},429:function(e,t,n){"use strict";e.exports=n(428)},198:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),s=a(l),u=n(429),f=a(u),c=function(e){function t(n){r(this,t);var a=o(this,e.call(this,n));return a.state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(a),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(a),a}return i(t,e),t.prototype.onSnackbarDismiss=function(){var e=this.state.toasts,t=e.slice(1);this.setState({toasts:t})},t.prototype.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},t.prototype.render=function(){var e=this.props,t=e.postNode,n=e.siteMetadata;if(!n.disqusShortname)return null;var a=t.frontmatter,r=n.url+t.fields.slug;return s.default.createElement(f.default,{shortname:n.disqusShortname,identifier:a.title,title:a.title,url:r,category_id:a.category_id,onNewComment:this.notifyAboutComment})},t}(l.Component);t.default=c,e.exports=t.default},204:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(1),s=a(l),u=n(18),f=a(u),c=n(68),d=a(c),p=n(198),m=a(p);n(423);var h=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=(e.subtitle,e.author,this.props.data.markdownRemark),n=t.fields.tagSlugs,a="undefined"!=typeof window&&window.location.href,r=s.default.createElement("div",null,s.default.createElement(f.default,{className:"post-single__home-button",to:"/"},"All Articles")),o=s.default.createElement("div",{className:"post-single__tags"},s.default.createElement("ul",{className:"post-single__tags-list"},n&&n.map(function(e,n){return s.default.createElement("li",{className:"post-single__tags-list-item",key:e},s.default.createElement(f.default,{to:e,className:"post-single__tags-list-item-link"},t.frontmatter.tags[n]))}))),i=s.default.createElement("div",null,s.default.createElement(m.default,{postNode:t,siteMetadata:this.props.data.site.siteMetadata}));return s.default.createElement("div",null,r,s.default.createElement("div",{className:"post-single"},s.default.createElement("div",{className:"post-single__inner"},s.default.createElement("h1",{className:"post-single__title"},t.frontmatter.title),s.default.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:t.html}}),s.default.createElement("div",{className:"post-single__date"},s.default.createElement("em",null,"Published ",(0,d.default)(t.frontmatter.date).format("D MMM YYYY")))),s.default.createElement("div",{className:"post-single__footer"},o,s.default.createElement("hr",null),s.default.createElement("section",{className:"post-single__share"},s.default.createElement("h4",{className:"post-single__share-title"},"Share on"),s.default.createElement("a",{href:"https://twitter.com/intent/tweet?text="+a,className:"btn btn--twitter",title:"Share on Twitter",target:"_blank"},s.default.createElement("i",{className:"fa fa-fw fa-twitter","aria-hidden":"true"}),s.default.createElement("span",null," Twitter")),s.default.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u="+a,className:"btn btn--facebook",title:"Share on Facebook",target:"_blank"},s.default.createElement("i",{className:"fa fa-fw fa-facebook","aria-hidden":"true"}),s.default.createElement("span",null," Facebook")),s.default.createElement("a",{href:"https://plus.google.com/share?url="+a,className:"btn btn--google-plus",title:"Share on Google Plus",target:"_blank"},s.default.createElement("i",{className:"fa fa-fw fa-google-plus","aria-hidden":"true"}),s.default.createElement("span",null," Google+")),s.default.createElement("a",{href:"https://www.linkedin.com/shareArticle?mini=true&amp;url="+a,className:"btn btn--linkedin",title:"Share on LinkedIn",target:"_blank"},s.default.createElement("i",{className:"fa fa-fw fa-linkedin","aria-hidden":"true"}),s.default.createElement("span",null," LinkedIn"))),s.default.createElement("div",{className:"post-single__footer-text"},s.default.createElement("h4",{className:"post-single__comments-title"},"Leave a Comment")),i)))},t}(s.default.Component);t.default=h,e.exports=t.default},423:function(e,t){},213:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(1),s=a(l),u=n(23),f=a(u),c=n(204),d=a(c),p=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.subtitle,a=this.props.data.markdownRemark,r=a.frontmatter,o=r.title,i=r.description,l=null!==i?i:n;return s.default.createElement("div",null,s.default.createElement(f.default,null,s.default.createElement("title",null,o+" - "+t),s.default.createElement("meta",{name:"description",content:l})),s.default.createElement(d.default,this.props))},t}(s.default.Component);t.default=p;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-post-template-jsx-037a97428a27b27ef2b2.js.map