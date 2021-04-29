import request from './request'

const getSongsCategories = () => {
  return request({
    url: '/playlist/catlist'
  })
}

const getSongsCurrentCate = (cat = '全部', offset = 0, limit = 35) => {
  return request({
    url: '/top/playlist',
    params: {
      cat, 
      limit,
      offset 
    }
  })
}

export {
  getSongsCategories,
  getSongsCurrentCate
}