import styled from 'styled-components'

import imgCover from '@/assets/img/sprite_cover.png'
import bgIcon from '@/assets/img/sprite_icon.png'

export const CoverSongsWrapper = styled.li`
  width: 140px;
  height: 204px;
  margin: 20px ${props => props.right || 0} 10px 0;

  .cover-item {
    position: relative;
    width: 140px;
    height: 140px;

    img {
      width: 100%;
      height: 100%;
    }

    & > a {
      background-position: 0 0;
    }

    .bottom {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      padding: 0 8px;
      color: #ccc;
      background-image: url(${imgCover});
      background-position: 0 -537px;

      .headset {
        width: 14px;
        height: 12px;
        background: url(${bgIcon}) no-repeat 0 -24px;
      }
      .count-play {
        flex: 1;
        padding-left: 11px;
      }

      .icon-play {
        width: 16px;
        height: 17px;
        background: url(${bgIcon}) no-repeat 0 0;
        font-size: 0;
      }
    }
  }

  .desc {
    margin: 8px 0 3px;
  
    a {
      display: inline-block;
      max-width: 100%;
      vertical-align: middle;
      font-size: 14px;
      color: #000;
    }
  }
`