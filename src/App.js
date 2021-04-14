import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import store from './store'
import routes from '@/router'

import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import HEAppHeader from '@/components/app-header'
import HEAppFooter from '@/components/app-footer' 

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HEAppHeader />
        {renderRoutes(routes)}
        <HEAppFooter />
      </HashRouter>
    </Provider>
  )
})
