import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { convertImgMini} from '@/utils/handle-format'
import { getSimiSongsAction } from '../../store/actionCreators'

import { SimiSongsWrapper } from './styled'
import HEThemeHeaderSong from '@/components/theme-header-song';

export default memo(function HESimiSongs() {

  const { simiSongs } = useSelector(state => ({
    simiSongs: state.getIn(['song', 'simiSongs'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(
    () => dispatch(getSimiSongsAction()),
    [dispatch]
  )

  return (
    <SimiSongsWrapper>
      <HEThemeHeaderSong title="包含这首歌的歌单" />
      <div className="songs">
        {
          simiSongs.map(song => {
            return (
              <div className="song-item" key={song.id}>
                <a className="image" href="/#">
                  <img src={convertImgMini(song.coverImgUrl, 50)} alt="" />
                </a>
                <div className="info text-nowrap">
                  <a href="#/" className="name">{song.name}</a>
                  <div className="auchor">
                    by
                    <a href="#/" className="nickname">{song.creator.nickname}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </SimiSongsWrapper>
  )
})
