import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'

import { singerAlphas } from '@/utils/handle-data'
import { getArtistListAction } from '../../store/actionCreators'

import { AlphasWrapper } from './styled'

export default memo(function HEArtistAlpha() {
  const [currentAlpha, setCurrentAlpha] = useState('-1')
  
  const {currentArea, currentType} = useSelector(
    state => ({
      currentArea: state.getIn(['artist', 'currentArea']),
      currentType: state.getIn(['artist', 'currentType'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(
    () => dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha)),
    [dispatch, currentArea, currentType.type, currentAlpha]
  )

  useEffect(() => {
    setCurrentAlpha("热门");
  }, [currentType, currentArea])
  
  const showAlphabets = currentArea !== -1

  const renderAlphas = () => {
    return (
      <AlphasWrapper showAlphabets={showAlphabets}>
        {
          singerAlphas.map(alpha => {
            if (alpha === '-1') alpha = '热门'
            if (alpha === '0') alpha = '其他'
            const isActive = alpha === currentAlpha

            return (
              <div
                onClick={e => setCurrentAlpha(alpha)}
                key={alpha}
                className={classnames('item', {'active': isActive})}
              >
                <span>{alpha.toUpperCase()}</span>
              </div>
            )
          })
        }
      </AlphasWrapper>
    )
  }
  return showAlphabets && renderAlphas()
})
