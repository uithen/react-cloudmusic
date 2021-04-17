// 推荐页数据请求
import {
  getTopBanner,
  getHotRcmd,
  getNewAlbum
} from '@/api/recommend-request'

import {
  CHANGE_TOP_BANNER,
  CHANGE_HOT_RCMD,
  CHANGE_NEW_ALBUM
} from './constants'

// 推荐页-轮播
const changeTopBannerAction = topBanner => ({
  type: CHANGE_TOP_BANNER,
  topBanner
})
export const getTopBannerAction = () => {
  return async (dispatch, getState) => {
    const res = await getTopBanner()
    dispatch(changeTopBannerAction(res.banners))
  }
}

// 推荐页-热门推荐
const changeHotRcmdAction = res => ({
  type: CHANGE_HOT_RCMD,
  hotRcmd: res.result
})
export const getHotRcmdAction = limit => {
  return async dispatch => {
    const res = await getHotRcmd(limit)
    dispatch(changeHotRcmdAction(res))
  }
}

// 推荐页-新碟上架
const changeNewAlbumAction = res => ({
  type: CHANGE_NEW_ALBUM,
  newAlbum: res.albums
})
export const getNewAlbumAction = limit => {
  return async dispatch => {
    const res = await getNewAlbum(limit)
    dispatch(changeNewAlbumAction(res))
  }
}

// 推荐页-榜单
