import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../utils/context/AuthContext';
import './nav_links.css'

const NavLinks = props => {
    const auth = useContext(AuthContext);
  return <ul className='nav-links'>
    <li>
      <NavLink to='/' exact>All Users</NavLink>
    </li>
    {auth.isLogin && <li>
      <NavLink to='/u1/places'>My Places</NavLink>
    </li>}
    {auth.isLogin && <li>
      <NavLink to='/places/new'>Add Places</NavLink>
    </li>}
    {!auth.isLogin && <li>
      <NavLink to='/auth'>Authentication</NavLink>
    </li>}
    { auth.isLogin && <li>
      <button onClick={auth.logout}>Log Out</button>
    </li>}
  </ul>
}

export default NavLinks;