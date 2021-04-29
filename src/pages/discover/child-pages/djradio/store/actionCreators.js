import {
  getRadioCateList,
  getRadioRecommends,
  getRadioRanking
} from '@/api/djradio-request'

import { 
  CHANGE_CATEGORIES,
  CHANGE_CURRENT_CATE_ID,
  CHANGE_RANKING_LIST,
  CHANGE_RECOMMENDS
 } from './constants'

const changeRadioCategoriesAction = res => ({
  type: CHANGE_CATEGORIES,
  categories: res.categories
})
// 记录当前分类id
export const changeCurrentCateIdAction = id => ({
  type: CHANGE_CURRENT_CATE_ID,
  id
})
const changeRadioRecommendsAction = res => ({
  type: CHANGE_RECOMMENDS,
  recommends: res.djRadios 
})
const changeRadioRankingAction = res => ({
  type: CHANGE_RANKING_LIST,
  rankingList: res.djRadios
})
// 获取电台总分类
export const getRadioCategoriesAction = async dispatch => {
  const res = await getRadioCateList()
  dispatch(changeRadioCategoriesAction(res))
}
// 获取对应分类id的电台[推荐区]
export const getRadioRecommendsAction = cateId => {
  return async dispatch => {
    const res = await getRadioRecommends(cateId)
    dispatch(changeRadioRecommendsAction(res))
  }
}

// 获取对应分类id的电台[排行区]
export const getRadioRankingAction = page => {
  return async (dispatch, getState) => {
    const cateId = getState().getIn(['djradio', 'currentCateId'])
    const res = await getRadioRanking(cateId, 30, (page-1) * 30 ) 
    console.log(cateId)
    dispatch(changeRadioRankingAction(res))
  }
}