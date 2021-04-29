import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import classnames from 'classnames'

import { 
  getRadioCategoriesAction,
  changeCurrentCateIdAction
 } from '../../store/actionCreators'

import { CategoryWrapper, BgImg } from './styled'

export default memo(function HERadioCategory() {
  const {categories, currentCateId} = useSelector(
    state => ({
      categories: state.getIn(['djradio', 'categories']),
      currentCateId: state.getIn(['djradio', 'currentCateId']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  console.log(categories)
  useEffect(
    () => dispatch(getRadioCategoriesAction),
    [dispatch]
  )

  return (
    <CategoryWrapper>
      <ul>
        {
          categories.map(cate => {
            return (
              <li key={cate.id}>
                <span
                  className={classnames({"active": cate.id === currentCateId})}
                  onClick={e => dispatch(changeCurrentCateIdAction(cate.id))}
                >
                  <BgImg
                    imgUrl={cate.picWebUrl} 
                    className="img"
                  />
                  <em>{cate.name}</em>
                </span>
              </li>
            )
          })
        }
      </ul>
    </CategoryWrapper>
  )
})
