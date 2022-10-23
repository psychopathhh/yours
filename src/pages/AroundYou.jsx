import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import { Error, Loader, SongCard } from '../components'
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {
    const [country, setCountry] = useState('RU')
    const [loading, setLoading] = useState(true)
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { data, isFetching, error } = useGetSongsByCountryQuery(country)

    useEffect(() => {
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_Km2ffrJ4gm4W1rO5Pc5bZAve4A8Kz')
            .then(res => setCountry(res?.data?.location?.country))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [country])

    if (isFetching && loading) return <Loader title="Loading songs around you" />

    if (error && country) return <Error />
    return (
        <div className='flex flex-col'>
            <h2 className='mt-4 mb-10 font-bold text-3xl text-white text-left'>
                Around You <span className='font-black'>{country}</span>
            </h2>
            <div className='flex justify-center flex-wrap gap-8 mb-[180px]'>
                {data?.map((song, i) => (
                    (song.hasOwnProperty('images') && song.hub.hasOwnProperty('actions')) &&
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default CountryTracks;
