import React from 'react';

const AlbumDetails = ({ album }) => {
  return (
    <section id="album-details">
      <h2>{album.title}</h2>
      <img
        src={album.cover}
        alt={`${album.title} cover`}
        className="album-poster"
      />
      <div className="song-list">
        {album.songs.map((song, index) => (
          <div className="song-item" key={index}>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <audio controls>
              <source src={song.src} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlbumDetails;
