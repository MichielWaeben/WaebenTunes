import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStepBackward, faStepForward, faPause } from "@fortawesome/free-solid-svg-icons"
const Player = ({ audioRef, setSongs, setCurrentSong, currentSong, songs, isPlaying, setIsPlaying, songInfo, setSongInfo }) => {

    const activeLibraryHandler = (nextPrevious) => {
        const newSongs = songs.map((mappedSong) => {
            if (mappedSong.id === nextPrevious.id) {
                return {
                    ...mappedSong, active: true,
                }
            } else {
                return {
                    ...mappedSong, active: false,
                }
            }
        });
        setSongs(newSongs);
    }
    //Event Handlers
    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value});
    }

    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-forward') {
            await setCurrentSong(songs[currentIndex + 1] || songs[0]);
            activeLibraryHandler(songs[currentIndex + 1] || songs[0]);
        } else {
            await setCurrentSong(songs[currentIndex - 1] || songs[songs.length - 1]);
            activeLibraryHandler(songs[currentIndex - 1] || songs[songs.length - 1]);
        }
        if (isPlaying) audioRef.current.play();
    }

    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    //Add the styles
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
    return (
        <div className="player-container">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div className="track">
                <input onChange={dragHandler} value={songInfo.currentTime} min={0} max={songInfo.duration || 0} type="range" />
                <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>

            </div>
            <div className="play-control">
                <FontAwesomeIcon onClick={() => skipTrackHandler("skip-backward")} className="skip-back" icon={faStepBackward} size="2x" />
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} size="2x" />
                <FontAwesomeIcon onClick={() => skipTrackHandler("skip-forward")}  className="skip-forward" icon={faStepForward} size="2x" />
            </div>
        </div>)
}

export default Player;