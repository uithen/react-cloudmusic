import React, { memo } from 'react'
import { useDispatch} from 'react-redux'

import { convertImgMini} from '@/utils/handle-format'
import { getCurrentSongAction } from '@/pages/song/store'

import { NavLink } from 'react-router-dom'
import { RankingListRcmdWrapper } from './styled'

export default memo(function HERankingListRcmd(props) {
  const {name, coverImgUrl, tracks = []} = props.info 
  
  const dispatch = useDispatch()
 
  const playMusic = song => {
    dispatch(getCurrentSongAction(song.id))
  }
  
  return (
    <RankingListRcmdWrapper>
      <dt className="top">
        <div className="cover">
          <img src={convertImgMini(coverImgUrl, 80)} alt="" />
          <a href="/todo" className="image_cover">cover</a>
        </div>
        <div className="tit">
          <a href="/todo">
            <h3>{name}</h3>
          </a>
          <div className="btn">
            <button className="play sprite_02" title="播放">播放</button>
            <button className="collect sprite_02" title="收藏">收藏</button>
          </div>
        </div>
      </dt>
      <dd>
        <ol>
          {
            tracks.slice(0, 10).map((song, index) => {
              return (
                <li key={song.id}>
                  <span className="no-top">{index+1}</span>
                  <NavLink to="/song" className="text-nowrap">{song.name}</NavLink>
                  <div className="operate">
                    <button onClick={e => playMusic(song)} className="play sprite_02" title="播放">播放</button>
                    <button className="addto sprite_icon2" title="添加到播放列表">添加</button>
                    <button className="collect sprite_02" title="收藏">收藏</button>
                  </div>
                </li>
              )
            })
          }
        </ol>
        <div className="more">
          <a href="/todo" >查看全部&gt;</a>
        </div>
      </dd>
    </RankingListRcmdWrapper>
  )
})
