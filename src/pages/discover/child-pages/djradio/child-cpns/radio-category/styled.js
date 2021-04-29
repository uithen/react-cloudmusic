import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  margin-bottom: 20px;

  ul {
    display: flex; 
    flex-flow: row wrap;

    li {
      margin: 0 0 25px 29px;

      span {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        cursor: pointer;

        &:hover {
          background-color: #eee;
        }
        
        &.active {
          color: #d35757;
          border: 2px solid #d35757;
          border-radius: 5px;

          .img {
            background-position: -48px 0;
          }
        }
      }
    }
  }
`

export const BgImg = styled.i`
  width: 48px;
  height: 48px;
  margin: 2px auto 0;
  background-image: url(${props => props.imgUrl})
`