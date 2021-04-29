import React, { memo } from 'react'



import { Pagination } from 'antd'

import { PaginationWrapper } from './styled'

export default memo(function HEPagination(props) {
  const {total, currentPage, pageSize, onPageChange} = props

  const itemRender = (page, type, originalElement) => {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>
    }
    if (type === 'next') {
      return <button className="control next">下一页 &gt;</button>
    }
    return originalElement
  }
  
  return (
    <PaginationWrapper>
      <Pagination className="pagination"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        onChange={onPageChange}
        pageSize={pageSize}
        itemRender={itemRender}
        size="small"
        showSizeChanger={false}
      />
    </PaginationWrapper>
  )
})
