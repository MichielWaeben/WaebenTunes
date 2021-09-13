import React from "react";

const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying, setSongs}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        //Add Active State
        const id = song.id;
        const newSongs = songs.map((mappedSong) => {
            if (mappedSong.id === id) {
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
        //Check if the song is playing
        if (isPlaying) audioRef.current.play();
    }
    return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""} `}>
        <img alt={song.name} src={song.cover}></img>
        <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
        </div>
    </div>)
}

export default LibrarySong;