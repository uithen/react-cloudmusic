import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { 
  getCurrentSongAction, 
  changePlayModeSeqAction,
  switchCurrentSong,
  changeCurrentLyricIndexAction
 } from '../../pages/song/store'
import { convertImgMini, formatDate, getPlayUrl } from '@/utils/handle-format'

import { Slider, message } from 'antd'
import { NavLink } from 'react-router-dom'
import {
  PlaybarWrapper,
  PlaybarContent
} from './styled'

export default memo(function HEAppPlaybar() {
  // <--- state and props --->
  const [currentTime, setCurrentTime] = useState(0)
  const [sliderProgress, setsliderProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLocked, setIsLocked] = useState(true)


  // <--- redux hooks --->
  const dispatch = useDispatch()
  const {
    currentSong,
    playModeSeq,
    playList,
    lyricList,
    currentLyricIndex
  } = useSelector(
    state => ({
      currentSong: state.getIn(['song', 'currentSong']),
      playModeSeq: state.getIn(['song', 'playModeSeq']),
      playList: state.getIn(['song', 'playList']),
      lyricList: state.getIn(['song', 'lyricList']),
      currentLyricIndex: state.getIn(['song', 'currentLyricIndex'])
    }),
    shallowEqual
  )


  // <--- other hooks --->
  const audioRef = useRef()
  const playbarRef = useRef()

  useEffect(
    () => dispatch(getCurrentSongAction(363132)),
    [dispatch]
  )

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id)
    // debugger 
    audioRef.current.play().then(res => {
      setIsPlaying(true)
    }).catch(err => {
      setIsPlaying(false)
    })
  }, [currentSong])


  // <--- other handle --->
  const picUrl = currentSong.al?.picUrl || 'can give one local image as a placeholder'
  const artist = currentSong.ar?.[0]?.name || '群星'
  const duration = currentSong.dt || 0

  // formatDate只针对时间戳(毫秒)做格式化(如:242880 --> 04:02)
  const showDuration = formatDate(duration, 'mm:ss')
  const showCurrentTime = formatDate(currentTime, 'mm:ss')

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  // 播放状态下,实时更新当前面板时间和进度条
  const handleTimeUpdate = (e) => {
    const currentTime = (e.target.currentTime) * 1000
    if (!isChanging) {
      setCurrentTime(currentTime)
      setsliderProgress(currentTime / duration * 100)
    }

    // 匹配当前歌词
    const len = lyricList.length
    let i = 0
    // debugger
    for (; i < len; i++) {
      const lyricTime = lyricList[i]?.time || 0
      if (currentTime < lyricTime) {
        // lyricIndex = i 
        // 匹配到第一个满足的就好,必须break,否则总是拿到最后一项索引
        break 
      }
    }
    // 由于当前歌词的真正进度实际为上一句歌词,因此最终获取的索引须减去1
    const finalIndex = i - 1
    // "防抖"优化
    if (finalIndex !== currentLyricIndex) {
      dispatch(changeCurrentLyricIndexAction(finalIndex))
      const lyric = lyricList[finalIndex]?.content 

      // 歌词展示(播放栏上方)
      message.open({
        key: 'lyric',
        content: lyric,
        duration: 0,
        className: 'lyric'
      })
    }
  }

  // 滑块拖拽状态下实时更新面板当前时间和进度条
  const handleSliderChange = useCallback(
    value => {
      setIsChanging(true)
      const currentTime = value / 100 * duration
      setCurrentTime(currentTime)
      setsliderProgress(value)
    },
    [duration]
  )

  // 将面板时间与进度条设置为鼠标松开滑块时的位置
  const handleSliderAfterChange = useCallback(value => {
    const currentTime = (value / 100 * duration) / 1000
    audioRef.current.currentTime = currentTime
    // setCurrentTime(currentTime * 1000)
    setIsChanging(false)
    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])


  // 修改播放模式(0 ->顺序,1 ->随机,2 ->单曲循环)
  const changePlayModeSeq = () => {
    let currentSeq = playModeSeq + 1
    if (currentSeq > 2) {
      currentSeq = 0
    }
    dispatch(changePlayModeSeqAction(currentSeq)) 
  }
 
  // 点击上一首/下一首切换歌曲
  const switchMusic = tag => {
    dispatch(switchCurrentSong(tag))
  }
  
  // 单首歌曲播放完毕,自动切换至下一首
  const handleMusicEnded = e => {
    // 单曲循环
    if (playModeSeq === 2) {
      audioRef.current.currentTime = 0
    } else {
      // 随机/顺序
      dispatch(switchCurrentSong(1))
    }
    // 列表中只有一首歌时,新旧index始终相等(0),须手动调用play,否则将不会重新渲染,导致自动播放失败
    audioRef.current.play()
      .catch(err => setIsPlaying(true))
  }

  // 底部播放栏面板的显示与隐藏
  const hidePlaybar = e => {
    if (!isLocked) {
      playbarRef.current.style.top = '-7px'
      playbarRef.current.style.transition = 'top .8s'
    }
  }

  const showPlaybar = e => {
    if (!isLocked) {
      playbarRef.current.style.top = '-53px'
      playbarRef.current.style.transition = 'top .8s'
    }
  }

  return (
    <PlaybarWrapper>
      <div className="playbar" ref={playbarRef} onMouseLeave={hidePlaybar}>
        <div className="up-down">
          <div className="fill-left sprite_playbar">
            <button
              onClick={e => setIsLocked(!isLocked)}
              className={isLocked ? "lock sprite_playbar" : "unlock sprite_playbar"}
            >
            </button>
          </div>
          <div className="fill-right sprite_playbar"></div>
        </div>
        <div className="bg sprite_playbar"></div>
        <div onMouseEnter={showPlaybar} className="show-playbar" title="展开播放条"></div>
        <PlaybarContent sequence={playModeSeq} className="wrap-980">
          <div className="control-btns">
            <button
              onClick={e => switchMusic(-1)}
              className="prev sprite_playbar"
            >
              上一首
            </button>
            <button
              onClick={playMusic}
              className={isPlaying ? "pause sprite_playbar" : "play sprite_playbar"}
            >
              播放/暂停
            </button>
            <button
              onClick={e => switchMusic(1)}
              className="next sprite_playbar"
            >
              下一首
            </button>
          </div>
          <div className="cover">
            <img src={convertImgMini(picUrl, 34)} alt="" />
            <NavLink className="mask sprite_playbar" to="/song"></NavLink>
          </div>
          <div className="play-area">
            <div className="song-info">
              <a className="song-name text-nowrap" href="/song?id=1825496057" title={currentSong.name}>{currentSong.name}</a>
              <a className="mv sprite_playbar" href="/song?id=1825496057" title="mv">mv</a>
              <a className="by" title={artist} href="/song?id=1825496057" >{artist}</a>
              <a className="source sprite_playbar" title="来自专辑" href="/song?id=1825496057" >&nbsp;</a>
            </div>
            <div className="progress">
              {/* <Slider /> */}
              <Slider
                value={sliderProgress}
                onChange={handleSliderChange}
                onAfterChange={handleSliderAfterChange}
                tooltipVisible={false}
              />

              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="total-time">{showDuration}</span>
              </div>
            </div>
          </div>
          <div className="share-add">
            <button className="add sprite_playbar" title="收藏">收藏</button>
            <button className="share sprite_playbar" title="分享">分享</button>
          </div>
          <div className="settings sprite_playbar">
            <div className="vol-mudulate">
              <div className="vol-bar sprite_playbar"></div>
              <div className="vol-bg sprite_playbar">
                <div className="vol-crt sprite_playbar"></div>
                <span className="vol-btn sprite_icon"></span>
              </div>
            </div>
            <button className="volume sprite_playbar" title="音量"></button>
            <button onClick={changePlayModeSeq} className="mode sprite_playbar"></button>
            <span className="play-list">
              <span className="add-tip sprite_playbar">已添加到播放列表</span>
              <button title="播放列表" className="list-icon sprite_playbar">{playList.length}</button>
            </span>
            <div className="mode-tip sprite_playbar">随机</div>
          </div>
        </PlaybarContent>
      </div>
      {/* <audio/> */}
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleMusicEnded} />

    </PlaybarWrapper>
  )
})