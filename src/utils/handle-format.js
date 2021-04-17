// 播放量展示处理
const getPlayCount = count => {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) { // [1万,1亿] 
    return Math.floor(count / 1000) / 10 + '万' // 保留1位小数
  } else {
    return Math.floor(count / 10000000) / 10 + '亿' // >1亿,保留1位小数
  }
}

// 封面图优化
const convertImgMini = (imgUrl, size) => {
  return `${imgUrl}?param=${size}y${size}`
}

export {
  getPlayCount,
  convertImgMini
}