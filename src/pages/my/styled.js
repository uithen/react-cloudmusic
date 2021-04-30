import styled from 'styled-components';

import pageBg from '@/assets/img/mine_sprite.png'

export const MyWrapper = styled.div`
  .content {
    background-color: #fff;
    min-height: 700px;

    .pic {
      position: relative;
      width: 807px;
      height: 372px;
      margin: 0 auto;
      background: url(${pageBg}) 0 104px no-repeat;

      .login {
        position: absolute;
        left: 482px;
        top: 302px;
        width: 167px;
        height: 45px;
        text-indent: -9999px;
      }
    }
  }
`