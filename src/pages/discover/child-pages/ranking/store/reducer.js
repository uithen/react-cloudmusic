import { Map } from 'immutable'

import {
  CHANGE_CATE_LIST,
  CHANGE_CURRENT_CATE_INDEX,
  CHANGE_CURRENT_CATE
} from './constants'

const defaultRanking = Map({
  cateList: [],
  currentCateIndex: 0,
  currentCate: {}
})

const rankingReducer = (state = defaultRanking, action) => {
  switch (action.type) {
    case CHANGE_CATE_LIST:
      return state.set('cateList', action.cateList)
    case CHANGE_CURRENT_CATE_INDEX:
      return state.set('currentCateIndex', action.index)
    case CHANGE_CURRENT_CATE:
      return state.set('currentCate', action.currentCate)
    default:
      return state 
  }
}

export default rankingReducer