---
type: deals
date: 2016-12-17T15:04:10.000Z
cover: /img/flavor_wheel.jpg
title: Sec Test Blog Post
deal: https://google.com
---

![Flavor Wheel Image](/img/flavor_wheel.jpg)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```jsx
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
```

> Test Quote

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat:

* Lorem ipsum dolor sit amet
* Lorem ipsum dolor
* Lorem ipsum
* Lorem

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

<iframe width='560' height='315' src='https://www.youtube.com/embed/cYRG5rkmr-s' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.