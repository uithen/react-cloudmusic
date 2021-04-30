import { getHotAlbums, getAllAlbums } from "@/api/album-request"
import * as actionTypes from './constants'

const changeHotAlbumsAction = res => ({
  type: actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums
})
const changeAllAlbumsAction = res => ({
  type: actionTypes.CHANGE_ALL_ALBUMS,
  allAlbums: res.albums
})

// 获取热门专辑数据
export const getHotAlbumsAction = async dispatch => {
  const res = await getHotAlbums()
  dispatch(changeHotAlbumsAction(res))
}

// 获取全部专辑
export const getAllAlbumsAction = (limit= 30, offset= 0) => {
  return async dispatch => {
    const pageOffset = (offset - 1) * limit 
    const res = await getAllAlbums(limit, pageOffset)
    dispatch(changeAllAlbumsAction(res))
  }
}
