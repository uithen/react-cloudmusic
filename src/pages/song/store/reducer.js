import { Map } from 'immutable'
import { 
  CHANGE_CURRENT_SONG, 
  CHANGE_CURRENT_SONG_INDEX, 
  CHANGE_PLAY_LIST, 
  CHANGE_PLAY_MODE_SEQ,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX,
  CHANGE_SIMI_SONGS,
  CHANGE_SIMI_SONG
 } from './constants'

const defaultSong = Map({
  currentSong: {},
  playList: [], 
  currentSongIndex: 0, // 记录当前歌曲位于播放列表playList中的索引
  playModeSeq: 0, // 播放模式设定,0 ->顺序,1 ->随机,2 ->单曲循环
  lyricList: [],
  currentLyricIndex: 0, 

  simiSongs: [],
  simiSong: []
})

const songReducer = (state = defaultSong, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_SONG: 
      return state.set('currentSong', action.currentSong)
    case CHANGE_PLAY_LIST: 
      return state.set('playList', action.playList)
    case CHANGE_CURRENT_SONG_INDEX: 
      return state.set('currentSongIndex', action.index)
    case CHANGE_PLAY_MODE_SEQ:
      return state.set('playModeSeq', action.playModeSeq)
      case CHANGE_LYRIC_LIST: 
      return state.set('lyricList', action.lyricList)
      case CHANGE_CURRENT_LYRIC_INDEX:
        return state.set('currentLyricIndex', action.currentLyricIndex)
      case CHANGE_SIMI_SONGS: 
        return state.set('simiSongs', action.simiSongs)
      case CHANGE_SIMI_SONG:
        return state.set('simiSong', action.simiSong)
    default: 
      return state 
  }
}

export default songReducer