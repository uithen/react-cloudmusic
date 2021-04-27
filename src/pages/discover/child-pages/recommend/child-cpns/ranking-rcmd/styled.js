import styled from 'styled-components'

import bgImg from '@/assets/img/recommend-top-bg.png'
export const RankingRcmdWrapper = styled.div`
  .list-item {
    display: flex;
    height: 472px;
    margin-top: 20px;
    /* padding-left: 1px; */
    background: url(${bgImg}) no-repeat;

    dl {
      /* width: 230px; */
      flex: 1;
    }
    dl:last-child {
      width: 228px;
      border-right: 1px solid #ccc;
    }
  }
`