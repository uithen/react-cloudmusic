import React, { memo } from 'react'

import {
  RecommendWrapper,
  RcmdContent,
  RcmdLeft,
  RcmdRight
} from './styled'
import HeTopBanner from './child-cpns/top-banner'
import HEHotRcmd from './child-cpns/hot-rcmd'
import HENewAlbum from './child-cpns/new-album'
import HERankList from './child-cpns/rank-list'

export default memo(function HERecommend() {
  return (
    <RecommendWrapper>
      <HeTopBanner />
      <RcmdContent className="wrap-980">
        <RcmdLeft>
          <HEHotRcmd />          
          <HENewAlbum />          
          <HERankList />          
        </RcmdLeft>
        <RcmdRight></RcmdRight>
      </RcmdContent>
    </RecommendWrapper>
  )
})
