import styled from 'styled-components'

export const SimiSongsWrapper = styled.div`
  .songs {
    .song-item {
      display: flex;
      align-items: center;
      width: 200px;
      margin-top: 15px;

      .image {
        width: 50px;
        height: 50px;
      }

      .info {
        margin-left: 10px;

        .name {
          font-size: 14px;
          color: #000;
        }

        .auchor {
          color: #999;

          .nickname {
            color: #666;
            margin-left: 5px;
          }
        }
      }
    }
  }
`