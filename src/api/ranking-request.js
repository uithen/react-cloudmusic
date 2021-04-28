import request from "./request"
// 榜单
export function getRankingCateList() {
  return request({
    url: "/toplist"
  })
}

// 榜单详情
export function getRankingCurrentCate(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}