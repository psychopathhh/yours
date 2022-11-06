import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import { RiRepeatOneFill } from "react-icons/ri";



const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong, open }) => (
  <div className={`flex items-center justify-between lg:w-52 2xl:w-80 ${open ? 'w-[90%] mt-[15%] mx-auto mb-8' : 'min-w-[180px]'}`}>
    <BsShuffle size={20} color={shuffle ? '#7971E9' : 'white'} onClick={() => setShuffle((prev) => !prev)} className={`${open ? 'block drop-shadow-lg' : 'hidden'} sm:block cursor-pointer`} />
    <div className={`flex items-center justify-between ${open && 'w-[160px]'}`}>
      {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className={`cursor-pointer ${open ? 'block drop-shadow-lg' : 'hidden'} sm:block`} onClick={handlePrevSong} />}
      {isPlaying ? (
        <BsFillPauseFill color="#FFF" onClick={handlePlayPause} className={`cursor-pointer sm:w-16 sm:h-16 w-10 h-10 ${open ? 'block drop-shadow-lg' : 'hidden'} sm:block`} />
      ) : (
        <BsFillPlayFill color="#FFF" onClick={handlePlayPause} className={`cursor-pointer sm:w-16 sm:h-16 w-10 h-10 ${open ? 'block drop-shadow-lg' : 'hidden'} sm:block`} />
      )}
      {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className={`cursor-pointer ${open ? 'block drop-shadow-lg' : 'hidden'} sm:block`} onClick={handleNextSong} />}
    </div>
    <RiRepeatOneFill size={20} color={repeat ? '#7971E9' : 'white'} onClick={() => setRepeat((prev) => !prev)} className={`${open ? 'block drop-shadow-lg' : 'hidden'} sm:block cursor-pointer`} />
  </div>
);

export default Controls;
