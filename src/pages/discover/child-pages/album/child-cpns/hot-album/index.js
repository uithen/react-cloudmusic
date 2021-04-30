import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getHotAlbumsAction } from '../../store/actionCreators'

import { HotAlbumWrapper } from './styled'
import HECoverAlbum from '@/components/cover-album'
import HEThemeHeaderNormal from '@/components/theme-header-normal'

export default memo(function HEHotAlbum() {
  const hotAlbums = useSelector(
    state => state.getIn(['album', 'hotAlbums'])
  )
  const dispatch = useDispatch()

  useEffect(
    () => dispatch(getHotAlbumsAction),
    [dispatch]
  )

  return (
    <HotAlbumWrapper>
      <HEThemeHeaderNormal title="热门新碟" />
      <ul className="album-list">
        {
          hotAlbums.slice(0, 10).map(
            item => {
              return <HECoverAlbum
                size={130}
                width={153}
                bgp={-845}
                albumInfo={item}
                key={item.id}
              />
            }
          )
        }
      </ul>
    </HotAlbumWrapper>
  )
})
