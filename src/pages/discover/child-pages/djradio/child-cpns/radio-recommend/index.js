import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getRadioRecommendsAction } from '../../store/actionCreators'

import { RecommendWrapper } from './styled'
import HEThemeHeaderNormal from '@/components/theme-header-normal'
import HERadioRecommendCover from '../cover-recommend'

export default memo(function HERadioRecommend() {
  const {recommends, currentCateId} = useSelector(
    state => ({
      recommends: state.getIn(['djradio', 'recommends']),
      currentCateId: state.getIn(['djradio', 'currentCateId']),
    }), 
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(
    () => {
      if (currentCateId === 0) return
      dispatch(getRadioRecommendsAction(currentCateId))
    },
    [dispatch, currentCateId]
  )

  return (
    <RecommendWrapper>
      <HEThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {
          recommends.slice(0, 5).map(item => {
            return <HERadioRecommendCover info={item} key={item.id} />
          })
        }
      </div>
    </RecommendWrapper>
  )
})
