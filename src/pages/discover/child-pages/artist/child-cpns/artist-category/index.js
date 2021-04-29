import React, { memo } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { artistCategories } from '@/api/local-data'
import { 
  changeCurrentAreaAction,
  changeCurrentTypeAction
 } from '../../store/actionCreators'

import { CategoryWrapper, CategoryItem } from './styled'

export default memo(function HEArtistCategory() {
  const {currentArea, currentType} = useSelector(
    state => ({
      currentArea: state.getIn(['artist', 'currentArea']),
      currentType: state.getIn(['artist', 'currentType'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const selectArtistsTitle = (area, item) => {
    dispatch(changeCurrentAreaAction(area))
    dispatch(changeCurrentTypeAction(item))
    // dispatch(getArtistListAction(area, item.type))
  }

  const renderArtistsTitle = (artists, area) => {
    return (
      <div>
        {
          artists.map(item => {
            const isSlected = area === currentArea && item.type === currentType.type
            return (
              <CategoryItem key={item.name} className={isSlected && 'active'}>
                <span onClick={e => selectArtistsTitle(area, item)}>
                  {item.name}
                </span>
              </CategoryItem>
            )
          })
        }
      </div>
    )
  }
  return (
    <CategoryWrapper>
      {
        artistCategories.map(cate => {
          return (
            <div className="section" key={cate.area}>
              <h2 className="title">{cate.title}</h2>
              {renderArtistsTitle(cate.artists, cate.area)}
            </div>
          )
        })
      }
    </CategoryWrapper>
  )
})
