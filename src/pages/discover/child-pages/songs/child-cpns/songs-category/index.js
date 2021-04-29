import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { 
  changeCurrentCateSongsNameAction,
  getCurrentCateSongsAction
 } from '../../store/actionCreators'

import { CategoryWrapper } from './styled'

export default memo(function HESongsCategory(props) {
  const cateList = useSelector(state => state.getIn(['songs', 'cateList']))
  const dispatch = useDispatch()

  const selectCategory = (name) => {
    dispatch(changeCurrentCateSongsNameAction(name))
    dispatch(getCurrentCateSongsAction(0))
    props.setShowCateBar(false)
  }

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={e => {selectCategory('全部')}}>全部风格</span>
      </div>
      <div className="category">
        {
          cateList.map((categories, index) => {
            return (
              <dl className={"item"+1} key={categories.name}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{categories.name}</span>
                </dt>
                <dd>
                  {
                    categories.subCate.map(subCate => {
                      return (
                        <div
                          key={subCate.name} 
                          onClick={e => selectCategory(subCate.name)}
                          className="item" 
                        >
                          <span className="link">{subCate.name}</span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})
