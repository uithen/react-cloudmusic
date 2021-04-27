import React, { memo } from 'react'

import {
  SongWrapper,
  SongLeft,
  SongRight
} from './styled'
import HESubNav from '@/components/sub-nav'
export default memo(function HESong() {
  return (
    <>
      <HESubNav/>
      <SongWrapper>
          <SongLeft>
            SongLeft
          </SongLeft>
          <SongRight>
            SongRight
          </SongRight>
      </SongWrapper>
    </>
  )
})
