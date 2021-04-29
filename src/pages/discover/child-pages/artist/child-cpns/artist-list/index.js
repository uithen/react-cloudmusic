import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { ArtistListWrapper } from './styled'
import HEThemeHeaderNormal from '@/components/theme-header-normal'
import HEArtistAlpha from '../artist-alpha'
import HEArtistItem from '../artist-item'

export default memo(function HEArtistList() {
  const {artistList, currentType} = useSelector(
    state => ({
      artistList: state.getIn(['artist', 'artistList']),
      currentType: state.getIn(['artist', 'currentType'])
    }),
    shallowEqual
  )

  return (
    <ArtistListWrapper>
      <HEThemeHeaderNormal title={currentType.name || '推荐歌手'} />
      <HEArtistAlpha />
      <ul className="artist-list">
        {
          artistList.map((item, index) => {
            return <HEArtistItem info={item} index={index} key={item.id} />
          })
        }
      </ul>
    </ArtistListWrapper>
  )
})
