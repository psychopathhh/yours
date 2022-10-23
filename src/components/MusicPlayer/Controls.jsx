import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80 sm:flex-1">
    <BsArrowRepeat size={20} color={repeat ? '#7971E9' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden sm:block cursor-pointer" />
    {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer sm:block hidden" onClick={handlePrevSong} />}
    {isPlaying ? (
      <BsFillPauseFill color="#FFF" onClick={handlePlayPause} className="cursor-pointer sm:w-16 sm:h-16 w-12 h-12 sm:border-none rounded-full  border-[#7971E9] border-2 p-2 box-border" />
    ) : (
      <BsFillPlayFill color="#FFF" onClick={handlePlayPause} className="cursor-pointer sm:w-16 sm:h-16 w-12 h-12 sm:border-none rounded-full  border-[#7971E9] border-2 p-2 box-border" />
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer sm:block hidden" onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? '#7971E9' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden sm:block cursor-pointer" />
  </div>
);

export default Controls;
