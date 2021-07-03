import React from "react"
import { graphql, Link, StaticQuery } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

import Typewriter from 'typewriter-effect';

import './index.scss';
import Img from 'gatsby-image';

//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const social = data.site.siteMetadata.social
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle} social={social}>
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
                    strings: ['I love to build websites', 'Do you have a project in mind?', 'Let\'s ignite your ideas together!'],
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

      <section className="container section-container text-center">
        <h2 className="text-center">My Recent Works</h2>

        <div className="row">
          {posts.map(({ node }) => {
            return (
              <Link to={`/portfolio/anna-kristina/`}>
                <div className="portfolio-preview-container">
                  <div className="desktop-view">
                    <picture>
                      <Img fluid={data.laptopFrame.childImageSharp.fluid}/>
                    </picture>
                    <div className="portfolio-image-container position-absolute top-0 start-50 transform translate-x-50 w-100 h-100">
                      <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid}/>
                    </div>
                  </div>
                  <div className="mobile-view position-absolute col-xs-12 col-sm-3">
                    <picture>
                      <Img fluid={data.mobileFrame.childImageSharp.fluid}
                           imgStyle={{ objectFit: 'contain' }}/>
                    </picture>
                    <div className="portfolio-image-container position-absolute top-0 start-50 transform translate-x-50 w-100 h-100 mx-auto">
                      <Img fluid={node.frontmatter.mobileThumbnail.childImageSharp.fluid}
                           style={{ borderRadius: '0 0 3rem 3rem' }}
                           imgStyle={{ objectFit: 'contain' }}/>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}

        </div>

      </section>
      <section className="container-fluid section-container text-center inverted">
        <div className="container">
          <h2 className="text-center">Services</h2>
          <div className="row">

          <div className="col-xs-12 col-sm-4">
              <h4>Website design & development</h4>
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
          </div>
          <Link className="btn" to={"/services"}>Find out more about my services</Link>
        </div>
      </section>

      <section className="container section-container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 "><h2> About Me</h2></div>
          <div className="col-xs-12 col-sm-6 text-center"><h4>Technologies</h4></div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 text-justify about-typewriter">
            <p>A passionate Full Stack Web Developer bringing ideas to life with code.
              with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.
            </p>
            <p>Got any questions? <Link to={"/contact"}>Contact me.</Link></p>
          </div>

          <div className="col-xs-12 col-sm-6 text-center">

            <div className="col-xs-12">
              <svg className="icon icon-lg icon-shape shadow rounded-circle html5 hvr-grow" viewBox="0 0 128 128">
                <path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
              </svg>
              <svg className="icon icon-lg icon-shape shadow rounded-circle javascript hvr-grow" viewBox="0 0 128 128">
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
              </svg>
              <svg className="icon icon-lg icon-shape shadow rounded-circle css3 hvr-grow" viewBox="0 0 128 128">
                <path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
              </svg>
              <svg className="icon icon-lg icon-shape shadow rounded-circle angular hvr-grow" viewBox="0 0 128 128">
                <path fill="#B3B3B3" d="M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path><path fill="#A6120D" d="M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"></path><path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"></path><path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"></path><path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path>
              </svg>
            </div>

            <div className="col-xs-12">
              <svg className="icon icon-lg icon-shape shadow rounded-circle graphql hvr-grow" viewBox="0 0 128 128">
                <g id="surface1"> <path fill="#E434AA" d="M 18.390625 96.851562 L 13.789062 94.195312 L 65.039062 5.433594 L 69.636719 8.089844 Z M 18.390625 96.851562 "></path> <path fill="#E434AA" d="M 12.734375 87.105469 L 115.230469 87.105469 L 115.230469 92.414062 L 12.734375 92.414062 Z M 12.734375 87.105469 "></path> <path fill="#E434AA" d="M 66.03125 119.6875 L 14.765625 90.089844 L 17.421875 85.488281 L 68.6875 115.089844 Z M 66.03125 119.6875 "></path> <path fill="#E434AA" d="M 110.566406 42.542969 L 59.300781 12.941406 L 61.957031 8.34375 L 113.222656 37.941406 Z M 110.566406 42.542969 "></path> <path fill="#E434AA" d="M 17.433594 42.523438 L 14.777344 37.921875 L 66.046875 8.324219 L 68.703125 12.921875 Z M 17.433594 42.523438 "></path> <path fill="#E434AA" d="M 109.621094 96.851562 L 58.375 8.089844 L 62.972656 5.433594 L 114.222656 94.195312 Z M 109.621094 96.851562 "></path> <path fill="#E434AA" d="M 16.800781 34.398438 L 22.113281 34.398438 L 22.113281 93.601562 L 16.800781 93.601562 Z M 16.800781 34.398438 "></path> <path fill="#E434AA" d="M 105.886719 34.398438 L 111.199219 34.398438 L 111.199219 93.601562 L 105.886719 93.601562 Z M 105.886719 34.398438 "></path> <path fill="#E434AA" d="M 65.128906 117.441406 L 62.808594 113.421875 L 107.394531 87.675781 L 109.714844 91.695312 Z M 65.128906 117.441406 "></path> <path fill="#E434AA" d="M 118.238281 95.328125 C 115.167969 100.671875 108.320312 102.496094 102.976562 99.425781 C 97.632812 96.351562 95.808594 89.503906 98.878906 84.160156 C 101.953125 78.816406 108.800781 76.992188 114.144531 80.0625 C 119.519531 83.167969 121.34375 89.984375 118.238281 95.328125 "></path> <path fill="#E434AA" d="M 29.089844 43.839844 C 26.015625 49.183594 19.167969 51.007812 13.824219 47.9375 C 8.480469 44.863281 6.65625 38.015625 9.726562 32.671875 C 12.800781 27.328125 19.648438 25.503906 24.992188 28.574219 C 30.335938 31.679688 32.160156 38.496094 29.089844 43.839844 "></path> <path fill="#E434AA" d="M 9.761719 95.328125 C 6.6875 89.984375 8.511719 83.167969 13.855469 80.0625 C 19.199219 76.992188 26.015625 78.816406 29.121094 84.160156 C 32.191406 89.503906 30.367188 96.320312 25.023438 99.425781 C 19.648438 102.496094 12.832031 100.671875 9.761719 95.328125 "></path> <path fill="#E434AA" d="M 98.910156 43.839844 C 95.839844 38.496094 97.664062 31.679688 103.007812 28.574219 C 108.351562 25.503906 115.167969 27.328125 118.273438 32.671875 C 121.34375 38.015625 119.519531 44.832031 114.175781 47.9375 C 108.832031 51.007812 101.984375 49.183594 98.910156 43.839844 "></path> <path fill="#E434AA" d="M 64 126.65625 C 57.824219 126.65625 52.832031 121.664062 52.832031 115.488281 C 52.832031 109.3125 57.824219 104.320312 64 104.320312 C 70.175781 104.320312 75.167969 109.3125 75.167969 115.488281 C 75.167969 121.632812 70.175781 126.65625 64 126.65625 "></path> <path fill="#E434AA" d="M 64 23.679688 C 57.824219 23.679688 52.832031 18.6875 52.832031 12.511719 C 52.832031 6.335938 57.824219 1.34375 64 1.34375 C 70.175781 1.34375 75.167969 6.335938 75.167969 12.511719 C 75.167969 18.6875 70.175781 23.679688 64 23.679688 "></path> </g>
              </svg>
              <svg  className="icon icon-lg icon-shape shadow rounded-circle sass hvr-grow" viewBox="0 0 128 128">
                <path fillRule="evenodd" clipRule="evenodd" fill="#CB6699" d="M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153-.099-.344-.224-.681-.354-1.014-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896 1.114-.879 2.019-1.965 2.691-3.199 1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888-.247.403-.411.894-.48 1.364-.133.898.422 1.764 1.383 1.971.878.189 1.813.259 2.708.193 3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605-.151.153-.242.459-.205.67.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788-3.338-.136-6.619.36-9.765 1.503-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5-.248-.117-.518-.219-.786-.258-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368-1.815-.269-3.603-.128-5.354.438-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436.469-2.378 1.009-4.743 1.578-7.099.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568-.203.259-.471.495-.757.654-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091-3.165 1.107-6.421 1.802-9.765 2.083-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125-3.862-2.025-8.03-3.204-12.332-3.204h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79-.417 1.206-.813 2.499-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zm25.158-19.379c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417-.072.124-.179.231-.283.334-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054.49-.305 1.04-.55 1.595-.706.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354-.008-.239.027-.489.093-.721.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"></path>
              </svg>
              <svg className="icon icon-lg icon-shape shadow rounded-circle gatsbyJs hvr-grow" viewBox="0 0 128 128">
                <path fill="#64328B" d="M64,0C28.7,0,0,28.7,0,64v0c0,35.3,28.7,64,64,64s64-28.7,64-64v0C128,28.7,99.3,0,64,0z M13.2,64L64,114.8 C35.9,114.8,13.2,92.1,13.2,64z M75.4,113.5l-60.9-61C19.7,30,39.9,13.2,64,13.2c16.6,0,31.3,7.9,40.5,20.2l-7.5,7.2 C89.7,30.2,77.7,23.5,64,23.5c-17.6,0-32.5,11.2-38.1,26.8C33.1,57,75.4,98.8,78.1,102c12.7-4.7,22.3-15.5,25.4-28.9H81.9v-9.4 l33,0.2C114.8,88.2,98,108.4,75.4,113.5z"></path>
              </svg>
              <svg className="icon icon-lg icon-shape shadow rounded-circle wordpress hvr-grow" viewBox="0 0 128 128">
                <path fillRule="evenodd" clipRule="evenodd" fill="#494949" d="M64.094 126.224c34.275-.052 62.021-27.933 62.021-62.325 0-33.833-27.618-61.697-60.613-62.286-34.652-.618-63.608 27.5-63.617 61.597-.01 35.079 27.612 63.064 62.209 63.014zm-.101-121.594c32.907-.011 59.126 26.725 59.116 60.28-.011 31.679-26.925 58.18-59.092 58.187-32.771.007-59.125-26.563-59.124-59.608.002-32.193 26.766-58.848 59.1-58.859zM39.157 35.896c.538 1.793-.968 2.417-2.569 2.542-1.685.13-3.369.257-5.325.406 6.456 19.234 12.815 38.183 19.325 57.573.464-.759.655-.973.739-1.223 3.574-10.682 7.168-21.357 10.651-32.069.318-.977.16-2.271-.188-3.275-1.843-5.32-4.051-10.524-5.667-15.908-1.105-3.686-2.571-6.071-6.928-5.644-.742.073-1.648-1.524-2.479-2.349 1.005-.6 2.003-1.704 3.017-1.719 8.872-.135 17.747-.135 26.618.008 1.018.017 2.016 1.15 3.021 1.765-.88.804-1.639 2.01-2.668 2.321-1.651.498-3.482.404-5.458.58 6.463 19.225 12.793 38.057 19.349 57.56 2.931-9.736 5.658-18.676 8.31-27.639 2.366-8.001.956-15.473-3.322-22.52-1.286-2.119-2.866-4.175-3.595-6.486-.828-2.629-1.516-5.622-1.077-8.259.745-4.469 4.174-6.688 8.814-7.113-25.392-23.566-65.294-15.13-79.997 10.475 5.66-.261 11.064-.604 16.472-.678 1.022-.013 2.717.851 2.957 1.652zM49.274 113.867c-.118.345-.125.729-.218 1.302 10.943 3.034 21.675 2.815 32.659-.886l-16.78-45.96c-5.37 15.611-10.52 30.575-15.661 45.544zM40.818 111.789l-25.281-69.35c-11.405 22.278-2.729 56.268 25.281 69.35zM117.246 67.227c.802-10.534-2.832-25.119-5.97-27.125-.35 3.875-.106 8.186-1.218 12.114-2.617 9.255-5.817 18.349-8.899 27.468-3.35 9.912-6.832 19.779-10.257 29.666 16.092-9.539 24.935-23.618 26.344-42.123z"></path>
              </svg>
            </div>

            <div className="col-xs-12">
              <svg className="icon icon-lg icon-shape shadow rounded-circle flutter hvr-grow" viewBox="0 0 128 128">
                <g id="Capa_4"><g><g><path fill="#3FB6D3" d="M 12.3,64.2 76.3,0 115.7,0 32.1,83.6 z"></path><path fill="#3FB6D3" d="M 76.3,128 115.7,128 81.6,93.9 115.7,59.1 76.3,59.1 42.2,93.5 z"></path></g><path fill="#27AACD" d="M 81.6,93.9 61.6,73.9 42.2,93.5 61.6,113.1 z"></path><path fill="#19599A" d="M 115.7,128 81.6,93.9 61.6,113.1 76.3,128 z"></path><linearGradient id="SVGID_1_FLUTTER" gradientUnits="userSpaceOnUse" x1="59.3649" y1="116.3598" x2="86.8249" y2="99.3992"><stop offset="0" style={{stopColor:"#1B4E94"}}></stop><stop offset="0.6305" style={{stopColor:"#1A5497"}}></stop><stop offset="1" style={{stopColor:"#195A9B"}}></stop></linearGradient><path fill="url(#SVGID_1_FLUTTER)" d="M 61.6,113.1 92.4,104.7 81.6,93.9 z"></path></g></g>
              </svg>
              <svg className="icon icon-lg icon-shape shadow rounded-circle magento hvr-grow" viewBox="0 0 128 128" style={{enableBackground:"new 0 0 128 128"}}>
                <path fill="#F26322" d="M119.82,31.97v64.01l-15.85,9.12V41.17l-39.62-22.9l-39.64,22.9l0.1,63.96L8.99,95.98V32.02L64.45,0 L119.82,31.97z M72.3,105.1l-7.9,4.6l-7.95-4.55V41.17l-15.82,9.15l0.03,63.96L64.38,128l23.77-13.72V50.29L72.3,41.14L72.3,105.1 L72.3,105.1z"/>
              </svg>
            </div>

          </div>
        </div>
      </section>

      <section className="container-fluid section-container text-center inverted">
        <div className="container-fluid">
          <h2 className="text-center mb-5 hvr-grow-rotate d-block">Send me a message!</h2>
          <p className="post-content-excerpt"> Got a question, proposal, or just want to say hello? Go ahead.</p>

          <Link to={"/contact"} className="btn btn-info btn-contact">Say hello</Link>
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
        social {
          github
          linkedIn
        }
      }
    }
   laptopFrame: file(
      relativePath: { eq: "laptop-frame.png" }
    ) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileFrame: file(
      relativePath: { eq: "mobile-frame.png" }
    ) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(portfolio)/" }}, sort: { fields: [frontmatter___date], order: ASC }) {
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
                fluid(maxWidth: 1360, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            mobileThumbnail {
              childImageSharp {
                fluid(maxWidth: 1360, quality: 90) {
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
