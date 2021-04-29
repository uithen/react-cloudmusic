import React, {memo} from 'react'

import { HeaderWrapper } from './styled'

export default memo(function HEThemeHeaderNormal(props) {
  const { title, rightSlot } = props

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="right">
        {rightSlot}
      </div>
    </HeaderWrapper>
  )
})
