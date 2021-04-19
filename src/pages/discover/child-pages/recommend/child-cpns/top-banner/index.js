import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { 
  TopBannerWrapper, 
  BannerLeft, 
  BannerRight, 
  BannerControl
 } from './styled'


export default memo(function HETopBanner() {
  const [crtIdx, setCrtIdx] = useState(0)

  const topBanner = useSelector(
    state => state.getIn(['recommend', 'topBanner']), 
    shallowEqual
  )
  const dispatch = useDispatch() 

  useEffect(
    () => {
      // 发送网络请求
      dispatch(getTopBannerAction())
    },
    [dispatch]
  )
  // 获取antd组件实例,以便使用其提供的api
  const bannerRef = useRef()
  // 拿到当前索引同步[高斯模糊图片bgImg]的url
  const switchIndex = useCallback(
    (from, to) => {
      setTimeout(() => {
        setCrtIdx(to)
      }, 0)
    },
    []
  )

  // 轮播背景(网易使用的是以同一张图片的url拼接query的方式实现的高斯模糊)
  const bgImg = topBanner[crtIdx] 
    && topBanner[crtIdx].imageUrl + '?imageView&blur=40x20'

  return (
    <TopBannerWrapper bgImg={bgImg}>
      <div className="banner wrap-980">
        <BannerLeft>
          <Carousel
            ref={bannerRef} 
            beforeChange={switchIndex}
            effect="fade" 
            autoplay
          >
            {
              topBanner.map(banner => {
                return (
                  <div key={banner.targetId} className="banner-item">
                    <img 
                      src={banner.imageUrl} 
                      className="banner-img"
                      alt={banner.typeTitle} 
                    />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a
            href="https://music.163.com/#/download" 
            rel="noreferrer noopener"
            target="_blank" 
          >
            下载客户端
          </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button
            onClick={e => bannerRef.current.prev()} 
            className="arrow arrow-prev"
          >
          </button>
          <button
            onClick={e => bannerRef.current.next()} 
            className="arrow arrow-next"
          >
          </button>
        </BannerControl>
      </div>
    </TopBannerWrapper>
  )
})



// 本次项目redux管理不采用传统connect映射做法,转向hooks

// const HETopBanner = memo(props => {
//   const {getTopBanner, topBanner} = props
//   useEffect(
//     () => {
//       getTopBanner() 
//     },
//     [getTopBanner]
//   )
//   return (
//     <div>
//       HETopBanner-{topBanner.length}
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
// export default connect(mapStateToProps, mapDispatchToProps)(HETopBanner)