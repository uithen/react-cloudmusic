import styled from 'styled-components'

import progressBar from '@/assets/img/progress_bar.png'
import progressBarVertical from '@/assets/img/playbar_sprite.png'
import bgIcon from '@/assets/img/sprite_icon.png'
import bgPanel from '@/assets/img/playpanel_bg.png'
import bgList from '@/assets/img/playlist_sprite.png'


export const PlaybarWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  /* width: 100%; */
  width: calc(100vw);
  height: 0;
  z-index: 999;

  .playbar {
    position: absolute;
    top: -53px;
    left: 0;
    width: 100%;
    height: 53px;
    .up-down {
      position: relative;
      z-index: 11;
      .fill-left {
        position: absolute;
        top: -14px;
        right: 15px;
        width: 52px;
        height: 67px;
        background-position: 0 -380px;
        button {
          width: 18px;
          height: 18px;
          margin: 6px 0 0 17px;
          background-position: -100px -380px;
        }
        .lock:hover {
          background-position: -100px -400px;
        }
        .unlock {
          background-position: -80px -380px;
        }
        .unlock:hover {
          background-position: -80px -400px;
        }
      }
      .fill-right {
        position: absolute;
        top: -1px;
        right: 0;
        width: 15px;
        height: 54px;
        background-position: -52px -393px;
        /* pointer-events: none; */
      }
    }
 
    .bg {
      height: 53px;
      margin-right: 67px;
      background-position: 0 0;
      background-repeat: repeat-x;
    }
    .show-playbar {
      position: absolute;
      top: -16px;
      width: 100%;
      height: 20px;
      cursor: pointer;
      z-index: 10;
    }
  }
  
`

export const PlaybarContent = styled.div`
  display: flex;
  position: absolute;
  top: 6px;
  left: 50%;
  height: 47px;
  margin-left: -498.5px;
  z-index: 11;
  .control-btns {
    display: flex;
    width: 137px;
    padding-top: 6px;
    button {
      width: 28px;
      height: 28px;
      margin-right: 8px;
      margin-top: 5px;
      text-indent: -9999px;
    }
    .prev {
      background-position: 0 -130px;
    }
    .prev:hover {
      background-position: -30px -130px;
    }
    .play,
    .pause {
      width: 36px;
      height: 36px;
      margin-top: 0;
      background-position: 0 -204px;
    }
    .play:hover {
      background-position: -40px -204px;
    }
    .pause {
      background-position: 0 -165px;
    }
    .pause:hover {
      background-position: -40px -165px;
    }

    .next {
      background-position: -80px -130px;
    }
    .next:hover {
      background-position: -110px -130px;
    }
  }

  .cover {
    position: relative;
    width: 34px;
    height: 34px;
    margin: 6px 15px 0 0;
    img {
      width: 34px;
      height: 34px;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }
  }

  .play-area {
    display: flex;
    flex-flow: column;
    width: 608px;
    padding-left: 6px;
    .song-info {
      display: flex;
      align-items: center;
      height: 28px;
      overflow: hidden;
      text-shadow: 0 1px 0 #171717;
      .song-name {
        max-width: 226px;
        padding-right: 6px;
        color: #e8e8e8;
      }
      .mv {
        width: 19px;
        height: 17px;
        background-position: -1px -57px;
        text-indent: -9999px;
      }
      .mv:hover {
        background-position: -21px -57px;
      }
      .by {
        padding-left: 15px;
        color: #9b9b9b;
      }
      .source {
        width: 14px;
        height: 15px;
        margin-left: 13px;
        background-position: -110px -103px;
      }
      .source:hover {
        background-position: -130px -103px;
      }
    }
    .progress {
      display: flex;
      margin-bottom: 6px;
      .ant-slider {
        width: 493px;
        margin: 0;
        .ant-slider-rail {
          height: 9px;
          background: url(${progressBar}) right 0;
        }
        .ant-slider-track {
          height: 9px;
          background: url(${progressBar}) left -66px;
        }
        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${bgIcon}) 0 -250px;
        }
        .ant-slider-handle:hover {
          background-position: 0 -280px;
        }
      }

      .time {
        margin-left: 15px;
        .now-time,
        .divider {
          color: #e1e1e1;
          margin-right: 3px;
        }
        .total-time {
          color: #a1a1a1;
        }
      }
    }
  }

  .share-add {
    display: flex;
    width: 60px;

    & > button {
      width: 25px;
      height: 25px;
      margin: 11px 2px 0 0;
      text-indent: -9999px;
    } 
    .add {
      background-position: -88px -163px;
    }
    .add:hover {
      background-position: -88px -189px;
    }
    .share {
      background-position: -114px -163px;
    }
    .share:hover {
      background-position: -114px -189px;
    }
  }

  .settings {
    display: flex;
    align-items: center;
    position: relative;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -238px;

    .volume,
    .mode {
      width: 25px;
      height: 25px;
      margin-right: 2px;
    }
    .volume {
      background-position: -2px -248px;
    }
    .volume:hover {
      background-position: -31px -248px;
    }
    .volume-bar {
      visibility: hidden;
      position: absolute;
      top: -113px;
      left: 9px;
      width: 32px;
      height: 113px;
      background-position: 0 -503px;
      .ant-slider-vertical {
        position: absolute;
        top: 11px;
        left: 10px;
        height: 93px;
        margin: 0;
        .ant-slider-track {
          background: url(${progressBarVertical}) -40px bottom;
        }
        .ant-slider-handle {
          width: 18px;
          height: 20px;
          border: none;
          background: url(${bgIcon}) -41px -280px;
        }
      }
    }
    .volume-bar.showbar {
      visibility: visible;
    }
    .mode {
      background-position: ${
        props => {
          switch (props.sequence) {
            case 1: 
              return '-66px -248px;'
            case 2: 
              return '-66px -344px;'
            default: 
              return '-3px -344px;'
          }
        }
      }
    }
    
    .play-list {
      position: relative;
      width: 59px;
      height: 36px;
      padding-top: 5px;
      .list-icon {
        display: block;
        width: 59px;
        height: 27px;
        padding-left: 21px;
        background-position: -42px -68px;
        line-height: 27px;
        text-align: center;
        color: #666;
        text-shadow: 0 1px 0 #080707;
        text-indent: 0;
        text-decoration: none;
      }
      .list-icon:hover {
        background-position: -42px -98px;
      }
    }
  }
