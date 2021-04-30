import React, { memo } from 'react'

import { BackTop } from 'antd'

export default memo(function HEBackTop() {
  const style = {
    right: 117,
    bottom: 117,
  }

  return (
    <>
      <BackTop style={style} />
    </>
  )
})
