import React, { memo } from 'react'

import { convertImgMini } from '@/utils/handle-format'

import { CoverAlbumWrapper } from './styled'

export default memo(function HECoverAlbum(props) {
  const {size, width, bgp} = props
  const {picUrl, name, artist} = props.albumInfo 
  
  return (
    <CoverAlbumWrapper width={width} size={size} bgp={bgp}>
      <div className="coveritem">
        <img src={convertImgMini(picUrl, size)} alt="" />
        <a href="/#discover/album" className="image_cover">&nbsp;</a>
      </div>
      <p className="title text-nowrap">
        <a href="/#">{name}</a>
      </p>
      <p className="author text-nowrap">
        <a href="/#">{artist.name}</a>
      </p>
    </CoverAlbumWrapper>
  )
})
