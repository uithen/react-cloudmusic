import React, { memo } from 'react'

import { getPlayCount, convertImgMini } from '@/utils/handle-format'

import { SongsCoverWrapper } from './styled'

export default memo(function HESongsCover(props) {
  const {cover, showBotOrigin, ellipsisText} = props 

  return (
    <SongsCoverWrapper>
      <div className="cover-item">
        <img src={convertImgMini(cover.picUrl, 140)} alt=""/>
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
          <span>by</span>
          <a href="/#">xxxx</a>
        </p>
      }
    </SongsCoverWrapper>
  )
})
