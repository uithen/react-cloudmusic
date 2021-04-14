import React, { Fragment, memo } from 'react'

import { footerLinks, footerImages } from '@/api/local-data'

import {
  StyledFooter,
  FooterLeft,
  FooterRight
} from './styled'

export default memo(function HEAppFooter() {
  return (
    <StyledFooter>
      <div className="wrap-980 content">
        <FooterLeft>
          <div className="link">
            {
              footerLinks.map(item => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link} target="_blank" rel="noreferrer noopener">
                    {item.title}
                    </a>
                    <span className="divider">|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="copyright">
            <span>网易公司版权所有©1997-2021</span>
            <span>
              杭州乐读科技有限公司运营：
              <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">
                浙网文[2018]3506-263号
              </a>
            </span>
          </div>
          <div className="report">
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span> 
              举报邮箱：
              <a href="mailto:ncm5990@163.com" target="_blank" rel="noopener noreferrer">ncm5990@163.com</a>
            </span>
          </div>
          <div className="info">
            <span>
              <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
                粤B2-20090191-18  工业和信息化部备案管理系统网站
              </a>
            </span>
            <span>
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" target="_blank" rel="noopener noreferrer">
                浙公网安备 33010902002564号
              </a>
            </span>
          </div>
        </FooterLeft>
        <FooterRight>
          {
            footerImages.map(item => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} target="_blank" rel="noreferrer noopener">
                    {item.xxx}
                  </a>
                  <span className="title">{item.xxx}</span>
                </li>
              )
            })
          }
        </FooterRight>
      </div>
    </StyledFooter>
  )
})
