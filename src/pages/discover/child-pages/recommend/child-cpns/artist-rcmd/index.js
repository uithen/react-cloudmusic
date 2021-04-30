import React, { memo, useEffect } from 'react'
import { ArtistRcmdWrapper } from './styled'
import { useDispatch, useSelector } from 'react-redux'

import { getArtistListAction } from '../../store/actionCreators'
import { convertImgMini } from '@/utils/handle-format'

export default memo(function HEArtistRcmd() {
  const dispatch = useDispatch()
  const artistList = useSelector(state => state.getIn(['recommend', 'artistList']))
  
  useEffect(
    () => dispatch(getArtistListAction(5, 2)),
    [dispatch]
  )

  return (
    <ArtistRcmdWrapper>
      <h3 className="top">
        <span>入驻歌手</span>
        <a href="/#/discover/artist" className="more">查看全部 &gt;</a>
      </h3>
      <ul className="artist-list">
        {
          artistList.reverse().map(item => {
            return (
              <li key={item.id}>
                <a href="/#/discover/artist">
                  <div className="head">
                    <img src={convertImgMini(item.picUrl, 62)} alt="" />
                  </div>
                  <div className="info">
                    <h4>
                      <span>{item.alias.join() || item.name}</span>
                    </h4>
                    <p>{item.name}</p>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
      <div className="join-us">
        <a
          className="sprite_button" 
          target="_blank" 
          href="//music.163.com/st/musician" 
          rel="noreferrer noopener"
        >
          <i className="sprite_button" >申请成为网易音乐人</i>
        </a>
      </div>
    </ArtistRcmdWrapper>
  )
})

