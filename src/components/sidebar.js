import React from 'react';
import { SidebarStyle } from './styles';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Sidebar = () => {
  return(
  <SidebarStyle>
    <h1>Latest Video</h1>
    <iframe src='https://www.youtube.com/embed/cYRG5rkmr-s' title='Latest Video' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
    <div className='newsLetter'>
      <p><b>Stay up to date</b></p>
      <p>Want to stay up to date why not subscrib to our news letter below.</p>
      <input type='email' placeholder='email@example.com' className='input' maxLength='100' />
    </div>
    <h2>Follow Us</h2>
    <a href='https://instagram.com/digitgap' name='instagram' title='Follow us on Instagram' target='_blank' rel='noopener noreferrer'><FaInstagram className='ico instagram' /></a>
    <a href='https://twitter.com/digitgap' name='twitter' title='Follow us on Twitter' target='_blank' rel='noopener noreferrer'><FaTwitter className='ico twitter' /></a>
    <a href='https://youtube.com/digitgap' name='youtube' title='Subscribe to us on YouTube' target='_blank' rel='noopener noreferrer'><FaYoutube className='ico youtube' /></a>
  </SidebarStyle>
  );
}
export default Sidebar;