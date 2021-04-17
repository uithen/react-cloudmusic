import request from './request'

export const getTopBanner = () => {
  return request({
    url: '/banner'
  })
}

export const getHotRcmd = limit => {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export const getNewAlbum = limit => {
  return request({
    url: '/top/album',
    params: {
      limit 
    }
  })
}