import React, { memo } from 'react'

import { FriendWrapper } from './styled'

export default memo(function HEFriend() {
  return (
    <FriendWrapper>
      <div className="content wrap-980">
        <div className="pic">
          <a className="login" href="/#">立即登录</a>
        </div>
      </div>
    </FriendWrapper>
  )
})
