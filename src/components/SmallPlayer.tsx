import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStepBackward,
  faStepForward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../app/store";
import { setIsPlaying } from "../actions/isPlayingAction";

const SmallPlayer = () => {
  let audioRef = useRef<HTMLAudioElement>(null) as any;
  const currentSong = useSelector((state: RootState) => state.currentSong);
  useEffect(() => {
      if ((currentSong as any).currentSong) {
        audioRef.current.play();
        store.dispatch(setIsPlaying(true));
      }
  }, [currentSong]);

  //Get that data back
  const isPlaying = useSelector((state: RootState) => state.isPlaying);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    volume: 0,
  });

  const timeUpdateHandler = (e: any) => {
    const current: any = e.target.currentTime;
    const duration: any = e.target.duration;
    const percentage = parseFloat(((current / duration) * 100).toString());
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: percentage,
      volume: e.target.volume,
    });
  };

  //Event Handlers
  function playSongHandler() {
    if (isPlaying) {
      audioRef.current.pause();
      store.dispatch(setIsPlaying(false));
    } else {
      audioRef.current.play();
      store.dispatch(setIsPlaying(true));
    }
  }

  const getTime = (time: any) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e: any) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  //Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="SmallPlayer">
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faStepBackward} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon className="skip-forward" icon={faStepForward} />
      </div>
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track">
          <input
            onChange={dragHandler}
            value={songInfo.currentTime}
            min={0}
            max={songInfo.duration || 0}
            type="range"
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
      </div>
        <audio
          src={(currentSong as any).currentSong ? (currentSong as any).currentSong.audio : ""}
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
        ></audio>
    </div>
  );
};

export default SmallPlayer;
