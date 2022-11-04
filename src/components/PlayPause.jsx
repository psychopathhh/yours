import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => (
  isPlaying && activeSong?.title === song.title ?
    (
      <FaPauseCircle
        size={35}
        className='hover:text-white text-gray-400 transition-colors'
        onClick={handlePause}
      />
    ) : (
      <FaPlayCircle
        size={35}
        className='hover:text-white text-gray-400 transition-colors'
        onClick={handlePlay}
      />
    )
)

export default PlayPause;
