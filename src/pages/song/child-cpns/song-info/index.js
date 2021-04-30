import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { convertImgMini } from '@/utils/handle-format'

import { SongInfoWrapper, InfoLeft, InfoRight } from './styled'

export default memo(function HESongInfo() {
  const [isSpread, setIsSpread] = useState(false)
  
  const {currentSong, lyricList} = useSelector(
    state => ({
      currentSong: state.getIn(['song', 'currentSong']),
      lyricList: state.getIn(['song', 'lyricList'])
    }),
    shallowEqual
  )

  const picUrl = currentSong.al?.picUrl || 'placeholder'
  const artist = currentSong.ar?.[0]?.name || 'unknown'
  const showLyricLines = isSpread ? lyricList.length : 13
  
  return (
    <SongInfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={convertImgMini(picUrl, 130)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">{artist}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{currentSong?.al?.name}</a>
        </div>

        {/* <HEOperationBar favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle="(167366)" /> */}

        <div className="lyric">
          <div className="lyric-info">
            {
             lyricList.slice(0, showLyricLines).map((lyric, index) => {
                return <p key={lyric.time} className="text">{lyric.content}</p>
              })
            }
          </div>
          <button 
            className="lyric-control"
            onClick={e => setIsSpread(!isSpread)}
          >
            {isSpread ? "收起" : "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoRight>
    </SongInfoWrapper>
  )
})
