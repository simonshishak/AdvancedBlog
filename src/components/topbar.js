import React from 'react';
import { Link } from 'gatsby';
import { TopbarStyle } from './styles';
import { FaInstagram, FaTwitter, FaYoutube, FaSearch } from 'react-icons/fa';

const Topbar = (props) => {
  return(
  <TopbarStyle>
    <Link to='/' title='AdvancedBlog' className='logo'>AdvancedBlog</Link>
    <div className='right'>
      <a href='https://instagram.com' title='Follow us on Instagram' target='_blank' rel='noopener noreferrer'><FaInstagram className='ico instagram' /></a>
      <a href='https://twitter.com' title='Follow us on Twitter' target='_blank' rel='noopener noreferrer'><FaTwitter className='ico twitter' /></a>
      <a href='https://youtube.com' title='Subscribe to us on YouTube' target='_blank' rel='noopener noreferrer'><FaYoutube className='ico youtube' /></a>
      <Link to='/search' name='search' title='Search'><FaSearch className='ico search' /></Link>
      { props.Menu }
    </div>
  </TopbarStyle>
  );
}
export default Topbar;