import React from 'react';
import { NavLink } from 'react-router-dom';

import links from '../../utils/links/links';

const NavLinksComponent = ({ toggle_Sidebar }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { path, id, icon, text } = link;

        return (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            key={id}
            onClick={toggle_Sidebar}
          >
            <span className='icon'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinksComponent;
