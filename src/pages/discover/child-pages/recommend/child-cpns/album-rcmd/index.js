import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAlbumAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { AlbumWrapper } from './styled'
import HEThemeHeaderRcmd from '@/components/theme-header-rcmd'
import HECoverAlbum from '@/components/cover-album'

export default memo(function HEAlbumRcmd() {
  const dispatch = useDispatch()
  const album = useSelector(state => state.getIn(['recommend', 'album']))
  const albumRef = useRef()
  
  useEffect(
    () => {
      dispatch(getAlbumAction(10))
    },
    [dispatch]
  )
  
  const switchTo = (e, arrow) => {
    e.preventDefault()
    albumRef.current[arrow]()
  }
  
  return (
    <AlbumWrapper>
      <HEThemeHeaderRcmd tit="新碟上架" />
      <div className="album">
        <a onClick={e => switchTo(e, 'prev')} className="arrow arrow-prev" href="/#">
          &nbsp;
        </a>
        <div className="album-roller">
          <Carousel dots={false} ref={albumRef}>
            { // <div><HECoverAlbum/> *5</div> *2
              [0, 1].map(num => {
                return (
                  <div className="album-list" key={num}>
                    {
                      album.slice(num * 5, (num + 1) * 5).map(album => {
                        return <HECoverAlbum 
                          albumInfo={album}
                          size={100}
                          width={118}
                          bgp={-570}
                          key={album.id}
                        />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <a onClick={e => switchTo(e, 'next')} className="arrow arrow-next" href="/#">
          &nbsp;
        </a>
      </div>
    </AlbumWrapper>
  )
})
