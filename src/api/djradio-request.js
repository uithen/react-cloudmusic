import request from './request'

export const getRadioCateList = () => {
  return request({
    url: '/dj/catelist'
  })
}

export const getRadioRecommends = cateId => {
  return request({
    url: '/dj/recommend/type',
    params: {
      type: cateId
    }
  })
}

export const getRadioRanking = (cateId, limit, offset) => {
  return request({
    url: '/dj/radio/hot',
    params: {
      cateId,
      limit,
      offset
    }
  })
}