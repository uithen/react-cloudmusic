import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSimiSongAction } from '../../store/actionCreators'

import { SimiSongWrapper } from './styled'
import HEThemeHeaderSong from '@/components/theme-header-song'

export default memo(function HESimiSong() {
  const { simiSong } = useSelector(state => ({
    simiSong: state.getIn(["song", "simiSong"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(
    () => dispatch(getSimiSongAction()),
    [dispatch]
  )

  return (
    <SimiSongWrapper>
      <HEThemeHeaderSong title="相似歌曲" />
      <div className="songs">
        {
          simiSong.map(song => {
            return (
              <div className="song-item" key={song.id}>
                <div className="info">
                  <div className="title text-nowrap">
                    <a href="#/">{song.name}</a>
                  </div>
                  <div className="artist">
                    <a href="#/">{song.artists[0].name}</a>
                  </div>
                </div>
                <div className="operate">
                  <button className="item sprite_icon3 play"></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </SimiSongWrapper>
  )
})
