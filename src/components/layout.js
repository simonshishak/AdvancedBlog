import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Topbar from './topbar';
import Menu from './menu';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => {
  const [open, setMenu] = useState(false);
  const MenuBtn = open === true ? <FaBars onClick={ e => setMenu(false) } className='ico menu' /> : <FaBars onClick={ e => setMenu(true) } className='ico menu' />;
  return(
  <main style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: 1, minHeight: '100vh' }}>
      <Topbar Menu={ MenuBtn } />
      <Menu open={ open } />
      { children }
    </div>
    <Footer />
  </main>
  );
}
export default Layout;