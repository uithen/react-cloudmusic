import React, { memo, Fragment } from 'react'

import { ThemeHeaderRcmdWrapper } from './styled'

export default memo(function HEThemeHeaderRcmd(props) {
  const {tit, tabTitle} = props
  
  return (
    <ThemeHeaderRcmdWrapper className="sprite_02">
      <a
        className="tit"
        href="/#"
      >
        {tit}
      </a>
      {
        tabTitle && (
          <div className="tab">
            {
              tabTitle.map(tab => {
              return (
                <Fragment key={tab}>
                  <a href="/#">{tab}</a>
                  <span className="line">|</span>
                </Fragment>
              )
              })
            }
          </div>
        )
      }
      <span className="more">
        <a href="/#">更多</a>
        <i className="sprite_02">&nbsp;</i>
      </span>
    </ThemeHeaderRcmdWrapper>
  )
})
