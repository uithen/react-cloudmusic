import React, { memo, useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllAlbumsAction } from '../../store/actionCreators'
import { PER_PAGE_ALBUM_NUM } from '../../store/constants'

import { AllAlbumWrapper } from './styled'
import HEThemeHeaderNormal from '@/components/theme-header-normal'
import HECoverAlbum from '@/components/cover-album'
import HEPagination from '@/components/pagination'

export default memo(function HEAllAlbum() {
  const [currentPage, setCurrentPage] = useState(1)
  
  const allAlbums = useSelector(
    state => state.getIn(['album', 'allAlbums'])
  )
  const dispatch = useDispatch()

  useEffect(
    () => dispatch(getAllAlbumsAction(PER_PAGE_ALBUM_NUM, currentPage)),
    [dispatch]
  )
  
  const handlePageChange = useCallback(
    (page, pageSize) => {
      setCurrentPage(page)
      dispatch(getAllAlbumsAction(PER_PAGE_ALBUM_NUM, page))
    }
  )
  
  return (
    <AllAlbumWrapper>
      <HEThemeHeaderNormal title="全部新碟" />
      <ul className="album-list">
        {
          allAlbums.map(
            item => {
              return <HECoverAlbum
                size={130}
                width={153}
                bgp={-845}
                albumInfo={item}
                key={item.id}
              />
            }
          )
        }
      </ul>
      <HEPagination
        currentPage ={currentPage}
        total={500}
        pageSize={30}
        onPageChange={handlePageChange}
      />
    </AllAlbumWrapper>
  )
})
