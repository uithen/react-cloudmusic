import React, { memo, useEffect, useMemo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getHotRcmdAction } from '../../store/actionCreators'

import { HotRcmdWrapper, HotRcmdContent } from './styled'
import HESubTitle from '../sub-title'
import HESongsCover from '@/components/songs-cover'

export default memo(function HEHotRcmd() {
  // const tabTitle = ['华语', '流行', '摇滚', '民谣', '电子']
  // memo优化:tabTitle不属于'状态',会导致任何情况下都会重新渲染该组件
  const info = useMemo(
    () => {
      return {
        tabTitle: ['华语', '流行', '摇滚', '民谣', '电子'],
        showBotOrigin: false,
        ellipsisText: false
      }
    },
    []
  )
  const dispatch = useDispatch()
  const hotRcmd = useSelector(
    state => state.getIn(['recommend', 'hotRcmd']),
    shallowEqual
  )
  useEffect(
    () => dispatch(getHotRcmdAction(8)),
    [dispatch]
  )

  return (
    <HotRcmdWrapper>
      <HESubTitle tit="热门推荐" tabTitle={info.tabTitle} />
      <HotRcmdContent className="cover-list">
        {
          hotRcmd.map(cover => {
            return <HESongsCover
              cover={cover} 
              showBotOrigin={info.showBotOrigin}
              ellipsisText={info.ellipsisText}
              key={cover.id}
            />
          })
        }
      </HotRcmdContent>
    </HotRcmdWrapper>
  )
})
