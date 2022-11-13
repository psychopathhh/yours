import React from 'react';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import Marquee from "react-fast-marquee";

const Track = ({ isPlaying, isActive, activeSong, open, handlePlayPause }) => {

  return (
    <div className={`flex items-center sm:flex-1 ${open ? 'flex-col' : 'flex-row'}`}>
      <div className={`${isPlaying && isActive ? 'sm:animate-[spin_5s_linear_infinite]' : ''} ${open ? 'transition-transform w-[310px] h-[310px]' : 'sm:h-16 sm:w-16 h-14 w-14 mr-4'} ${open && !isPlaying && 'scale-75 transition-transform'} relative`}>
        <img style={{ 'backgroundImage': "url('src/assets/no_image.jpg')" }} height='310' width='310' src={activeSong?.images?.coverart} alt="cover art" className={`bg-cover bg-center text-transparent  ${open ? 'rounded-xl drop-shadow-xl brightness-100 mx-auto' : 'rounded-full '} drop-shadow-md sm:brightness-75 brightness-50`} />
        {isPlaying && !open && (
          <BsFillPauseFill color="#FFF" onClick={handlePlayPause} className="cursor-pointer w-10 h-10 sm:hidden absolute top-[14%] left-[16%]" />
        )}
        {!isPlaying && !open && (
          <BsFillPlayFill color="#FFF" onClick={handlePlayPause} className="cursor-pointer w-10 h-10 sm:hidden absolute top-[14%] left-[16%]" />
        )}
        <div className='sm:block sm:h-5 sm:w-5 hidden rounded-full bg-[#25343c] absolute top-[34%] left-[36%]'></div>
      </div>
      <div className={` ${open ? 'w-[310px] overflow-hidden' : 'w-[180px] sm:w-[320px] lg:w-[500px]'} ${open && isPlaying ? 'mt-3' : 'p-3'}`}>
        {
          (open && isPlaying) ?
            (
              <Marquee className='rounded-lg' speed={30} gradientColor={[255, 255, 255, 0]} gradientWidth={50} >
                <p className={`text-white font-bold sm:text-lg text-md p-2 ${open ? 'text-center text-xl break-words' : 'truncate'}`}>
                  {activeSong?.title ? activeSong?.title : 'No active Song'}
                </p>
              </Marquee>
            )

            :
            (<p className={`text-white truncate font-bold sm:text-lg text-md ${open ? 'text-center text-xl mx-auto w-[80%]' : ''}`}>
              {activeSong?.title ? activeSong?.title : 'No active Song'}
            </p>)
        }

        <p className={`truncate text-gray-300 text-sm ${open && 'text-center  text-base'}`}>
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
        </p>
      </div>
    </div >
  )
};

export default Track;
