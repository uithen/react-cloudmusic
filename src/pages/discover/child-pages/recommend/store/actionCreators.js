import {
  getTopBanner
} from '@/api/recommend-request'

import {
  CHANGE_TOP_BANNER
} from './constants'

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

export {
  getTopBannerAction
}