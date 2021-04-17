import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { NewAlbumWrapper } from './styled'
import HESubTitle from '../sub-title'
import HEAlbumCover from '@/components/album-cover'

export default memo(function HENewAlbum() {
  const dispatch = useDispatch()
  const newAlbum = useSelector(state => state.getIn(['recommend', 'newAlbum']))
  const albumRef = useRef()
  
  useEffect(
    () => {
      dispatch(getNewAlbumAction(10))
    },
    [dispatch]
  )
  
  const goTo = (e, arrow) => {
    e.preventDefault()
    albumRef.current[arrow]()
  }
  
  return (
    <NewAlbumWrapper>
      <HESubTitle tit="新碟上架" />
      <div className="album">
        <a onClick={e => goTo(e, 'prev')} className="arrow arrow-prev" href="/#">
          &nbsp;
        </a>
        <div className="album-roller">
          <Carousel dots={false} ref={albumRef}>
            { // <div><HEAlbumCover/> *5</div> *2
              [0, 1].map(num => {
                return (
                  <div className="album-list" key={num}>
                    {
                      newAlbum.slice(num * 5, (num + 1) * 5).map(album => {
                        return <HEAlbumCover 
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
        <a onClick={e => goTo(e, 'next')} className="arrow arrow-next" href="/#">
          &nbsp;
        </a>
      </div>
    </NewAlbumWrapper>
  )
})
