import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getRankingListAction } from '../../store/actionCreators'

import { RankingRcmdWrapper } from './styled'
import HEThemeHeaderRcmd from '@/components/theme-header-rcmd'
import HERankingListRcmd from '@/components/ranking-list-rcmd'

export default memo(function HERankingRcmd() {
  const {rankingUp, rankingNew, rankingOriginal} = useSelector(
    state => ({
      rankingUp: state.getIn(['recommend', 'rankingUp']),
      rankingNew: state.getIn(['recommend', 'rankingNew']),
      rankingOriginal: state.getIn(['recommend', 'rankingOriginal']),
    }),
    shallowEqual 
  )
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getRankingListAction(0))
      dispatch(getRankingListAction(2))
      dispatch(getRankingListAction(3))
    },
    [dispatch]
  )
  
  return (
    <RankingRcmdWrapper>
      <HEThemeHeaderRcmd tit="榜单" />
      <div className="list-item">
        <HERankingListRcmd info={rankingUp} />
        <HERankingListRcmd info={rankingNew} />
        <HERankingListRcmd info={rankingOriginal} />
      </div>
    </RankingRcmdWrapper>
  )
})
