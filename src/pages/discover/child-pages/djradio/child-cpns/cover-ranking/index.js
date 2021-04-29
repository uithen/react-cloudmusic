import React, { memo } from 'react'

import { convertImgMini } from '@/utils/handle-format'

import { CoverWrapper } from './styled'

export default memo(function HERadioRankingCover(props) {
  const { radio } = props

  return (
    <CoverWrapper>
      <a href="/#">
        <img src={convertImgMini(radio.picUrl, 120)} alt="" />
      </a>
      <div className="info">
        <h2 className="title">{radio.name}</h2>
        <div className="nickname sprite_icon2">
          <i className="sprite_icon2 left">&nbsp;</i>
          <em> {radio.dj.nickname}</em>
        </div>
        <div className="count">
          <span className="phase">共{radio.programCount}期</span>
          <span className="subscribe">订阅{radio.subCount}次</span>
        </div>
      </div>
    </CoverWrapper>
  )
})
