import React, { memo } from 'react'

import { subNav } from '@/api/local-data'

import { NavLink } from 'react-router-dom'
import { SubNavWrapper } from './styled'

export default memo(function HESubNav() {
  return (
    <SubNavWrapper>
      <ul className="wrap-1100">
        {
          subNav.map(navItem => {
            return (
              <li key={navItem.title} className="nav-item">
                <NavLink to={navItem.link} exact>
                  {navItem.title}
                </NavLink>
              </li>
            )
          })
        }  
      </ul>
    </SubNavWrapper>
  )
})
