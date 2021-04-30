import React, { memo } from 'react'

import { renderRoutes } from 'react-router-config'
import { DiscoverWrapper } from './styled'
import HESubNav from '@/components/sub-nav'

export default memo(function HEDiscover(props) {
  const {routes} = props.route
  
  return (
    <DiscoverWrapper>
      <HESubNav />
      {renderRoutes(routes)}
    </DiscoverWrapper>
  )
})