import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'

import { convertImgMini } from '@/utils/handle-format'
import { changeCurrentCateIndexAction, getCurrentCateAction } from '../../store/actionCreators'

import { TitleWrapper } from './styled'

export default memo(function HERankingTitle() {
  const { cateList, currentCateIndex } = useSelector(
    state => ({
      cateList: state.getIn(['ranking', 'cateList']),
      currentCateIndex: state.getIn(['ranking', 'currentCateIndex'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  useEffect(
    () => {
      const id = cateList[currentCateIndex]?.id
      if (!id) return
      dispatch(getCurrentCateAction(id))
    },
    [dispatch, cateList, currentCateIndex]
  )

  const switchCurrentCate = index => {
    dispatch(changeCurrentCateIndexAction(index))
    const id = cateList[index].id
    dispatch(getCurrentCateAction(id))
  }

  return (
    <TitleWrapper>
      {
        cateList.map((cate, index) => {
          let header
          if (index === 0 || index === 4) {
            header = <h3 className="header">
              {index === 0 ? '云音乐特色榜' : '全球媒体榜'}
            </h3>
          }
          return (
            <div key={cate.id}>
              {header}
              <div
                onClick={e => {switchCurrentCate(index)}} 
                className={classnames('item', {'active': currentCateIndex === index})}
              >
                <img src={convertImgMini(cate.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{cate.name}</div>
                  <div className="update">{cate.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TitleWrapper>
  )
})
