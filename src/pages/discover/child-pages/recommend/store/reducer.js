import { Map } from 'immutable'

import {
  CHANGE_HOT_RCMD,
  CHANGE_ALBUM,
  CHANGE_TOP_BANNER,
  CHANGE_RANKING_UP,
  CHANGE_RANKING_NEW,
  CHANGE_RANKING_ORIGINAL
} from './constants'

// const defaultRecommend = {
//   topBanner: []
// }

// 使用imjs替代assign/解构的方式来维护不可变数据提升性能(结构共享与持久化数据)
const defaultRecommend = Map({
  topBanner: [],
  hotRcmd: [],
  album: [],

  rankingUp: {},
  rankingOriginal: {},
  rankingNew: {}
})

const reducer = (state = defaultRecommend, action) => {
  switch (action.type) {
    case CHANGE_TOP_BANNER: 
      // return {...state, topBanner: action.topBanner}
      return state.set('topBanner', action.topBanner)
    case CHANGE_HOT_RCMD: 
      return state.set('hotRcmd', action.hotRcmd)
    case CHANGE_ALBUM: 
      return state.set('album', action.album)

    case CHANGE_RANKING_UP: 
      return state.set('rankingUp', action.rankingUp)
    case CHANGE_RANKING_NEW: 
      return state.set('rankingNew', action.rankingNew)
    case CHANGE_RANKING_ORIGINAL: 
      return state.set('rankingOriginal', action.rankingOriginal)

    
    default: 
      return state 
  }
}

export default reducer 