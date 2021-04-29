import { Map } from 'immutable'
import {
  CHANGE_CATEGORIES,
  CHANGE_CURRENT_CATE_ID,
  CHANGE_RECOMMENDS,
  CHANGE_RANKING_LIST
} from './constants'

const defaultRadio = Map({
  categories: [],
  currentCateId: 3,
  recommends: [],
  rankingList: []
})

const radioReducer = (state = defaultRadio, action) => {
  switch (action.type) {
    case CHANGE_CATEGORIES:
      return state.set('categories', action.categories)
    case CHANGE_CURRENT_CATE_ID: 
      return state.set('currentCateId', action.id)
    case CHANGE_RECOMMENDS: 
      return state.set('recommends', action.recommends)
    case CHANGE_RANKING_LIST: 
      return state.set('rankingList', action.rankingList)
    default:
      return state
  }
}

export default radioReducer