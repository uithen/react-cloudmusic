import HEDiscover from '../pages/discover'
import HERecommend from '../pages/discover/child-pages/recommend'
import HERanking from '../pages/discover/child-pages/ranking'
import HESongs from '../pages/discover/child-pages/songs'
import HEDjradio from '../pages/discover/child-pages/djradio'
import HEArtist from '../pages/discover/child-pages/artist'
import HEAlbum from '../pages/discover/child-pages/album'

import HEMine from '../pages/mine'
import HEFriend from '../pages/friend'



import { Redirect } from 'react-router'

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
]

export default routes 