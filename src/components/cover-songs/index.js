import React, { memo } from 'react'

import { getPlayCount, convertImgMini } from '@/utils/handle-format'

import { CoverSongsWrapper } from './styled'

export default memo(function HECoverSongs(props) {
  const {cover, showBotOrigin, ellipsisText, marginRight} = props 
  const picUrl = cover.picUrl || cover.coverImgUrl
  return (
    <CoverSongsWrapper right={marginRight} onClick={props.onClick}>
      <div className="cover-item">
        <img src={convertImgMini(picUrl, 140)} alt=""/>
        <a href="/#" title={cover.name} className="image_cover">
          {cover.name}
        </a>
        <div className="bottom">
          <span className="headset "></span>
          <span className="count-play">{getPlayCount(cover.playCount)}</span>
          <a href="/#" className="icon-play">&nbsp;</a>
        </div>
      </div>
      <p className="desc">
        <a href="/#" className={ellipsisText ? " text-nowrap" : ""}>
          {cover.name}
        </a>
      </p>
      {
        showBotOrigin && <p>
          <span>by </span>
          <a href="/#">{cover.copywriter || cover.creator.nickname}</a>
        </p>
      }
    </CoverSongsWrapper>
  )
})
