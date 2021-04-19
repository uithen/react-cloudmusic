import React, { memo } from 'react'

import { convertImgMini} from '@/utils/handle-format'

import { RankingListRcmdWrapper } from './styled'

export default memo(function HERankingListRcmd(props) {
  const {name, coverImgUrl, tracks = []} = props.info 

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
            <a className="play sprite_02" href="/todo" >播放</a>
            <a className="collect sprite_02" href="/todo" >收藏</a>
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
                  <a href="/todo" className="text-nowrap">{song.name}</a>
                  <div className="operate">
                    <a className="play sprite_02" href="/todo" >播放</a>
                    <a className="addto sprite_icon2" href="/todo" >添加</a>
                    <a className="collect sprite_02" href="/todo" >收藏</a>
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
