import styled from 'styled-components'

const DiscoverWrapper = styled.div`
  .sub-nav {
    height: 30px;
    background-color: #C20C0C;
  }
`

const DiscoverSubNav = styled.ul`
  display: flex;
  position: relative;
  top: -4px;
  padding-left: 180px;

  .nav-item {
    a {
      display: inline-block;
      height: 20px;
      padding: 0 13px;
      margin: 7px 17px 0;
      line-height: 21px;
      color: #fff;

      &:hover,
      &.active {
        border-radius: 20px;
        text-decoration: none;
        background-color: #9b0909;
      }
    }
  }
`

export {
  DiscoverWrapper,
  DiscoverSubNav
}