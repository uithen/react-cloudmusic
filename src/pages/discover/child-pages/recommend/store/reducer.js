import { Map } from 'immutable'

import {
  CHANGE_TOP_BANNER
} from './constants'

// const defaultRecommend = {
//   topBanner: []
// }

// 使用imjs替代assign/解构的方式来维护不可变数据,进行性能优化(结构共享与持久化数据)
const defaultRecommend = Map({
  topBanner: []
})

const reducer = (state = defaultRecommend, action) => {
  switch (action.type) {
    case CHANGE_TOP_BANNER: 
      // return {...state, topBanner: action.topBanner}
      return state.set('topBanner', action.topBanner)
    default: 
      return state 
  }
}

export default reducer 