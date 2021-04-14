import styled from 'styled-components'

import downloadLink from '@/assets/img/download.png'
import arrowIcon from '@/assets/img/banner_sprite.png'

const TopBannerWrapper = styled.div`
  // 高斯模糊图片背景
  background: url(${props => props.bgImg}) center/6000px;

  .banner {
    display: flex;
    height: 285px;
    position: relative;
  }
`

const BannerLeft = styled.div`
  width: 730px;
  
  .banner-item {
    overflow: hidden;
    height: 285px;

    .banner-img {
      width: 100%;
      height: 100%;
    }

  }
`
const BannerRight = styled.div`
  position: relative;
  width: 250px;

  a {
    display: inline-block;
    width: 250px;
    height: 285px;
    text-indent: -9999px;
    background: url(${downloadLink})
  }

  p {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 10px;
    color: #8d8d8d;
  }
`
const BannerControl = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;

  .arrow {
    position: absolute;
    width: 37px;
    height: 63px;
    transform: translateY(-50%);
    background-image: url(${arrowIcon});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }
  .arrow-prev {
    left: -68px;
    background-position: 0 -360px;
  }
  .arrow-next {
    right: -68px;
    background-position: 0 -508px;
  }
`

export {
  TopBannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
}