import React, { useState } from 'react';
import AlbumList from './components/AlbumList';
import AlbumDetails from './components/AlbumDetails';
import './App.css';

const App = () => {
  const albums = [
    {
      title: 'Tholi Prema',
      artist: 'Varun Tej',
      cover: '/assets/Tholiprema.jpeg',
      songs: [
        { title: 'Ninila', artist: 'Varun Tej, Raashi Khanna', src: '/assets/Ninnila.mp3' },
        { title: 'Vinnane', artist: 'Varun Tej, Raashi Khanna', src: '/assets/Vinnane.mp3' },
      ],
    },
    {
      title: 'Devara',
      artist: 'NTR',
      cover: '/assets/Devara.jpeg',
      songs: [
        { title: 'Chutamalle', artist: 'NTR', src: '/assets/chuttamalle.mp3' },
        { title: 'Ayudha Pooja', artist: 'NTR', src: '/assets/song1.mp3' },
      ],
    },
    {
      title: 'Songs',
      artist: 'Allu Arjun',
      cover: '/assets/pushpa.jpeg',
      songs: [
        { title: 'Dako Dako', artist: 'Allu Arjun, Rashmika Mandanna', src: '/assets/dako.mp3' },
        { title: 'Srivalli', artist: 'Allu Arjun, Rashmika Mandanna', src: '/assets/Srivalli.mp3' },
        { title: 'Oo Antava Oo Oo Antava', artist: 'Allu Arjun, Samantha Ruth Prabhu', src: '/assets/ooo.mp3' },
      ],
    },
    {
      title: 'Way Down We Go',
      artist: 'Kaleo',
      cover: '/assets/way.jpeg',
      songs: [
        { title: 'Way Down We Go', artist: 'Kaleo', src: '/assets/way.mp3' },
      ],
    },
    {
      title: 'Unstoppable',
      artist: 'Kaleo',
      cover: '/assets/Un.jpeg',
      songs: [
        { title: 'Unstoppable', artist: 'Kaleo', src: '/assets/unstoppable.mp3' },
      ],
    },
    {
      title: 'Believer',
      artist: 'Imagine Dragons',
      cover: '/assets/Be.jpeg',
      songs: [
        { title: 'Believer', artist: 'Imagine Dragons', src: '/assets/believer.mp3' },
      ],
    },
    {
      title: 'Rocky Aur Rani Ki Prem Kahani',
      artist: '',
      cover: '/assets/rar.jpeg',
      songs: [
        { title: 'What Jhumka', artist: 'Ranveer Singh', src: '/assets/tum.mp3' },
        { title: 'Tum Kya Mile', artist: 'Arijit Singh, Shreya Ghosal', src: '/assets/what.mp3' },
      ],
    },
    {
      title: 'Bhool Bhulaiyaa 2',
      artist: '',
      cover: '/assets/bb.jpeg',
      songs: [
        { title: 'Jaano Samjho', artist: 'Pritam, Neeraj Shridhar', src: '/assets/jaan.mp3' },
        { title: 'Re Ve Kamaliya', artist: 'NTR', src: '/assets/kamaliyaa.mp3' },
      ],
    },
    {
      title: 'Pathaan',
      artist: 'Shah Rukh Khan',
      cover: '/assets/pathan.jpeg',
      songs: [
        { title: 'Jhoome Jo Pathaan', artist: 'Arijit Singh, Sukriti Kakar', src: '/assets/Be.mp3' },
        { title: 'Besharam Rang', artist: 'Shilpa Rao, Caralisa Monteiro', src: '/assets/J.mp3' },
      ],
    },
  ];

  const [selectedAlbum, setSelectedAlbum] = useState(null);

  return (
    <div className="app">
      <AlbumList albums={albums} onAlbumClick={setSelectedAlbum} />
      {selectedAlbum && <AlbumDetails album={selectedAlbum} />}
    </div>
  );
};

export default App;

