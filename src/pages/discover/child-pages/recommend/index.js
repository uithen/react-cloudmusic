import React, { memo } from 'react'

import {
  RecommendWrapper,
  RecommendContent,
  RecommendLeft,
  RecommendRight
} from './styled'
import HeTopBanner from './child-cpns/top-banner'
import HESubTitle from './child-cpns/sub-title'

export default memo(function HERecommend() {
  const tabTitle = ['华语', '流行', '摇滚', '民谣', '电子']

  return (
    <RecommendWrapper>
      <HeTopBanner />
      <RecommendContent className="wrap-980">
        <RecommendLeft>
          <HESubTitle tit="热门推荐" tabTitle={tabTitle}></HESubTitle>
          <HESubTitle tit="新碟上架"></HESubTitle>
          <HESubTitle tit="榜单"></HESubTitle>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </RecommendContent>
    </RecommendWrapper>
  )
})
