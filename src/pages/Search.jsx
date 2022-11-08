import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import { BackBtn, Error, Loader, SongCard } from '../components'
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)

  const songs = data?.tracks?.hits?.map(song => song.track)

  if (isFetching) return <Loader title="Loading top charts" />

  if (error) return <Error />
  return (
    <div className='flex flex-col'>
      <BackBtn url='' />
      <h2 className='mb-10 ml-6 font-bold text-3xl text-white text-left'>
        Showing Results For <span className='font-black border-b-4 border-indigo-500'>{searchTerm}</span>
      </h2>
      <div className='flex justify-center flex-wrap sm:justify-center gap-8 pb-[150px]'>
        {songs?.map((song, i) => (
          ((song.hasOwnProperty('images') && song.hub.hasOwnProperty('actions')) && (<SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />))
        ))}
      </div>
    </div>
  )
}

export default Search;


