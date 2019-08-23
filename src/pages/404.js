import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

const NotFound = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { edges: posts } = props.data.allMarkdownRemark;
  useEffect(() => {
    setData(posts)
    setLoading(false)
  }, []);
  return(
  <Layout>
    <SEO title='404: NOT FOUND! |' />
    <div className='ErrStyle'>
      <div className='banner'>
        <ul>
          <h1>404</h1>
          <p>You can go back to our <Link to='/' title='TheNodeist Home'>home page</Link>, or you can explore some other post down below...</p>
        </ul>
      </div>
    </div>
    <div style={{ marginTop: '20px' }} className='PageWrapper'>
      <Sidebar />
      <div className='CardStyle'>
        {loading ? <h1>Loading Post...</h1> : data.map(({ node: post }) => (<Link to={ post.fields.slug } key={ post.frontmatter.title } title={ post.frontmatter.title }>
          <div className='card'>
            <Img fluid={ post.frontmatter.cover.childImageSharp.fluid } alt={ post.frontmatter.title } className='cardImage' />
            <div className='dis'>
              <h1>{ post.frontmatter.title }</h1>
              <p>{ post.excerpt }</p>
            </div>
          </div>
        </Link>))}
      </div>
    </div>
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
          excerpt(pruneLength: 50)
          fields {
            slug
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