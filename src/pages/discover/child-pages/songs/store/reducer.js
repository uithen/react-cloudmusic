import { Map } from 'immutable'
import {
  CHANGE_CATE_LIST,
  CHANGE_CURRENT_CATE_SONGS,
  CHANGE_CURRENT_CATE_SONGS_NAME
} from './constants'
const defaultSongs = Map({
  cateList: [],
  currentCateSongs: {},
  currentCateSongsName: '全部'
})

const songsReducer = (state = defaultSongs, action) => {
  switch (action.type) {
    case CHANGE_CATE_LIST: 
      return state.set('cateList', action.cateList) 
    case CHANGE_CURRENT_CATE_SONGS: 
      return state.set('currentCateSongs', action.currentCateSongs)
    case CHANGE_CURRENT_CATE_SONGS_NAME: 
      return state.set('currentCateSongsName', action.currentCateSongsName)
    default: 
      return state 
  }
}

export default songsReducer