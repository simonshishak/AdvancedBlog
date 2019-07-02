import React from 'react';
import { Link } from 'gatsby';
import { TopbarStyle } from './styles';
import { FaInstagram, FaTwitter, FaYoutube, FaSearch } from 'react-icons/fa';

const Topbar = (props) => {
  return(
  <TopbarStyle>
    <Link to='/' name='digitgap' title='Digitgap' className='logo'>Digitgap</Link>
    <div className='right'>
      <a href='https://instagram.com/digitgap' name='instagram' title='Follow us on Instagram' target='_blank' rel='noopener noreferrer'><FaInstagram className='ico instagram' /></a>
      <a href='https://twitter.com/digitgap' name='twitter' title='Follow us on Twitter' target='_blank' rel='noopener noreferrer'><FaTwitter className='ico twitter' /></a>
      <a href='https://youtube.com/digitgap' name='youtube' title='Subscribe to us on YouTube' target='_blank' rel='noopener noreferrer'><FaYoutube className='ico youtube' /></a>
      <Link to='/search' name='search' title='Search'><FaSearch className='ico search' /></Link>
      { props.Menu }
    </div>
  </TopbarStyle>
  );
}
export default Topbar;