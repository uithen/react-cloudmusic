import React, { memo, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { ThemeHeaderRcmdWrapper } from './styled'

export default memo(function HEThemeHeaderRcmd(props) {
  const { tit, tabTitle, moreLink = '/' } = props

  return (
    <ThemeHeaderRcmdWrapper className="sprite_02">
      <h3 className="tit">{tit}</h3>
      {
        tabTitle && (
          <div className="tab">
            {
              tabTitle.map(tab => {
                return (
                  <Fragment key={tab}>
                    <a href="/todo" onClick={e => props.onClick(e, tab)}>{tab}</a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
          </div>
        )
      }
      <span className="more">
        <Link to={moreLink}>更多</Link>
        <i className="sprite_02">&nbsp;</i>
      </span>
    </ThemeHeaderRcmdWrapper>
  )
})
