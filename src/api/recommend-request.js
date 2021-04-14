import request from './request'

const getTopBanner = () => {
  return request({
    url: '/banner'
  })
}

export {
  getTopBanner
}