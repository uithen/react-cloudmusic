import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { convertImgMini, formatMinuteSecond } from '@/utils/handle-format'

import { SongListWrapper } from './styled'
import HEThemeHeaderPlaylist from '../theme-header-playlist'

export default memo(function HESongList() {
  const currentCate = useSelector(
    state => state.getIn(['ranking', 'currentCate']),
    shallowEqual
  )
  const tracks = currentCate?.tracks || []

  return (
    <SongListWrapper>
      <HEThemeHeaderPlaylist />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((song, index) => {
                return (
                  <tr className="" key={song.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={convertImgMini(song.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table"></span>
                        <span className="name">{song.name}</span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(song.dt)}</td>
                    <td>{song.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </SongListWrapper>
  )
})
