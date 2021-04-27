// 导出规则(个人习惯): 
// 子模块的导出方式,即在入口文件只默认导出reducer,比如下行这样 
// export { default as reducer } from './reducer' 

// 若非该模块下的其他子组件用到了该模块下的store数据,则不再遵循上面导出规则,即用到什么导出什么
import reducer from './reducer'
import { 
  getCurrentSongAction, 
  changePlayModeSeqAction,
  switchCurrentSong,
  changeCurrentLyricIndexAction
 } from './actionCreators'

export {
  reducer,
  getCurrentSongAction,
  changePlayModeSeqAction,
  switchCurrentSong,
  changeCurrentLyricIndexAction
}
