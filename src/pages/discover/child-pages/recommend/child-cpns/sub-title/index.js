import React, { memo, Fragment } from 'react'

import { SubTitleWrapper } from './styled'

export default memo(function HESubTitle(props) {
  const {tit, tabTitle} = props
  
  return (
    <SubTitleWrapper className="sprite_02">
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
    </SubTitleWrapper>
  )
})
