import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex items-center sm:flex-1">
    <div className={`${isPlaying && isActive ? 'animate-[spin_5s_linear_infinite]' : ''} sm:h-16 sm:w-16 h-14 w-14 mr-4 relative`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full drop-shadow-md" />
      <div className='sm:h-5 sm:w-5 h-4 w-4 rounded-full bg-[#25343c] absolute sm:top-[34%] sm:left-[35%] top-[36%] left-[36%]'></div>
    </div>
    <div className="sm:w-[340px] w-[120px]">
      <p className="truncate text-white font-bold sm:text-lg text-md">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300 text-sm">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
