import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStepBackward, faStepForward, faPause } from "@fortawesome/free-solid-svg-icons"
import { fetchIsPlayingStatus, toggleIsPlayingStatus } from '../actions/isPlayingAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../app/store';

const SmallPlayer = () => {

    const trackAnim = {

    }
    //Get that data back
    const isPlaying = useSelector(
      (state: RootState) => state.isPlaying
    );

    console.log(isPlaying);

        //Event Handlers
         function playSongHandler() {
            if (fetchIsPlayingStatus) {
                //audioRef.current.pause();
            } else {
                //audioRef.current.play();
            }
            store.dispatch(toggleIsPlayingStatus);
            
        }

    return (
        <div className="SmallPlayer">
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faStepBackward}  />
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skip-forward" icon={faStepForward}  />
            </div>
            <div className="time-control">
                <p>0:00</p>
                <div className="track">
                <input min={0} max={5} type="range" />
                <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>5:00</p>

            </div>
        </div>
    )
}

export default SmallPlayer;