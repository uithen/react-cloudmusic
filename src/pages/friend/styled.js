import styled from 'styled-components'

import pageBg from '@/assets/img/friend_sprite.jpg'

export const FriendWrapper = styled.div`
  .content {
    background-color: #fff;
    min-height: 700px;

    .pic {
      position: relative;
      width: 807px;
      height: 484px;
      margin: 0 auto;
      background: url(${pageBg}) 0 104px no-repeat;

      .login {
        position: absolute;
        top: 368px;
        left: 482px;
        width: 167px;
        height: 45px;
        text-indent: -9999px;
      }
    }
  }
`