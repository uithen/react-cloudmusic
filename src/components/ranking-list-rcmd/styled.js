import styled from 'styled-components'

export const RankingListRcmdWrapper = styled.dl`
  .top {
    display: flex;
    height: 120px;
    padding: 20px 0 0 19px;

    .cover {
      position: relative;
      width: 80px;
      height: 80px;
    }
    .tit {
      width: 116px;
      margin: 6px 0 0 10px;

      h3 {
        font-size: 14px;
        font-weight: bold;
        color: #333;
      }

      .btn {
        margin-top: 10px;

        button {
          display: inline-block;
          width: 22px;
          height: 22px;
          margin-right: 10px; 
          text-indent: -9999px;
        }
        
        .play {
          background-position: -267px -205px;
        }
        .collect {
          background-position: -300px -205px;
        }
      }
    }
  }

  ol {
    height: 319px;
    line-height: 32px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 230px;
      height: 32px;

      .no-top {
        width: 35px;
        height: 32px;
        margin-left: 11px;
        text-align: center;
        font-size: 16px;
        color: #666;
      }
      &:nth-child(-n+3) .no-top {
        color: #c10d0c;
      }

      a {
        flex: 1;
        width: 170px;
        height: 32px;
        color: #000;
      }

      .operate {
        display: none; 
        margin-top: 11px;
        button {
          display: inline-block;
          width: 17px;
          height: 17px;
          margin-right: 10px;
          text-indent: -9999px;
        }
        .play {
          background-position: -267px -268px;
        }
        .addto {
          margin: 2px 6px 0 0;
          background-position: 0 -699px;
        }
        .collect {
          background-position: -297px -268px;
        }
      }
      &:hover .operate{
        display: block;
      }
    }
  }

  .more {
    height: 32px;
    line-height: 32px;
    text-align: right;
    margin-right: 32px;
    a {
      color: #000;
    }
  }
`