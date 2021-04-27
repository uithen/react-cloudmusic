import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { headerLinks} from '@/api/local-data'
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './styled'


export default memo(function HEAppHeader() {
  const showNav = (nav, index) => {
    if (index < 3) {
      return (
        <NavLink to={nav.link}>
          <em>{nav.title}</em>
          <sub className="sprite_01 icon">&nbsp;</sub>
        </NavLink>
      )
    } else {
      return <a href={nav.link} target="_blank" rel="noreferrer">{nav.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-1100">
        <HeaderLeft>
          <h1 className="logo sprite_01">
            <a href="/#">网易云音乐</a>
          </h1>
          <ul className="nav-list">
            {
              headerLinks.map((nav, index) => {
                return (
                  <li key={nav.title} className="nav-item">
                    {showNav(nav, index)}
                  </li>
                )
              })
            }
          </ul>
        </HeaderLeft>
        <HeaderRight>
            <Input
              prefix={<SearchOutlined />}
              className="search" 
              placeholder="音乐/视频/电台/用户" 
            />
            <a
              className="creator-center" 
              href="//music.163.com/#/login" 
              rel="noreferrer noopener"
              target="_blank" 
            >
              创作者中心
            </a>
            <div className="login">
              <a href="/#">登录</a>
            </div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
