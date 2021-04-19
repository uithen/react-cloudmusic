// 推荐页数据请求
import {
  getTopBanner,
  getHotRcmd,
  getAlbum,
  getRankingList,
  getArtistList
} from '@/api/recommend-request'

import {
  CHANGE_TOP_BANNER,
  CHANGE_HOT_RCMD,
  CHANGE_ALBUM,
  CHANGE_RANKING_UP,
  CHANGE_RANKING_ORIGINAL,
  CHANGE_RANKING_NEW,
  CHANGE_ARTIST_LIST
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
const changeAlbumAction = res => ({
  type: CHANGE_ALBUM,
  album: res.albums
})
export const getAlbumAction = limit => {
  return async dispatch => {
    const res = await getAlbum(limit)
    dispatch(changeAlbumAction(res))
  }
}

// 推荐页-榜单
const changeRankingNew = res => ({
  type: CHANGE_RANKING_NEW, // 0
  rankingNew: res.playlist
})
const changeRankingOriginal = res => ({
  type: CHANGE_RANKING_ORIGINAL, // 2
  rankingOriginal: res.playlist
})
const changeRankingUp = res => ({
  type: CHANGE_RANKING_UP, // 3
  rankingUp: res.playlist
})
export const getRankingListAction = idx => {
  return async dispatch => {
    const res = await getRankingList(idx)
    switch (idx) {
      case 0: 
        return dispatch(changeRankingUp(res))
      case 2: 
        return dispatch(changeRankingNew(res))
      case 3: 
        return dispatch(changeRankingOriginal(res))
      default: 
    }
  }
}

//推荐页-入驻歌手列表
const changeArtistListAction = res => ({
  type: CHANGE_ARTIST_LIST,
  artistList: res.artists 
})
export const getArtistListAction = (limit, type) => {
  return async dispatch => {
    const res = await getArtistList(limit, type)
    dispatch(changeArtistListAction(res))
  }
}