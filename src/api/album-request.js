import request from './request'

export const getHotAlbums = () => {
  return request({
    url: '/album/newest'
  })
}

export const getAllAlbums = (limit, offset) => {
  return request({
    url: '/top/album',
    params: {
      limit,
      offset 
    }
  })
}