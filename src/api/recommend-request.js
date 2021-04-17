import request from './request'

const getTopBanner = () => {
  return request({
    url: '/banner'
  })
}

const getHotRcmd = (limit) => {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export {
  getTopBanner,
  getHotRcmd
}