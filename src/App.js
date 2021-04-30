import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'

import store from './store'
import routes from '@/router'

import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import HEBackTop from '@/components/back-top'
import HEAppHeader from '@/components/app-header'
import HEAppFooter from '@/components/app-footer'
import HEAppPlaybar from '@/components/app-playbar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <HEAppHeader />
        <Suspense fallback={<div>loading...</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <HEAppFooter />
        <HEAppPlaybar />
        <HEBackTop />
      </HashRouter>
    </Provider>
  )
})
