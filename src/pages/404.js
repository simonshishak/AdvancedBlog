import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import { ErrStyle, CardStyle } from '../components/styles';

const NotFound = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  return(
  <Layout>
    <SEO title='404: NOT FOUND! |' />
    <ErrStyle>
      <h1>404 NOT FOUND!</h1>
      <p>You just hit a route that doesn't exists or was moved while we are working on this maybe you would enjoy these articles below...</p>
    </ErrStyle>
    <Sidebar />
    <CardStyle>
      <div className='wrapper'>
        {posts.map(({ node: post }) => (<div className='card'>
          <Img fluid={ post.frontmatter.cover.childImageSharp.fluid } alt={ post.frontmatter.title } className='cardImage' />
          <div className='dis'>
            <Link to={ post.fields.slug } name={ post.frontmatter.title } title={ post.frontmatter.title }>{ post.frontmatter.title }</Link>
            <p>{ post.excerpt }</p>
            <div className='tagBar'>
              <span>{ post.fields.readingTime.text }</span>
            </div>
          </div>
        </div>))}
      </div>
    </CardStyle>
  </Layout>
  );
}
NotFound.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object
  })
}
export default NotFound;
export const errorQuery = graphql`
  query ErrorQuery {
    allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            type
            date(formatString: "MM / DD / YY")
            cover {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
          }
        }
      }
    }
  }
`