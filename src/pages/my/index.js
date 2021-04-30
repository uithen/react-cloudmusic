import React, { memo } from 'react'

import { MyWrapper } from './styled'

export default memo(function HEMy() {
  return (
    <MyWrapper>
      <div className="content wrap-980">
        <div className="pic">
          <a className="login" href="/#">立即登录</a>
        </div>
      </div>
    </MyWrapper>
  )
})
