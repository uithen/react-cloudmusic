import { 
  getRankingCateList,
  getRankingCurrentCate
} from '@/api/ranking-request'

import { 
  CHANGE_CATE_LIST, 
  CHANGE_CURRENT_CATE,
  CHANGE_CURRENT_CATE_INDEX
 } from './constants'

const changeCateListAction = res => ({
  type: CHANGE_CATE_LIST,
  cateList: res.list
})
const changeCurrentCateAction = res => ({
  type: CHANGE_CURRENT_CATE,
  currentCate: res.playlist // playlist ? playList ? !!! 
})
const changeCurrentCateIndexAction = index => ({
  type: CHANGE_CURRENT_CATE_INDEX,
  index
})

const getCateListAction = () => {
  return async dispatch => {
    const res = await getRankingCateList()
    dispatch(changeCateListAction(res))
  }
}
const getCurrentCateAction = id => {
  return async dispatch => {
    const res = await getRankingCurrentCate(id)
    dispatch(changeCurrentCateAction(res))
  }
}

export {
  getCateListAction,
  getCurrentCateAction,
  changeCurrentCateIndexAction
}