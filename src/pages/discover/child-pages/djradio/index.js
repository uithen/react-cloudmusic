import React, { memo } from 'react'

import { DjRadioWrapper } from './styled'
import HERadioCategory from './child-cpns/radio-category'
import HERadioRecommend from './child-cpns/radio-recommend'
import HERadioRanking from './child-cpns/radio-ranking'

export default memo(function HEDjradio() {
  return (
    <DjRadioWrapper className="wrap-980">
      <HERadioCategory />
      <HERadioRecommend />
      <HERadioRanking />
    </DjRadioWrapper>
  )
})
