import React from 'react';
import { FooterStyle } from './styles';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return(
  <FooterStyle>
    <p>&bull; Follow Us &bull;</p>
    <a href='https://instagram.com/' name='instagram' title='Instagram' target='_blank' rel='noopener noreferrer'><FaInstagram className='ico instagram' /></a>
    <a href='https://twitter.com/' name='twitter' title='Twitter' target='_blank' rel='noopener noreferrer'><FaTwitter className='ico twitter' /></a>
    <a href='https://youtube.com/' name='youtube' title='YouTube' target='_blank' rel='noopener noreferrer'><FaYoutube className='ico youtube' /></a>
  </FooterStyle>
  );
}
export default Footer;