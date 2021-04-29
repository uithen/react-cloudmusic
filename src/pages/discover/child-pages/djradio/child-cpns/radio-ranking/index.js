import React, { useEffect, memo, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getRadioRankingAction } from '../../store/actionCreators'

import { RankingWraper } from './styled'
import HEThemeHeaderNormal from '@/components/theme-header-normal'
import HERadioRankingCover from '../cover-ranking'
import HEPagination from '@/components/pagination'

export default memo(function HYRadioRanking() {
  const [currentPage, setCurrentPage] = useState(1)
  const rankingList = useSelector(
    state => state.getIn(['djradio', 'rankingList']),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getRadioRankingAction(currentPage))
    },
    [dispatch, currentPage] 
  )

  const handlePageChange = useCallback(
    (page, pageSize) => {
      setCurrentPage(page)
      dispatch(getRadioRankingAction(page))
    } ,
    [dispatch]
  )
  return (
    <RankingWraper>
      <HEThemeHeaderNormal title="电台排行榜" />
      <div className="ranking-list">
        {
          rankingList.map(radio => {
            return (<HERadioRankingCover key={radio.id} radio={radio}/>)
          })
        }
      </div>
        <HEPagination
          currentPage={currentPage}
          total={1000}
          onPageChange={handlePageChange}
          pageSize={30}
        />
    </RankingWraper>
  )
})