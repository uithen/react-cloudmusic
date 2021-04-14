import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import { discoverMenu } from '@/api/local-data'

import { NavLink } from 'react-router-dom'
import { DiscoverWrapper, DiscoverSubNav } from './styled'

export default memo(function HEDiscover(props) {
  const {routes} = props.route
  return (
    <DiscoverWrapper>
      <div className="sub-nav">
        <DiscoverSubNav className="wrap-1100">
          {
            discoverMenu.map(navItem => {
              return (
                <li key={navItem.title} className="nav-item">
                  <NavLink to={navItem.link} exact>
                    {navItem.title}
                  </NavLink>
                </li>
              )
            })
          }
        </DiscoverSubNav>        
      </div>
      {renderRoutes(routes)}
    </DiscoverWrapper>
  )
})
