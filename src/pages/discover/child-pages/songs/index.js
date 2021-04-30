import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'

import { 
  getCategoriesAction, 
  getCurrentCateSongsAction,
  changeCurrentCateSongsNameAction
 } from './store/actionCreators'

import { SongsWrapper } from './styled'
import HESongsHeader from './child-cpns/songs-header'
import HESongsList from './child-cpns/songs-list'

export default memo(function HESongs() {
  const cateList = useSelector(state => state.getIn(['songs', 'cateList']))
  const dispatch = useDispatch()
  console.log(cateList)

  const category = useLocation().cate
  console.log(category)
  useEffect(
    () => dispatch(changeCurrentCateSongsNameAction(category)),
    [dispatch, category]
  )
  
  useEffect(
    () => {
      // 获取歌单的全部分类
      dispatch(getCategoriesAction)
      // 获取默认分类下的歌单列表
      dispatch(getCurrentCateSongsAction(0))
    },
    [dispatch]
    )
  
  return (
    <SongsWrapper className="wrap-980">
      <HESongsHeader />
      <HESongsList />
    </SongsWrapper>
  )
})
