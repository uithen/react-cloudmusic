import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux'

import { HeaderWrapper } from './styled'

export default memo(function HEThemeHeaderPlaylist() {

  const currentCate = useSelector(
    state => state.getIn(['ranking', 'currentCate']),
    shallowEqual
  )

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{currentCate.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{currentCate.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})
