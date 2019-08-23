import React from 'react';
import { Link } from 'gatsby';
import { FaInstagram, FaTwitter, FaYoutube, FaRss } from 'react-icons/fa';

const Footer = () => {
  return(
  <div className='FooterStyle'>
    <h1>AdvancedBlog</h1>
    <div className='section'>
      <Link to='/about' title='About'>About</Link>
      <Link to='/terms' title='Terms'>Terms</Link>
      <Link to='/contact' title='Contact'>Contact</Link>
    </div>
    <div className='right'>
      <p>Follow us</p>
      <a href='https://instagram.com' title='Follow us on Instagram' target='_blank' rel='noopener noreferrer'><FaInstagram className='ico' /></a>
      <a href='https://twitter.com' title='Follow us on Twitter' target='_blank' rel='noopener noreferrer'><FaTwitter className='ico' /></a>
      <a href='https://youtube.com' title='Subscribe to us on YouTube' target='_blank' rel='noopener noreferrer'><FaYoutube className='ico' /></a>
      <a href='https://advancedblog.netlify.com/rss.xml' title='Rss Feed' target='_blank' rel='noopener noreferrer'><FaRss className='ico' /></a>
    </div>
    <div className='copy'>
      <p>&copy; 2019 | AdvancedBlog</p>
    </div>
  </div>
  );
}
export default Footer;