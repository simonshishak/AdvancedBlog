import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { DiscussionEmbed } from 'disqus-react';
import { BlogStyle } from '../components/styles';
import Content, { HTMLContent } from '../components/content';
import { FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedin, FaReddit } from 'react-icons/fa';

export const PostTemplate = ({ banner, title, deal, contentComponent, content }) => {
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
    <div className='titleBar'>
      <p><FaArrowLeft onClick={ () => window.history.back() } name='back' title='Go Back' className='ico' /> { title }</p>
    </div>
    <div className='wrapper'>
      <PostContent content={ content } />
      <div className='shareBar'>
        <a href='https://instagram.com/digitgap' name='instagram' title='Follow us on Instagram' target='_blank' rel='noopener noreferrer'><button className='shareBtn fb'><FaFacebookF className='ico' /> Share</button></a>
        <a href='https://twitter.com/digitgap' name='twitter' title='Follow us on Twitter' target='_blank' rel='noopener noreferrer'><button className='shareBtn twitter'><FaTwitter className='ico' /> Share</button></a>
        <a href='https://youtube.com/digitgap' name='youtube' title='Subscribe to us on YouTube' target='_blank' rel='noopener noreferrer'><button className='shareBtn in'><FaLinkedin className='ico' /> Share</button></a>
        <a href='https://youtube.com/digitgap' name='youtube' title='Subscribe to us on YouTube' target='_blank' rel='noopener noreferrer'><button className='shareBtn reddit'><FaReddit className='ico' /> Share</button></a>
        { deal ? <a href={ deal } name='deal' title='View the deal!' target='_blank' rel='noopener noreferrer'><button className='dealBtn'>View the deal!</button></a> : null }
      </div>
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
    <PostTemplate banner={ post.frontmatter.cover.childImageSharp.fluid } title={ post.frontmatter.title } deal={ post.frontmatter.deal } contentComponent={ HTMLContent } content={ post.html } />
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
        deal
      }
    }
  }
`