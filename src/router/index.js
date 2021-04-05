import HEDiscover from '@/pages/discover'
import HEMine from '@/pages/mine'
import HEFriend from '@/pages/friend'
const routes = [
  {
    path: '/',
    component: HEDiscover,
    exact: true,
    // routes: [
    //   {
    //     path: '/discover/',
    //     component: xxx,
    //     exact: true 
    //   }
    // ] 
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