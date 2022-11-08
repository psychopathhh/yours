import { useEffect } from 'react';
import { useSelector } from 'react-redux'

import { Error, Loader, SongCard } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { data, isFetching, error } = useGetTopChartsQuery()

    if (isFetching) return <Loader title="Loading top charts" />

    if (error) return <Error />
    return (
        <div className='flex flex-col'>
            <h2 className='mt-4 mb-10 font-bold text-3xl text-white text-left sm:text-center'>
                Мировые новинки
            </h2>
            <div className='flex justify-center flex-wrap gap-8 pb-[150px]'>
                {data?.map((song, i) => (
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

export default TopCharts;

