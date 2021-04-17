// 推荐页数据请求
import {
  getTopBanner,
  getHotRcmd
} from '@/api/recommend-request'

import {
  CHANGE_TOP_BANNER,
  CHANGE_HOT_RCMD
} from './constants'

// 推荐页-轮播
const changeTopBannerAction = topBanner => ({
  type: CHANGE_TOP_BANNER,
  topBanner
})
const getTopBannerAction = () => {
  return async (dispatch, getState) => {
    const res = await getTopBanner()
    dispatch(changeTopBannerAction(res.banners))
  }
}

// 推荐页-热门推荐
const changeHotRcmdAction = hotRcmd => ({
  type: CHANGE_HOT_RCMD,
  hotRcmd: hotRcmd.result
})
const getHotRcmdAction = (limit) => {
  return async dispatch => {
    const res = await getHotRcmd(limit)
    dispatch(changeHotRcmdAction(res))
  }
}
// 推荐页-新碟上架
// 推荐页-榜单

export {
  getTopBannerAction,
  getHotRcmdAction
}