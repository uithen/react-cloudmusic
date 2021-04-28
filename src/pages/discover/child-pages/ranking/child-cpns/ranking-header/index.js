import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { convertImgMini, formatMonthDay } from '@/utils/handle-format'

import HEOperationBar from '@/components/operation-bar'
import {
  RankingHeaderWrapper
} from './styled'

export default memo(function HERankingHeader() {
  const currentCate = useSelector(
    state => state.getIn(['ranking', 'currentCate']),
    shallowEqual
  )
  const imgUrl = convertImgMini(currentCate.coverImgUrl)

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={imgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{currentCate.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(currentCate.updateTime)}</div>
          <div className="update-f">（{"每日更新:TODO"}）</div>
        </div>
        <HEOperationBar 
          favorTitle={`(${currentCate.subscribedCount})`}
          shareTitle={`(${currentCate.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${currentCate.commentCount})`}
        />
      </div>
    </RankingHeaderWrapper>
  )
})
