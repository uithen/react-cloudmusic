import React, { memo } from 'react'

import { convertImgMini } from '@/utils/handle-format'

import { AlbumCoverWrapper } from './styled'

export default memo(function HEAlbumCover(props) {
  const {size, width, bgp} = props
  const {picUrl, name, company} = props.albumInfo 
  
  return (
    <AlbumCoverWrapper width={width} size={size} bgp={bgp}>
      <div className="coveritem">
        <img src={convertImgMini(picUrl, size)} alt="" />
        <a href="/#" className="image_cover">&nbsp;</a>
      </div>
      <p className="title text-nowrap">
        <a href="/#">{name}</a>
      </p>
      <p className="author text-nowrap">
        <a href="/#">{company}</a>
      </p>
    </AlbumCoverWrapper>
  )
})
