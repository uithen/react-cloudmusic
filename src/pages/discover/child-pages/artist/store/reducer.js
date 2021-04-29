import { Map } from 'immutable'
import {
  CHANGE_ARTIST_LIST, 
  CHANGE_CURRENT_AREA, 
  CHANGE_CURRENT_TYPE
} from './constants'

const defaultArtist = Map({
  artistList: [],
  currentArea: 96,
  currentType: {
    name: '欧美女歌手',
    type: 2
  }
})

const artistReducer = (state = defaultArtist, action) => {
  switch (action.type) {
    case CHANGE_ARTIST_LIST: 
      return state.set('artistList', action.artistList)
    case CHANGE_CURRENT_AREA: 
      return state.set('currentArea', action.currentArea)
    case CHANGE_CURRENT_TYPE: 
      return state.set('currentType', action.currentType) 
    default: 
      return state 
  }
}

export default artistReducer