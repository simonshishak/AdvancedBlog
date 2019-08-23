import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Topbar from './topbar';
import Menu from './menu';
import Footer from './footer';
import './styles/main.scss';

const Layout = ({ children }) => {
  const [open, setMenu] = useState(false);
  const MenuBtn = open === true ? <FaBars onClick={ e => setMenu(false) } className='ico' /> : <FaBars onClick={ e => setMenu(true) } className='ico' />;
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