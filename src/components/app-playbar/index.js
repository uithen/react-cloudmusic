import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  getCurrentSongAction,
  changePlayModeSeqAction,
  switchCurrentSong,
  changeCurrentLyricIndexAction
} from '../../pages/song/store'
import classnames from 'classnames'
import { convertImgMini, formatDate, getPlayUrl } from '@/utils/handle-format'

import { Slider } from 'antd'
import { NavLink } from 'react-router-dom'
import {
  PlaybarWrapper,
  PlaybarContent,
  PlayPanel
} from './styled'

export default memo(function HEAppPlaybar() {
  // <--- state and props --->
  const [currentTime, setCurrentTime] = useState(0)
  const [sliderProgress, setsliderProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPanel, setShowPanel] = useState(false)
  const [showVolBar, setShowVolBar] = useState(false)
  const [volume, setVolume] = useState(26)
  const [isLocked, setIsLocked] = useState(true)
  // <--- redux hooks --->
  const dispatch = useDispatch()
  const {
    currentSong,
    playModeSeq,
    playList,
    lyricList,
    currentLyricIndex,
    currentSongIndex
  } = useSelector(
    state => ({
      currentSong: state.getIn(['song', 'currentSong']),
      playModeSeq: state.getIn(['song', 'playModeSeq']),
      playList: state.getIn(['song', 'playList']),
      lyricList: state.getIn(['song', 'lyricList']),
      currentLyricIndex: state.getIn(['song', 'currentLyricIndex']),
      currentSongIndex: state.getIn(['song', 'currentSongIndex'])
    }),
    shallowEqual
  )


  // <--- other hooks --->
  const audioRef = useRef()
  const playbarRef = useRef()
  const panelLrcRef = useRef()

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
  const artist = currentSong.ar?.[0]?.name || '??????'
  const duration = currentSong.dt || 0
  const showDuration = formatDate(duration, 'mm:ss')
  const showCurrentTime = formatDate(currentTime, 'mm:ss')

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const handleTimeUpdate = (e) => {
    // ???????????????,????????????????????????????????????
    const currentTime = (e.target.currentTime) * 1000
    if (!isChanging) {
      setCurrentTime(currentTime)
      setsliderProgress(currentTime / duration * 100)
    }
    
    // ????????????????????????
    const finalIndex = getLrcIndex()
    // "??????"??????
    if (finalIndex !== currentLyricIndex) { 
      // ?????????redux
      dispatch(changeCurrentLyricIndexAction(finalIndex))

      // ????????????,????????????
      if (panelLrcRef.current) {
        let liHeight = 32
        // liHeight*3??????????????????????????????(??????);
        // scrollTop????????????????????????0??????,????????????????????????????????????????????????
        panelLrcRef.current.scrollTop = finalIndex * liHeight - ( liHeight * 3 )
      }
      
      // ????????????(???????????????)
      // const lyric = lyricList[finalIndex]?.content
      // message.open({
      //   key: 'lyric',
      //   content: lyric,
      //   duration: 0,
      //   className: 'lyric'
      // })
    }
  }

  // ???????????????????????????????????????????????????????????????
  const handleSliderChange = useCallback(
    value => {
      setIsChanging(true)
      const currentTime = value / 100 * duration
      setCurrentTime(currentTime)
      setsliderProgress(value)
    },
    [duration]
  )

  // ??????????????????????????????????????????????????????????????????
  const handleSliderAfterChange = useCallback(value => {
    const currentTime = (value / 100 * duration) / 1000
    audioRef.current.currentTime = currentTime
    // setCurrentTime(currentTime * 1000)
    setIsChanging(false)
    if (!isPlaying) {
      playMusic()
    }
  }, [duration, isPlaying, playMusic])

  // ??????
  const handleVolChange = useCallback(
    value => {
      setVolume(value)
      audioRef.current.volume = value / 100
    },
    []
  )

  // ??????????????????(0 ->??????,1 ->??????,2 ->????????????)
  const changePlayModeSeq = () => {
    let currentSeq = playModeSeq + 1
    if (currentSeq > 2) {
      currentSeq = 0
    }
    dispatch(changePlayModeSeqAction(currentSeq))
  }

  // ???????????????/?????????????????????
  const switchMusic = tag => {
    dispatch(switchCurrentSong(tag))
  }

  // ????????????????????????,????????????????????????
  const handleMusicEnded = e => {
    // ????????????
    if (playModeSeq === 2) {
      audioRef.current.currentTime = 0
    } else {
      // ??????/??????
      dispatch(switchCurrentSong(1))
    }
    // ???????????????????????????,??????index????????????(0),???????????????play,???????????????????????????,????????????????????????
    audioRef.current.play()
      .catch(err => setIsPlaying(true))
  }
  
  // ?????????????????????????????????
  const getLrcIndex = () => {
    const len = lyricList.length
    let i = 0
    // debugger
    for (; i < len; i++) {
      const lyricTime = lyricList[i]?.time || 0
      if (currentTime < lyricTime) {
        // lyricIndex = i 
        // ?????????????????????????????????,??????break,????????????????????????????????????
        break
      }
    }
    // ?????????????????????????????????????????????????????????,????????????????????????????????????1
    return i - 1
  }
  
  // ???????????????????????????????????????
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
        <div onMouseEnter={showPlaybar} className="show-playbar" title="???????????????"></div>
        <PlaybarContent sequence={playModeSeq} className="wrap-980">
          <div className="control-btns">
            <button
              onClick={e => switchMusic(-1)}
              className="prev sprite_playbar"
            >
              ?????????
            </button>
            <button
              onClick={playMusic}
              className={isPlaying ? "pause sprite_playbar" : "play sprite_playbar"}
            >
              ??????/??????
            </button>
            <button
              onClick={e => switchMusic(1)}
              className="next sprite_playbar"
            >
              ?????????
            </button>
          </div>
          <div className="cover">
            <img src={convertImgMini(picUrl, 34)} alt="" />
            <NavLink className="mask sprite_playbar" to="/song"></NavLink>
          </div>
          <div className="play-area">
            <div className="song-info">
              <a className="song-name text-nowrap" href="/todo" title={currentSong.name}>{currentSong.name}</a>
              <a className="mv sprite_playbar" href="/todo" title="mv">mv</a>
              <a className="by" title={artist} href="/todo" >{artist}</a>
              <a className="source sprite_playbar" title="????????????" href="/todo" >&nbsp;</a>
            </div>
            <div className="progress">
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
            <button className="add sprite_playbar" title="??????">??????</button>
            <button className="share sprite_playbar" title="??????">??????</button>
          </div>
          <div className="settings sprite_playbar">
            <div className={classnames('volume-bar sprite_playbar', {'showbar': showVolBar})}>
              <Slider 
                value ={volume}
                onChange={handleVolChange}
                vertical
              />
            </div>
            <button className="volume sprite_playbar" title="??????" onClick={e => setShowVolBar(!showVolBar)}></button>
            <button onClick={changePlayModeSeq} className="mode sprite_playbar"></button>
            <span className="play-list">
              <button onClick={e => {setShowPanel(!showPanel)}} title="????????????" className="list-icon sprite_playbar">
                {playList.length}
              </button>
            </span>
          </div>
        </PlaybarContent>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleMusicEnded} />
      {
        showPanel && (<PlayPanel>
          <div className="header">
            <div className="header-left">
              <h3>{`???????????? ( ${playList.length} )`}</h3>
            </div>
            <div className="header-right">{currentSong.name}</div>
          </div>
          <div className="main">
            <img className="image" src="//p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt="" />
            <ul className="panel-list">
              {
                playList.map((song, index) => {
                  return (
                    <li 
                      className={currentSongIndex === index ? 'active item' : 'item'}
                      key={song.id}
                    >
                      <div className="left">{song.name}</div>
                      <div className="right">
                        <span className="singer text-nowrap">{song.ar?.[0]?.name}</span>
                        <span className="duration">{formatDate(song.dt, 'mm:ss')}</span>
                        <span className="sprite_playlist link"></span>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            <div className="panel-lyric" ref={panelLrcRef}>
              <ul className="lrc-content">
                {
                  lyricList.map((lrc, index) => {
                    return (
                      <li key={lrc.time} className={currentLyricIndex === index ? 'lrc-item active' : 'lrc-item'}>
                        {lrc.content}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </PlayPanel>)
      }
    </PlaybarWrapper>
  )
})