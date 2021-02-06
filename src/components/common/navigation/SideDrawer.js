import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './side_drawer.css';

const SideDrawer = ({ show, children, closeDrawer }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={300}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
    >
      <aside className='side-drawer' onClick={closeDrawer}>{children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
