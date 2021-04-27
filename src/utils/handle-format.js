// 播放量展示处理
export const getPlayCount = count => {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) { // [1万,1亿] 
    return Math.floor(count / 1000) / 10 + '万' // 保留1位小数
  } else {
    return Math.floor(count / 10000000) / 10 + '亿' // >1亿,保留1位小数
  }
}

// 大图数据mini化处理
export const convertImgMini = (imgUrl, size) => {
  return `${imgUrl}?param=${size}y${size}`
}

// 日期格式处理(针对时间戳ms)
export function formatDate(time, fmt) {
  let date = new Date(time)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日")
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss")
}

export const getPlayUrl = id => {
  return `//music.163.com/song/media/outer/url?id=${id}.mp3`
}