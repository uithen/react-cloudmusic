import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
 } from './styled'
import HESongsCategory from '../songs-category'

export default memo(function HESongsHeader() {
  const [showCateBar, setShowCateBar] = useState(false)

  const currentCateSongsName = useSelector(
    state => state.getIn(['songs', 'currentCateSongsName']),
    shallowEqual
  )

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCateSongsName || '全部'}</span>
        <button className="select" onClick={e => setShowCateBar(!showCateBar)}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCateBar ? <HESongsCategory setShowCateBar={setShowCateBar} /> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  )
})
