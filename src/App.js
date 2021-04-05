import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from '@/router'

import HEAppHeader from '@/components/app-header'
import HEAppFooter from '@/components/app-footer' 

export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <HEAppHeader />
        {renderRoutes(routes)}
        <HEAppFooter />
      </HashRouter>
    </div>
  )
})
