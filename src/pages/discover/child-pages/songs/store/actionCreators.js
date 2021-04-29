import { getSongsCategories, getSongsCurrentCate } from "@/api/songs-request"
import { handleSongsCategories } from '@/utils/handle-data'
import { PER_PAGE_NUMBER } from '@/common/constants'

import {
  CHANGE_CATE_LIST, 
  CHANGE_CURRENT_CATE_SONGS,
  CHANGE_CURRENT_CATE_SONGS_NAME
} from './constants'

const changeCategoriesAction = cateList => ({
  type: CHANGE_CATE_LIST,
  cateList
})

const changecurrentCateSongsAction = currentCateSongs => ({
  type: CHANGE_CURRENT_CATE_SONGS,
  currentCateSongs
})

// 获取所有分类
const getCategoriesAction = async dispatch => {
  const categories = await getSongsCategories()
  // 规划分类数据的结构
  const cateList = handleSongsCategories(categories)
  dispatch(changeCategoriesAction(cateList))
}

// 记录当前分类歌单的标识
const changeCurrentCateSongsNameAction = currentCateSongsName => ({
  type: CHANGE_CURRENT_CATE_SONGS_NAME,
  currentCateSongsName
})

// 获取所属标识分类下的歌单列表
const getCurrentCateSongsAction = (page) => {
  return async (dispatch, getState) => {
    const categoryName = getState().getIn(['songs', 'currentCateSongsName'])
    // default: categoryName='全部', offset=0, limit=35
    const res = await getSongsCurrentCate(categoryName, page * PER_PAGE_NUMBER)
    dispatch(changecurrentCateSongsAction(res))
  }
} 


export {
  getCategoriesAction,
  changeCurrentCateSongsNameAction,
  getCurrentCateSongsAction
}
