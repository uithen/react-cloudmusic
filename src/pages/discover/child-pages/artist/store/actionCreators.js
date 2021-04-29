import { getArtistList} from '@/api/artist-request'
import * as actionTypes from './constants'

const changeArtistListAction = res => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList: res.artists
})

export const changeCurrentAreaAction = currentArea => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea
})

export const changeCurrentTypeAction = currentType => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType
})


// 获取歌手分类列表,不同区块(area)以及不同类型(type)的接口不一
export const getArtistListAction = (area, type, alpha) => {
  return async dispatch => {
    const res = await getArtistList(area, type, alpha)
    dispatch(changeArtistListAction(res))
  }
}