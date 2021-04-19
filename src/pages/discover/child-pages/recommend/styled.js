import styled from 'styled-components'

const RecommendWrapper = styled.div`

`
const RcmdContent = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-bottom: none;
  background-color: #fff;
`
const RcmdLeft = styled.div`
  width: 729px;
  padding: 20px 20px 40px;
  border-right: 1px solid #ccc;
`
const RcmdRight = styled.div`
  width: 250px;
`

export {
  RecommendWrapper,
  RcmdContent,
  RcmdLeft,
  RcmdRight
}