import React from 'react';

const AlbumList = ({ albums, onAlbumClick }) => {
  return (
    <section id="albums-section">
      <h2>Music-Gallery</h2>
      <div className="album-list">
        {albums.map((album, index) => (
          <div
            className="album-item"
            key={index}
            onClick={() => onAlbumClick(album)}
          >
            <img src={album.cover} alt={`${album.title} cover`} />
            <h3>{album.title}</h3>
            <p>{album.artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlbumList;
