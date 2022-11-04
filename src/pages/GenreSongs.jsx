import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { genres } from '../assets/constants'
import { BackBtn, Error, Loader, SongCard } from '../components'
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore'

const GenreSongs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let { genreId } = useParams()
    genreId = genreId.slice(1, genreId.length)

    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { data, isFetching, error } = useGetSongsByGenreQuery(genreId || 'POP')

    const genreTitle = genres.find(({ value }) => value === genreId).title

    if (isFetching) return <Loader title='Loading songs...' />
    if (error) return <Error />
    return (<>
        <BackBtn url='/explore' />
        <h2 className='font-bold text-3xl text-white my-5 text-center'>{genreTitle}</h2>
        <div className='flex flex-wrap sm:justify-evenly justify-center gap-10 mb-[180px]'>
            {data?.map((song, i) =>

            ((song.hasOwnProperty('images') && song.hub.hasOwnProperty('actions')) && <SongCard
                key={song.key}
                i={i}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
            />)
            )}
        </div>
    </>)
}

export default GenreSongs