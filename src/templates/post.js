import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { DiscussionEmbed } from 'disqus-react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import Content, { HTMLContent } from '../components/content';

export const PostTemplate = ({ route, banner, title, deal, contentComponent, content }) => {
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
  <div className='BlogStyle'>
    <div className='wrapper'>
      <div className='titleBar'>
        <p>{ title }</p>
      </div>
      <PostContent content={ content } />
      <div className='shareBar'>
        <a href={ `https://www.facebook.com/sharer.php?u=https://advancedblog.netlify.com${ route }&amp;t=${ title }` } title='Share To Facebook' target='_blank' rel='noopener noreferrer'><button className='shareBtn fb'><FaFacebookF className='ico' /> Share</button></a>
        <a href={ `https://twitter.com/intent/tweet?url=https://advancedblog.netlify.com${ route }&amp;text=${ title }` } title='Share To Twitter' target='_blank' rel='noopener noreferrer'><button className='shareBtn twitter'><FaTwitter className='ico' /> Share</button></a>
        {deal ? <a href={ deal } title='View the deal!' target='_blank' rel='noopener noreferrer'><button className='dealBtn'>View the deal!</button></a> : null}
      </div>
      <DiscussionEmbed shortname={ disqusShortname } config={ disqusConfig } />
    </div>
  </div>
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
    <SEO title={ post.frontmatter.title ? `${ post.frontmatter.title } |` : '404: Not Found!' } />
    <PostTemplate route={ post.fields.slug } date={ post.frontmatter.date } banner={ post.frontmatter.cover.childImageSharp.fluid } title={ post.frontmatter.title } deal={ post.frontmatter.deal } contentComponent={ HTMLContent } content={ post.html } />
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
      fields {
        slug
      }
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