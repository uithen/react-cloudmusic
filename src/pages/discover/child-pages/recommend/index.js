import React, { memo } from 'react'

import {
  RecommendWrapper,
  RcmdContent,
  RcmdLeft,
  RcmdRight
} from './styled'
import HeTopBanner from './child-cpns/top-banner'
import HEHotRcmd from './child-cpns/hot-rcmd'
import HEAlbumRcmd from './child-cpns/album-rcmd'
import HERankingRcmd from './child-cpns/ranking-rcmd'
import HEUserRcmd from './child-cpns/user-rcmd'
import HEArtistRcmd from './child-cpns/artist-rcmd'
import HEDjradioRcmd from './child-cpns/djradio-rcmd'

export default memo(function HERecommend() {
  return (
    <RecommendWrapper>
      <HeTopBanner />
      <RcmdContent className="wrap-980">
        <RcmdLeft>
          <HEHotRcmd />          
          <HEAlbumRcmd />          
          <HERankingRcmd />          
        </RcmdLeft>
        <RcmdRight>
          <HEUserRcmd />
          <HEArtistRcmd />
          <HEDjradioRcmd />
        </RcmdRight>
      </RcmdContent>
    </RecommendWrapper>
  )
})
