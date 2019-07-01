import React, { useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import { SearchStyle, CardStyle } from '../components/styles';

const Search = (props) => {
  const [search, setSearch] = useState('');
  const handelSearch = (e) => {
    setSearch(e.target.value);
  }
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const filterSearch = posts.filter(({ node: post }) => { return post.frontmatter.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 });
  return(
  <Layout>
    <SEO title='Search |' />
    <SearchStyle>
      <input type='text' value={ search } placeholder='What are you searching for?...' onChange={ handelSearch } className='search' />
    </SearchStyle>
    <Sidebar />
    <CardStyle>
      <div className='wrapper'>
        {filterSearch.map(({ node: post }) => (<div className='card'>
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