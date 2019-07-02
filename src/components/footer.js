import React from 'react';
import { FooterStyle } from './styles';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return(
  <FooterStyle>
    <p>&bull; Follow Us &bull;</p>
    <a href='https://instagram.com/digitgap' name='instagram' title='Follow us on Instagram' target='_blank' rel='noopener noreferrer'><FaInstagram className='ico instagram' /></a>
    <a href='https://twitter.com/digitgap' name='twitter' title='Follow us on Twitter' target='_blank' rel='noopener noreferrer'><FaTwitter className='ico twitter' /></a>
    <a href='https://youtube.com/digitgap' name='youtube' title='Subscribe to us on YouTube' target='_blank' rel='noopener noreferrer'><FaYoutube className='ico youtube' /></a>
  </FooterStyle>
  );
}
export default Footer;