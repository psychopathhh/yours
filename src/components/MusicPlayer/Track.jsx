import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex items-center sm:flex-1">
    <div className={`${isPlaying && isActive ? 'animate-[spin_5s_linear_infinite]' : ''} h-16 w-16 mr-4 relative`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full drop-shadow-md" />
      <div className='h-5 w-5 rounded-full bg-[#25343c] absolute top-[34%] left-[35%]'></div>
    </div>
    <div className="sm:w-[340px] w-[120px]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
