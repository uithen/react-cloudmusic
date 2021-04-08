import styled from 'styled-components'
import spriteFooterOne from '@/assets/img/sprite_footer_01.png'
import spriteFooterTwo from '@/assets/img/sprite_footer_02.png'

export const StyledFooter = styled.div`
  /* border: 1px solid #ccc; */
  height: 172px;
  border-top: 1px solid #d3d3d3;

  .content {  
    display: flex; 
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  flex: 1;
  padding-top: 15px;
  line-height: 24px;

  .link {
    a {
      color: #999;
    }

    .divider {
      margin: 0 10px;
      color: #999;
    }
  }

  & > div:nth-of-type(n+2) span {
    margin-right: 15px;
  }
`

export const FooterRight = styled.ul`
  /* border: 1px solid skyblue; */
  display: flex;

  .item {
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${spriteFooterTwo});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(3) .link {
      background-position: -60px -50px;
    }
    :nth-child(4) .link {
      background-position: 0 -101px;
    }

    .title {
      display: block;
      margin-top: 5px;
      width: 52px;
      height: 10px;
      background-image: url(${spriteFooterOne});
      background-size: 180px 100px;
    }
    
    :nth-child(1) .title {
      background-position: -1px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }
    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
}
`