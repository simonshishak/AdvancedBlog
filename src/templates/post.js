import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { DiscussionEmbed } from 'disqus-react';
import { BlogStyle } from '../components/styles';
import Content, { HTMLContent } from '../components/content';

export const PostTemplate = ({ banner, title, contentComponent, content }) => {
  const PostContent = contentComponent || Content;
  const disqusShortname = 'example';
  const disqusConfig = {
		url: 'http://www.example.com/example-thread',
		identifier: 'something-unique-12345',
		title: 'Example Thread',
		category_id: '123456',
    shortname: 'example'
  };
  return(
  <BlogStyle>
    <div className='banner'>
      <ul />
      <Img fluid={ banner } alt={ title } className='bannerImage' />
    </div>
    <div className='wrapper'>
      <h1>{ title }</h1>
      <PostContent content={ content } />
      <DiscussionEmbed shortname={ disqusShortname } config={ disqusConfig } />
    </div>
  </BlogStyle>
  );
}
PostTemplate.propTypes = {
  title: PropTypes.string,
  contentComponent: PropTypes.func,
  content: PropTypes.node.isRequired
}
const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return(
  <Layout>
    <SEO title={ `${ post.frontmatter.title } |` || 'Opps..? |' } />
    <PostTemplate banner={ post.frontmatter.cover.childImageSharp.fluid } title={ post.frontmatter.title } contentComponent={ HTMLContent } content={ post.html } />
  </Layout>
  );
}
BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}
export default BlogPost;
export const blogPostQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
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
`