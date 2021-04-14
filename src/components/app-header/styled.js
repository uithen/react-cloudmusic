import styled from 'styled-components'  

import hotIcon from '@/assets/img/sprite_01.png'

const HeaderWrapper = styled.div`
  height: 75px;
  font-size: 14px;
  background-color: #242424;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

const HeaderLeft = styled.div`
  display: flex;
  margin-right: 52px;

  a {
    display: inline-block;
    padding: 0 19px;
    height: 100%;
    color: #ccc;
  }

  .logo {
    width: 176px;
    height: 70px;
    background-position: 0 0;

    a {
      text-indent: -9999px;
      width: 157px;
      padding-left: 0;
    }
  }

  .nav-list {
    display: flex; 
    line-height: 70px;

    .nav-item {
      position: relative;

      &:hover a, a.active {
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }

      a.active .icon {
        position: absolute;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        margin-left: -6px;
        background-position: -226px 0;
      }

      :last-of-type a {
        position: relative;

        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          /* background-image: url(${require("@/assets/img/sprite_01.png")}); */
          background-image: url(${hotIcon});
          background-position: -190px 0;
          top: 20px;
          right: -20px;
        }
      }
    }
  }
`

const HeaderRight = styled.div`
  flex: 1;
  display: flex; 
  align-items: center;
  justify-content: space-evenly;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 32px;

    input {
      color: #333;

      &::placeholder {
        color: #9b9b9b;
        font-size: 12px;
      }
    }
  }
  
  .creator-center {
    width: 90px;
    height: 32px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #4f4f4f;
    border-radius: 20px;
    color: #ccc;

    &:hover {
      color: #fff;
      text-decoration: none;
      border-color: #ccc;
    }
  }

  .login:hover a {
    color: #ccc;
  }
`

export {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
}