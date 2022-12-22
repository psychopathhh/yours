import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import { BackBtn, Error, Loader, SongCard } from '../components'
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)
  // const [videosYoutube, setVideosYoutube] = useState({})
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '6733cb47cfmsh487216fa5822579p10fd87jsn4e8e5b771451',
  //     'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
  //   }
  // };
  // useEffect(() => {
  //   fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${searchTerm}`, options)
  //     .then(response => response.json())
  //     .then(response => {
  //       setVideosYoutube(response?.result?.videos)
  //     })
  //     .catch(err => console.error(err));
  // }, [])


  const songs = data?.tracks?.hits?.map(song => song.track)

  if (isFetching) return <Loader title="Loading top charts" />

  if (error) return <Error />
  return (
    <div className='flex flex-col pb-[150px]'>
      <BackBtn url='' />
      <h2 className='mb-10 ml-6 font-bold text-3xl text-white text-left'>
        Результаты Поиска Для <span className='font-black border-b-4 border-indigo-500'>{searchTerm}</span>
      </h2>
      <div className='grid grid-cols-1'>
        <div className='flex justify-center flex-wrap sm:justify-center gap-8 pb-[100px]'>
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
        {/* <div className='flex flex-wrap gap-4 justify-center'>
          {videosYoutube?.map(({ id, title }) => (
            <iframe className='z-[100px]' width="720" height="450" src={`https://www.youtube.com/embed/${id}`} title={title} frameborder="0" allow="accelerometer; autoplay; gyroscope; picture-in-picture" allowfullscreen></iframe>
          ))}
        </div> */}

      </div>
    </div>
  )
}

export default Search;


