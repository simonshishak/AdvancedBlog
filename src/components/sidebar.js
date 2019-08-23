import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaRss } from 'react-icons/fa';

const Sidebar = () => {
  return(
  <div className='SidebarStyle'>
    <h1>Latest Video</h1>
    <iframe src='https://www.youtube.com/embed/cYRG5rkmr-s' title='Latest Video' allowFullScreen></iframe>
    <div className='newsLetter'>
      <p><b>Stay up to date</b></p>
      <p>Stay up to date on all things AdvancedBlog by Subscribeing to our news letter below.</p>
      <input type='text' placeholder='Name' className='input' maxLength='100' />
      <input type='email' placeholder='Email address' className='input' maxLength='100' />
    </div>
    <h2>Follow us</h2>
    <a href='https://instagram.com' title='Follow us on Instagram' target='_blank' rel='noopener noreferrer'><FaInstagram className='ico' /></a>
    <a href='https://twitter.com' title='Follow us on Twitter' target='_blank' rel='noopener noreferrer'><FaTwitter className='ico' /></a>
    <a href='https://youtube.com' title='Subscribe to us on YouTube' target='_blank' rel='noopener noreferrer'><FaYoutube className='ico' /></a>
    <a href='https://advancedblog.netlify.com/rss.xml' title='Rss Feed' target='_blank' rel='noopener noreferrer'><FaRss className='ico' /></a>
  </div>
  );
}
export default Sidebar;
