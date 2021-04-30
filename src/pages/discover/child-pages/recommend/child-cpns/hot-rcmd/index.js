import React, { memo, useCallback, useEffect, useMemo } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router'

import { getHotRcmdAction } from '../../store/actionCreators'
import { HOT_RCMD_LIMIT } from '@/common/constants'

import { HotRcmdWrapper, HotRcmdContent } from './styled'
import HEThemeHeaderRcmd from '@/components/theme-header-rcmd'
import HECoverSongs from '@/components/cover-songs'

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
  const history = useHistory()
  const dispatch = useDispatch()
  const hotRcmd = useSelector(
    state => state.getIn(['recommend', 'hotRcmd']),
    shallowEqual
  )

  useEffect(
    () => dispatch(getHotRcmdAction(HOT_RCMD_LIMIT)),
    [dispatch]
  )

  const toSongsPage = useCallback(
    (e) => {
      e.preventDefault()
      history.push({ pathname: '/discover/songs' })
    },
    [history]
  )

  const toSongsPageCate = useCallback(
    (e, cate) => {
      e.preventDefault()
      history.push({
        pathname: '/discover/songs',
        cate
      })
      console.log('history has payload, can get in location: ', history)
    },
    [history]
  )

  return (
    <HotRcmdWrapper>
      <HEThemeHeaderRcmd 
        tit="热门推荐" 
        tabTitle={info.tabTitle} 
        onClick={toSongsPageCate} 
        moreLink={'/discover/songs'}
      />
      <HotRcmdContent className="cover-list">
        {
          hotRcmd.map(cover => {
            return <HECoverSongs
              cover={cover}
              showBotOrigin={info.showBotOrigin}
              ellipsisText={info.ellipsisText}
              key={cover.id}
              onClick={toSongsPage}
            />
          })
        }
      </HotRcmdContent>
    </HotRcmdWrapper>
  )
})
