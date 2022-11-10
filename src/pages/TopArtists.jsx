import { useEffect } from 'react';
import { Error, Loader, ArtistCard } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const { data, isFetching, error } = useGetTopChartsQuery()

    if (isFetching) return <Loader title="Loading top artists" />

    if (error) return <Error />
    return (
        <div className='flex flex-col'>
            <h2 className='mt-4 mb-10 font-bold text-3xl text-white text-left sm:text-center'>
                Популярные исполнители
            </h2>
            <div className='flex justify-center flex-wrap gap-8 pb-[150px]'>
                {data?.map(track => (
                    <ArtistCard key={track.key} track={track} />
                ))}
            </div>
        </div>
    )
}

export default TopArtists;


