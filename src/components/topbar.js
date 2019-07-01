import React from 'react';
import { Link } from 'gatsby';
import { TopbarStyle } from './styles';
import { FaInstagram, FaTwitter, FaYoutube, FaSearch } from 'react-icons/fa';

const Topbar = (props) => {
  return(
  <TopbarStyle>
    <Link to='/' name='blog' title='Blog' className='logo'>Avolunar</Link>
    <div className='right'>
      <a href='https://instagram.com/' name='instagram' title='Instagram' target='_blank' rel='noopener noreferrer'><FaInstagram className='ico instagram' /></a>
      <a href='https://twitter.com/' name='twitter' title='Twitter' target='_blank' rel='noopener noreferrer'><FaTwitter className='ico twitter' /></a>
      <a href='https://youtube.com/' name='youtube' title='YouTube' target='_blank' rel='noopener noreferrer'><FaYoutube className='ico youtube' /></a>
      <Link to='/search' name='search' title='Search'><FaSearch className='ico search' /></Link>
      { props.Menu }
    </div>
  </TopbarStyle>
  );
}
export default Topbar;