import * as React from 'react'
import { Redirect } from 'react-router'

const HEDiscover = React.lazy(() => import('../pages/discover'))
const HERecommend = React.lazy(() => import('../pages/discover/child-pages/recommend'))
const HERanking = React.lazy(() => import('../pages/discover/child-pages/ranking'))
const HESongs = React.lazy(() => import('../pages/discover/child-pages/songs'))
const HEDjradio = React.lazy(() => import('../pages/discover/child-pages/djradio'))
const HEArtist = React.lazy(() => import('../pages/discover/child-pages/artist'))
const HEAlbum = React.lazy(() => import('../pages/discover/child-pages/album'))

const HEMine = React.lazy(() => import('../pages/mine'))
const HEFriend = React.lazy(() => import('../pages/friend'))
const HESong = React.lazy(() => import('../pages/song'))


const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to ='/discover'/>
  },
  {
    path: '/discover',
    component: HEDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        component: HERecommend
      },
      {
        path: '/discover/ranking',
        component: HERanking
      },
      {
        path: '/discover/songs',
        component: HESongs
      },
      {
        path: '/discover/djradio',
        component: HEDjradio
      },
      {
        path: '/discover/artist',
        component: HEArtist
      },
      {
        path: '/discover/album',
        component: HEAlbum
      }
    ]
  },
  {
    path: '/mine',
    component: HEMine
  },
  {
    path: '/friend',
    component: HEFriend
  },
  {
    path: '/song',
    component: HESong
  }
]

export default routes 