import React, { memo } from 'react'

import HESubNav from '@/components/sub-nav'
import HESongInfo from './child-cpns/song-info'
import HESongComment from './child-cpns/song-comment'
import HESimiSongs from './child-cpns/simi-songs'
import HESimiSong from './child-cpns/simi-song'
import {
  SongWrapper,
  SongLeft,
  SongRight
} from './styled'

export default memo(function HESong() {
  return (
    <>
      <HESubNav/>
      <SongWrapper>
          <SongLeft>
            <HESongInfo />
            <HESongComment />
          </SongLeft>
          <SongRight>
            <HESimiSongs />
            <HESimiSong />
          </SongRight>
      </SongWrapper>
    </>
  )
})
