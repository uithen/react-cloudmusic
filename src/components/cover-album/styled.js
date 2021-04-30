import styled from 'styled-components'

export const CoverAlbumWrapper = styled.div`
  width: ${props => props.width + "px"};
  margin-top: 17px;
  margin-left: 11px;

  .coveritem {
    position: relative;
    width: ${props => props.size + "px"};
    height: ${props => props.size + "px"};
    margin-bottom: 7px;

    a {
      width: ${props => props.width + "px"};
      height: ${props => props.size + "px"};
      background-position: 0 ${props => props.bgp + "px"};
    }
  }

  .title,
  .author {
    width: 90%;
    line-height: 18px;

    a {
      font-size: 12px;
    }
  }

  .title a {
    color: #000;
  }
`