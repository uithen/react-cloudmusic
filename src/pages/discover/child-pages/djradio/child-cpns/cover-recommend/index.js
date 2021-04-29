import React, { memo } from 'react'

import { convertImgMini } from '@/utils/handle-format'

import { CoverWrapper } from './styled'

export default memo(function HERadioRecommendCover(props) {
  const { info } = props

  return (
    <CoverWrapper>
      <a href="/#">
        <img src={convertImgMini(info.picUrl, 150)} alt="" />
      </a>
      <a href="/#" className="text-nowrap name">{info.name}</a>
      <p className="text-nowrap">{info.desc}</p>
    </CoverWrapper>
  )
})
