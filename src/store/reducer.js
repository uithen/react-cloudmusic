// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store'
import { reducer as rankingReducer } from '../pages/discover/child-pages/ranking/store'
import { reducer as songsReducer } from '../pages/discover/child-pages/songs/store'
import { reducer as radioReducer } from '../pages/discover/child-pages/djradio/store'
import { reducer as artistReducer } from '../pages/discover/child-pages/artist/store'
import { reducer as songReducer } from '../pages/song/store'

const reducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  djradio: radioReducer,
  artist: artistReducer,
  song: songReducer,
})

export default reducer