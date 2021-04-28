import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
  RankingWrapper,
  RankingLeft,
  RankingRight
} from './styled'
import { getCateListAction } from './store/actionCreators'

import HERankingTitle from './child-cpns/ranking-title'
import HERankingHeader from './child-cpns/ranking-header'
import HESongList from '@/components/song-list'

export default memo(function HERanking() {
  const dispatch = useDispatch()

  useEffect(
    () => dispatch(getCateListAction()),
    [dispatch]
  )

  return (
    <RankingWrapper className="wrap-980">
      <RankingLeft>
        <HERankingTitle />
      </RankingLeft>
      <RankingRight>
        <HERankingHeader />
        <HESongList />
      </RankingRight>
    </RankingWrapper>
  )
})
