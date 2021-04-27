/**
 * [by:Evi]
 * [00:00.000] 作词 : 许嵩\n
 * [00:01.000] 作曲 : 许嵩\n
 * [00:02.000] 编曲 : Adam Lee\n
 * [00:23.66]如果早知道那天是我们最后一面\n
 * [00:29.69]我绝不会和你谈论琐事浪费时间\n
 * [00:35.86]人生里看似偶然却又必经的告别\n
 * ... 
 * ...
 * [03:55.11]我们相约老地方\n"
 */

// [00:23.66]
const parseTime = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString) {
  const lineStrArr = lyricString.split('\n')
  const lyricList = []
  for (let lineString of lineStrArr) {
    if (lineString) { // 不匹配最后多余出来的空格
      const result = parseTime.exec(lineString)
      // 跳过乱入的信息,比如有些歌词以[by:Evi]开头
      if (!result) continue 
      // 获取歌词时间(ms)
      const msOfMinutes = result[1] * 60 * 1000
      const msOfSeconds = result[2] * 1000
      const ms = result[3] * 1
      const time = msOfMinutes + msOfSeconds + ms
      // 获取歌词文本
      const content = lineString.replace(parseTime, '').trim()
     
      const lineObj = {time, content}
      lyricList.push(lineObj)
    }
  }
  return lyricList
}