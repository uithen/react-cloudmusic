import React, { memo } from 'react'

import HEArtistCategory from './child-cpns/artist-category'
import HEArtistList from './child-cpns/artist-list'
import { ArtistWrapper } from './styled'

export default memo(function HEArtist() {
  return (
    <ArtistWrapper>
      <div className="content wrap-980">
        <HEArtistCategory/>
        <HEArtistList/>
      </div>
    </ArtistWrapper>
  )
})
