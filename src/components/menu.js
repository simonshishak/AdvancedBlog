import React from 'react';
import { Link } from 'gatsby';
import { MenuStyle } from './styles';
import { Transition, animated } from 'react-spring/renderprops';

const Menu = (props) => {
  return(
  <React.Fragment>
    {props.open ? <MenuStyle>
      <Transition native items={ true } from={{ height: '100%', transform: 'translate3d(100%,0,0)' }} enter={{ height: '100%', transform: 'translate3d(0,0,0)' }} leave={{ height: '100%', transform: 'translate3d(100%,0,0)' }}>
        {item => props => <animated.div style={ props }>
          <div className='nav'>
            <Link to='/' name='home' title='Home'>Home</Link>
            <Link to='/' name='home' title='Home'>Home</Link>
            <Link to='/' name='home' title='Home'>Home</Link>
            <Link to='/' name='home' title='Home'>Home</Link>
          </div>
        </animated.div>}
      </Transition>
    </MenuStyle> : null}
  </React.Fragment>
  );
}
export default Menu;