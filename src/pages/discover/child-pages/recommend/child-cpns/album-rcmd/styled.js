import styled from 'styled-components'

import arrowIcon from '@/assets/img/sprite_02.png'

export const AlbumWrapper = styled.div`
  margin-top: 40px;

  .album {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    background: #f5f5f5;

    .arrow {
      width: 17px;
      height: 17px;
      background: url(${arrowIcon});
      text-decoration: none;
    }
    .arrow-prev {
      background-position: -260px -75px;
    }
    .arrow-next {
      background-position: -300px -75px;
    }
    
    .album-roller {
      width: 645px;
      height: 180px;

      .album-list {
        display: flex !important;
      }
    }
  }
`
