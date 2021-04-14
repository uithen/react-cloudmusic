import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import { discoverMenu } from '@/api/local-data'

import { NavLink } from 'react-router-dom'
import { DiscoverWrapper, StyeldSubNav } from './styled'

export default memo(function HEDiscover(props) {
  const {routes} = props.route
  return (
    <DiscoverWrapper>
      <div className="sub-nav">
        <StyeldSubNav className="wrap-1100">
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
        </StyeldSubNav>        
      </div>
      {renderRoutes(routes)}
    </DiscoverWrapper>
  )
})
