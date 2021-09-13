import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStepBackward, faStepForward, faPause } from "@fortawesome/free-solid-svg-icons"

const SmallPlayer = () => {

    const trackAnim = {

    }

    return (
        <div className="SmallPlayer">
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faStepBackward}  />
                <FontAwesomeIcon className="play" icon={faPlay} />
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