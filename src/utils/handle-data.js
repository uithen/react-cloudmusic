// 歌单页-组织歌单分类数据的结构
export const handleSongsCategories = res => {
  const categories = Object.entries(res.categories)

  const categoryList = categories.map(([key, value]) => {
    return {
      name: value,
      subCate: []
    }
  })

  for (const item of res.sub) {
    categoryList[item.category].subCate.push(item)
  }

  return categoryList
}

// 歌手页-获取歌手字母类别(A-Z)
export const generateSingerAlpha = () => {
  const alphabets = ['-1']
  let start = 'A'.charCodeAt(0) // 65
  const end = 'Z'.charCodeAt(0) // 90

  for (; start <= end; start++) {
    // 65->A,66->B...90->Z ---> [A,B,...,Z]
    alphabets.push(String.fromCharCode(start)) 
  }

  alphabets.push('0')
  
  return alphabets
}

export const singerAlphas = generateSingerAlpha()