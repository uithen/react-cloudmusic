import { Map } from 'immutable'

import {
  CHANGE_HOT_RCMD,
  CHANGE_NEW_ALBUM,
  CHANGE_TOP_BANNER
} from './constants'

// const defaultRecommend = {
//   topBanner: []
// }

// 使用imjs替代assign/解构的方式来维护不可变数据提升性能(结构共享与持久化数据)
const defaultRecommend = Map({
  topBanner: [],
  hotRcmd: [],
  newAlbum: []
})

const reducer = (state = defaultRecommend, action) => {
  switch (action.type) {
    case CHANGE_TOP_BANNER: 
      // return {...state, topBanner: action.topBanner}
      return state.set('topBanner', action.topBanner)
    case CHANGE_HOT_RCMD: 
      return state.set('hotRcmd', action.hotRcmd)
    case CHANGE_NEW_ALBUM: 
      return state.set('newAlbum', action.newAlbum)
    default: 
      return state 
  }
}

export default reducer 