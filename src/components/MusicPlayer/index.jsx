import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiArrowDownSLine } from "react-icons/ri";

import { nextSong, prevSong, playPause } from '../../redux/features/playerSlice';
import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';

const MusicPlayer = ({ open, setOpen }) => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(false))
  }, [dispatch]);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(true));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };

  return (
    <>

      <div className={`relative sm:px-8 px-4 w-full flex items-center m-auto ${open && 'hidden'}`}>
        <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} handlePlayPause={handlePlayPause} />
        <div className="flex sm:flex-1 flex-col items-center justify-center">
          <Controls
            isPlaying={isPlaying}
            isActive={isActive}
            repeat={repeat}
            setRepeat={setRepeat}
            shuffle={shuffle}
            setShuffle={setShuffle}
            currentSongs={currentSongs}
            handlePlayPause={handlePlayPause}
            handlePrevSong={handlePrevSong}
            handleNextSong={handleNextSong}
          />
          <Seekbar
            value={appTime}
            min="0"
            max={duration}
            onInput={(event) => setSeekTime(event.target.value)}
            setSeekTime={setSeekTime}
            appTime={appTime}
          />
          <Player
            activeSong={activeSong}
            volume={volume}
            isPlaying={isPlaying}
            seekTime={seekTime}
            repeat={repeat}
            currentIndex={currentIndex}
            onEnded={handleNextSong}
            onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
            onLoadedData={(event) => setDuration(event.target.duration)}
          />
        </div>
        <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
      </div>
      {open &&
        <>
          <div style={{ 'backgroundImage': `url(${activeSong?.images?.coverart})` }} className='absolute top-0 left-0 z-0 h-[100vh] w-[100vw] bg-no-repeat bg-cover bg-right-bottom blur-3xl rounded-t-3xl brightness-50' />


          <div className='z-50 my-20 flex align-center flex-col justify-between'>
            <div onClick={() => window.innerWidth < 640 && setOpen(false)} className='absolute top-9 left-5 text-white text-5xl font-thin sm:hidden block'>
              <RiArrowDownSLine />
            </div>
            <div className='flex flex-col justify-between items-center pt-4 h-[85vh]'>
              <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} handlePlayPause={handlePlayPause} open={open} />
              <div className={`flex sm:flex-1 flex-col items-center justify-center ${open && 'w-[90%]'}`}>
                <div className=']'>
                  <Seekbar
                    value={appTime}
                    min="0"
                    max={duration}
                    onInput={(event) => setSeekTime(event.target.value)}
                    setSeekTime={setSeekTime}
                    appTime={appTime}
                    open={open}
                  />
                  <Controls
                    isPlaying={isPlaying}
                    isActive={isActive}
                    repeat={repeat}
                    setRepeat={setRepeat}
                    shuffle={shuffle}
                    setShuffle={setShuffle}
                    currentSongs={currentSongs}
                    handlePlayPause={handlePlayPause}
                    handlePrevSong={handlePrevSong}
                    handleNextSong={handleNextSong}
                    open={open}
                  />
                </div>
              </div>
            </div>
          </div>


        </>
      }
    </>
  );
};

export default MusicPlayer;
