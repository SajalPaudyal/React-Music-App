import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryState,
}) => {
  return (
    <div className={libraryState ? "library" : "library close"}>
      <h2>LIBRARY</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
            id={song.id}
            audioRef={audioRef}
            setSongs={setSongs}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
