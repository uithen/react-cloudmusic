// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/child-pages/recommend/store'
import { reducer as rankingReducer } from '../pages/discover/child-pages/ranking/store'
import { reducer as songReducer } from '../pages/song/store'

const reducer = combineReducers({
  recommend: recommendReducer,
  ranking: rankingReducer,
  song: songReducer,
})

export default reducer