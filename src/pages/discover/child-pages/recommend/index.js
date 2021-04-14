import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

export default memo(function HERecommend() {
  const dispatch = useDispatch() 
  // const topBanner = useSelector(state => state.recommend.topBanner, shallowEqual)
  // const topBanner = useSelector(state => state.recommend.get('topBanner'), shallowEqual)
  // const topBanner = useSelector(state => state.get('recommend').get('topBanner'), shallowEqual)
  const topBanner = useSelector(state => state.getIn(['recommend', 'topBanner']), shallowEqual)
  console.log(topBanner)
  useEffect(
    () => {
      // 发送网络请求
      dispatch(getTopBannerAction())
    },
    [dispatch]
  )

  return (
    <div>
      HERecommend-{topBanner.length}
    </div>
  )
})






// 本次项目redux管理不采用传统connect映射做法,转向hooks

// const HERecommend = memo(props => {
//   const {getTopBanner, topBanner} = props
//   useEffect(
//     () => {
//       getTopBanner() 
//     },
//     [getTopBanner]
//   )
//   return (
//     <div>
//       HERecommend-{topBanner.length}
//     </div>
//   )
// })
// const mapStateToProps = state => ({
//   topBanner: state.recommend.topBanner
// })
// const mapDispatchToProps = dispatch => ({
//   getTopBanner() {
//     dispatch(getTopBannerAction()) 
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(HERecommend)
