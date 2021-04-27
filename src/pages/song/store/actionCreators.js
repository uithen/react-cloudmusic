import { getSongDetail, getLyric } from '@/api/song-request'
import { getRandomIndex } from '@/utils/handle-math'
import { parseLyric } from '@/utils/handle-parse'

import { 
  CHANGE_CURRENT_SONG, 
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX, 
  CHANGE_PLAY_MODE_SEQ,
  CHANGE_LYRIC_LIST, 
  CHANGE_CURRENT_LYRIC_INDEX,
 } from './constants'

 // action 
const changeCurrentSongAction = currentSong => ({
  type: CHANGE_CURRENT_SONG,
  currentSong
})

const changePlayListAction = playList => ({
  type: CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = index => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  index
})

export const changePlayModeSeqAction = playModeSeq => ({
  type: CHANGE_PLAY_MODE_SEQ,
  playModeSeq 
})

const changeLyricListAction = lyricList => ({
  type: CHANGE_LYRIC_LIST,
  lyricList
})

export const changeCurrentLyricIndexAction = currentLyricIndex => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})

// thunk "action"
export const getCurrentSongAction = ids => {
  return async (dispatch, getState) => {
    // 1. 查找播放列表里是否存在所传id的歌曲
    const playList = getState().getIn(['song', 'playList'])
    const currentSongindex = playList.findIndex(song => song.id === ids)
    
    if (currentSongindex !== -1) {// 1.1 如果存在
      // 记录其在播放列表中的索引
      dispatch(changeCurrentSongIndexAction(currentSongindex))
      // 并设置为当前歌曲
      const currentSong = playList[currentSongindex]
      dispatch(changeCurrentSongAction(currentSong))

    } else { // 1.2 如果不存在
      // 则请求该歌曲的数据
      const  res = await getSongDetail(ids)
      const newSong = res.songs?.[0]
      if (!newSong)  return 
      // push到播放列表
      const newPlayList = [...playList, newSong]
      // 并更新redux中的数据
      dispatch(changeCurrentSongAction(newSong)) // 更新为当前歌曲
      dispatch(changePlayListAction(newPlayList)) // 更新播放列表
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1)) // 更新当前歌曲对应索引
    }

    // 2. 获取歌词并解析
    dispatch(getLyricListAction(ids))
  }
}

const getLyricListAction = id => {
  return async dispatch => {
    const res = await getLyric(id)
    const lyricStr = res?.lrc?.lyric || '暂无歌词'
    const lyricList = parseLyric(lyricStr)
    dispatch(changeLyricListAction(lyricList)) 
  }
}


// other handle 
export const switchCurrentSong = tag => {
  return async (dispatch, getState) => {
    const currentPlayList = getState().getIn(['song', 'playList'])
    const currentSequence = getState().getIn(['song', 'playModeSeq'])
    let currentSongIndex = getState().getIn(['song', 'currentSongIndex'])
    const len = currentPlayList.length

    // 播放模式匹配
    switch(currentSequence) {
      // 随机
      case 1: 
        // 列表中歌曲低于2首时
        if (len <= 1) return 
        let randomIndex = getRandomIndex(len)
        // 不应随机到上一次切换的歌曲
        while(randomIndex === currentSongIndex) {
          randomIndex = getRandomIndex(len)
        }
        currentSongIndex = randomIndex
        break 
      // 循环/单曲循环(这俩模式的手动切换逻辑本质是一样的,只有自动切换时的区别)
      default: 
        currentSongIndex += tag 
        if (currentSongIndex >= len) currentSongIndex = 0 
        if (currentSongIndex < 0) currentSongIndex = len - 1 
    }
    // 更新至redux
    const currentSong = currentPlayList[currentSongIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 获取歌词并解析
    dispatch(getLyricListAction(currentSong.id))
  }
}

