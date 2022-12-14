import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={artistId ? song?.attributes?.artwork?.url : song?.images?.coverart}
        alt={song?.attributes?.name}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {!artistId ? (
          <Link to={`/songs/${song.id}`}>
            <p>
              <span className="text-xl font-bold text-white hover:text-gray-400 transition-colors">
                {song?.attributes?.name}
              </span>
            </p>
          </Link>
        ) : (
          <p>
            <span className="text-xl font-bold text-white">
              {song?.attributes?.name}
            </span>
          </p>
        )}
        {artistId ?
          (<><span className="text-base text-gray-300 my-1">
            {song?.attributes?.albumName}
          </span>
            <span className="text-sm text-gray-500">Release Date: {song?.attributes?.releaseDate}</span>
          </>) :
          (<Link to={`/artists/${song?.artists[0]?.adamid}`} >
            <p className="text-base text-gray-300 mt-1 hover:text-gray-400 transition-colors">
              {song?.subtitle}
            </p>
          </Link>)
        }
      </div>
    </div>
    {!artistId
      ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      )
      : null}
  </div>
);

export default SongBar;