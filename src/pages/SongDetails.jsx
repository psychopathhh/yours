import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BackBtn, DetailsHeader, Error, Loader, RelatedSongs, Translator } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongsRelatedQuery } from "../redux/services/shazamCore";


const SongDetails = () => {
    const dispatch = useDispatch()
    const { songid } = useParams()
    const { activeSong, isPlaying } = useSelector(state => state.player)
    const { data: songData, isFetching: isfetchingSongDetails } = useGetSongDetailsQuery({ songid })
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongsRelatedQuery({ songid })
    // const [video, setVideo] = useState({})
    // const searchTerm = songData?.title + ' ' + songData?.subtitle
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '6733cb47cfmsh487216fa5822579p10fd87jsn4e8e5b771451',
    //         'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    //     }
    // };
    // useEffect(() => {
    //     fetch(`https://youtube-music1.p.rapidapi.com/v2/search?query=${searchTerm}`, options)
    //         .then(response => response.json())
    //         .then(response => {
    //             setVideo(response?.result?.videos[0])
    //         })
    //         .catch(err => console.error(err));
    // }, [searchTerm])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const handlePauseClick = () => {
        dispatch(playPause(false))
    }
    const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }))
        dispatch(playPause(true))
    }

    if (isFetchingRelatedSongs || isfetchingSongDetails) return <Loader title="Searching song details" />
    if (error) return <Error />

    return (
        <>
            <BackBtn url='' />
            <div className="flex flex-col ">
                <DetailsHeader artistId="" songData={songData} />
                <div className="mb-10 grid lg:grid-cols-2 grid-cols-1  gap-24">
                    <div className="flex-1"><h2 className="text-white text-3xl font-bold">
                        Текст песни:
                    </h2>
                        <div className="mt-5">
                            {songData?.sections[1].type === 'LYRICS' ?
                                songData?.sections[1].text.map((line, i) => (
                                    <p key={i} className="text-gray-400 text-base my-1">{line}</p>
                                )
                                ) : <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>

                            }
                        </div>
                    </div>
                    <div>
                        <h2 className="text-white text-3xl font-bold mb-5">
                            <span className="text-indigo-500">Your</span> Translator:
                        </h2>
                        <Translator />
                    </div>
                    {/* <div className="flex flex-col flex-1 gap-[100px]">
                        <div className="h-[360px]">
                            <h2 className="text-white text-3xl font-bold mb-5">Клип:</h2>
                            <iframe className='z-[100px] 2xl:w-[640px] 2xl:h-[360px] xl:w-[426px] xl:h-[240px] w-[100%] h-[90%]' src={`https://www.youtube.com/embed/${video?.id}`} title={video?.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                        </div>
                    </div> */}
                </div>

                <RelatedSongs
                    data={data}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    handlePauseClick={handlePauseClick}
                    handlePlayClick={handlePlayClick}
                />

            </div>
        </>
    )
};

export default SongDetails;
