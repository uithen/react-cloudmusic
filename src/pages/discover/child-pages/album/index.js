import React, { memo } from 'react'

import { AlbumWrapper } from './styled'
import HEHotAlbum from './child-cpns/hot-album'
import HEAllAlbum from './child-cpns/all-album'

export default memo(function HEAlbum() {
  return (
    <AlbumWrapper className="wrap-980">
      <HEHotAlbum />
      <HEAllAlbum />
    </AlbumWrapper>
  )
})
