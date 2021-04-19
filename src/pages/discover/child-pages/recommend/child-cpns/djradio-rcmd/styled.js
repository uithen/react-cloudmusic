import styled from 'styled-components'

export const DjRadioWrapper = styled.div`
  margin-top: 30px;

  .top {
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    font-weight: bold;
    color: #333;
  }

  .dj-list {
    margin: 20px 0 0 20px;

    li {
      display: flex;
      width: 210px;
      height: 50px;

      .head {
        width: 40px;
        height: 43px;
        margin-right: 10px;

        img {
          width: 40px;
          height: 40px;
          box-shadow: 0 0 1px #333 inset;
        }
      }

      .info {
        width: 160px;
        line-height: 21px;

        p {
          width: 100%;
          line-height: 21px;
          color: #666;
          a {
            color: #000;
          }
        }
      }
    }
  }
`