`


export const PlayPanel = styled.div`
  position: absolute;
  left: 50%;
  bottom: 46px;
  transform: translateX(-50%);
  width: 986px;
  height: 301px;
  color: #e2e2e2;

  .header {
    display: flex;
    height: 41px;
    line-height: 41px;
    background: url(${bgPanel}) 0 0;
    
    .header-left {
      display: flex;
      justify-content: space-between;
      width: 553px;
      padding: 0 25px;

      h3 {
        color: #e2e2e2;
        font-weight: 700;
      }
    }
    .header-right {
      flex: 1;
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
  }

  .main {
    position: relative;
    display: flex;
    height: 260px;
    overflow: hidden;
    background: url(${bgPanel}) -1014px 0 repeat-y;

    .image {
      position: absolute;
      left: 2px;
      top: -360px;
      width: 980px;
      height: auto;
      opacity: .2;
    }

    .panel-list {
      position: relative;
      width: 553px;
      padding: 2px;

      .item {
        padding: 0 8px 0 25px;
        display: flex;
        position: relative;
        justify-content: space-between;
        align-items: center;
        height: 28px;
        line-height: 28px;
        color: #ccc;

        &.active {
          color: #fff;
          background-color: #000;

          ::before {
            content: "";
            position: absolute;
            left: 8px;
            width: 10px;
            height: 13px;
            background: url(${bgList}) -182px 0;
          }
        }

        .right {
          display: flex;
          align-items: center;

          .singer {
            width: 80px;
            margin-right: 11px;
          }

          .duration {
            width: 45px;
          }

          .link {
            margin-left: 20px;
            width: 14px;
            height: 16px;
            background-position: -100px 0;
          }
        }
      }
    }

    .panel-lyric {
      position: relative;
      flex: 1;
      margin: 21px 0 20px 0;
      overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      .lrc-content {
        .lrc-item {
          height: 32px;
          text-align: center;
          color: #989898;

          &.active {
            color: #fff;
            font-size: 14px;
            font-weight: bold;
          }
        }
      }
    }
  }
`