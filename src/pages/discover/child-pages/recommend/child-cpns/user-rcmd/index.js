import React, { memo } from 'react'

import { UserRcmdWrapper } from './styled'

export default memo(function HEUserRcmd() {
  return (
    <UserRcmdWrapper className="sprite_02">
      <p className="note">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a className="login sprite_02" href="/todo">用户登录</a>
    </UserRcmdWrapper>
  )
})
