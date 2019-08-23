import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

const Search = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const { edges: posts } = props.data.allMarkdownRemark;
  const filterSearch = data.filter(({ node: post }) => { return post.frontmatter.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 });
  const handelSearch = (e) => {
    setSearch(e.target.value);
  }
  useEffect(() => {
    setData(posts)
    setLoading(false)
  }, []);
  return(
  <Layout>
    <SEO title='Search |' />
    <div className='SearchStyle'>
      <div className='banner'>
        <ul>
          <input type='text' value={ search } placeholder='What are you searching for?...' onChange={ handelSearch } className='search' />
        </ul>
      </div>
    </div>
    <div style={{ marginTop: '20px' }} className='PageWrapper'>
      <Sidebar />
      <div className='CardStyle'>
        {loading ? <h1>Loading Post...</h1> : filterSearch.map(({ node: post }) => (<Link to={ post.fields.slug } key={ post.frontmatter.title } title={ post.frontmatter.title }>
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
Search.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object
  })
}
export default Search;
export const searchQuery = graphql`
  query searchQuery {
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