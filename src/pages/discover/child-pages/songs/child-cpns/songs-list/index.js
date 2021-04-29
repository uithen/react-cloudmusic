import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCurrentCateSongsAction } from '../../store/actionCreators'
import { PER_PAGE_NUMBER } from '@/common/constants'

import { SongsListWrapper } from './styled'
import HECoverSongs from '@/components/cover-songs'
import HEPagination from '@/components/pagination'

export default memo(function HESongsList() {
  const [currentPage, setCurrentPage] = useState(1)

  const currentCateSongs = useSelector(
    state => state.getIn(['songs', 'currentCateSongs'])
  )
  const dispatch = useDispatch()

  const songs = currentCateSongs?.playlists || []
  const total = currentCateSongs.total || 0
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page)
    let offset = page - 1
    dispatch(getCurrentCateSongsAction(offset))
  }

  return (
    <SongsListWrapper>
      <div className="songs-list">
        {
          songs.map(item => {
            return (
              <HECoverSongs 
                key={item.id}
                cover={item}
                showBotOrigin={true}
                ellipsisText={true}
                marginRight={'30px'}
              />
            )
          })
        }
      </div>
      <HEPagination 
        total={total}
        currentPage={currentPage}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={handlePageChange}
      />
    </SongsListWrapper>
  )
})
