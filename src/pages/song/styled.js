import styled from 'styled-components'

import wrapBg from '@/assets/img/wrap-bg.png'

const SongWrapper = styled.div`
  display: flex;
  width: 982px;
  min-height: 700px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background-color: #fff;
  background: url(${wrapBg}) repeat-y center 0;
`

const SongLeft = styled.div`
  flex: 1;
`
const SongRight = styled.div`
  width: 270px;
`
export {
  SongWrapper,
  SongLeft,
  SongRight
}