import styled from 'styled-components'

const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 688px;
  height: 35px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #C10D0C;
  background-position: -225px -156px;

  .tit {
    font-size: 20px;
    line-height: 28px;
    color: #333;

    &:hover {
      text-decoration: none;
    }
  }

  .tab {
    flex: 1;
    display: flex;
    margin: 7px 0 0 20px;

    .line {
      margin: 0 13px;
    }
    .line:last-of-type {
      visibility: hidden;
    }
  } 

  .more {
    margin-top: 9px;

    i {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
  }
`

export {
  SubTitleWrapper
}