import React, { memo } from 'react'

import { convertImgMini } from '@/utils/handle-format'

import { ItemWrapper } from './styled'

export default memo(function HEArtistItem(props) {
  const { info, index } = props
  return (
    <ItemWrapper>
      {
        index < 10 && (
          <div className="image">
            <img src={convertImgMini(info.img1v1Url, 130)} alt="" />
          </div>
        )
      }
      <div className="info">
        <span className="name">{info.name}</span>
        <i className="sprite_icon2 icon"></i>
      </div>
    </ItemWrapper>
  )
})
