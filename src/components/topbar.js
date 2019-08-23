import React from 'react';
import { Link } from 'gatsby';
import { FaSearch } from 'react-icons/fa';

const Topbar = (props) => {
  return(
  <div className='TopbarStyle'>
    <Link to='/' title='AdvancedBlog' className='logo'>AdvancedBlog</Link>
    <div className='right'>
      <Link to='/search' name='search' title='Search'><FaSearch className='ico' /></Link>
      { props.Menu }
    </div>
  </div>
  );
}
export default Topbar;