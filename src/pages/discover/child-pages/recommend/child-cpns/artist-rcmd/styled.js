import styled from 'styled-components'

export const ArtistRcmdWrapper = styled.div`
  margin-top: 17px;
  
  .top {
    display: flex;
    justify-content: space-between;
    height: 24px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    font-size: 12px;

    span {
      color: #333;
      font-weight: bold;
    }
  }

  .artist-list {
    margin: 6px 0 14px 20px;

    li {
      margin-top: 14px;
      width: 210px;
      height: 62px;
      background: #fafafa;

      a {
        display: flex;
        width: 100%;
        height: 100%;
        text-decoration: none;
        .head {
          width: 62px;
          height: 62px;
        }
        .info {
          flex: 1;
          padding-left: 14px;
          border: 1px solid #e9e9e9;
          border-left: none;
          h4 {
            margin-top: 8px;
            font-size: 14px;
            font-weight: bold;
            color: #333;
          }
          p {
            margin-top: 8px;
          }
        }
      }
    }
  }

  .join-us {
    a {
      display: inline-block;
      margin-left: 20px;
      padding: 0 5px 0 0;
      text-align: center;
      border-radius: 4px;
      color: #333;
      background-position: right -100px;

      i {
        display: inline-block;
        width: 205px;
        height: 31px;
        line-height: 31px;
        padding: 0 15px 0 20px;
        font-weight: bold;
        background-position: 0 -59px;
      }
    }
  }
`