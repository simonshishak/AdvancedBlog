import React from 'react';
import { Link } from 'gatsby';
import { Transition, animated } from 'react-spring/renderprops';

const Menu = (props) => {
  return(
  <React.Fragment>
    {props.open ? <div className='MenuStyle'>
      <Transition native items={ true } from={{ height: '100%', transform: 'translate3d(100%,0,0)' }} enter={{ height: '100%', transform: 'translate3d(0,0,0)' }} leave={{ height: '100%', transform: 'translate3d(100%,0,0)' }}>
        {item => props => <animated.div style={ props }>
          <div className='nav'>
            <Link to='/deals' title='Deals'>Deals</Link>
            <Link to='/howto' title='How To'>How To</Link>
            <Link to='/news' title='News'>News</Link>
          </div>
        </animated.div>}
      </Transition>
    </div> : null}
  </React.Fragment>
  );
}
export default Menu;