import React, { memo } from 'react'

import { hotDjRadio } from '@/api/local-data'

import { DjRadioWrapper } from './styled'

export default memo(function HEDjradioRcmd() {
  return (
    <DjRadioWrapper>
      <h3 className="top">热门主播</h3>
      <ul className="dj-list">
        {
          hotDjRadio.map(item => {
            return (
              <li key={item.url}>
                <a href={item.url} className="head">
                <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <p>
                    <a href={item.url}>{item.name}</a> 
                  </p>
                  <p className="text-nowrap">{item.position}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </DjRadioWrapper>
  )
})
