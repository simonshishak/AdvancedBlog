import React from 'react';
import { SidebarStyle } from './styles';

const Sidebar = () => {
  return(
  <SidebarStyle>
    <h1>Latest Video</h1>
    <iframe src='https://www.youtube.com/embed/cYRG5rkmr-s' title='Latest Video' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
  </SidebarStyle>
  );
}
export default Sidebar;