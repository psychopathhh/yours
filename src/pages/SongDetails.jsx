import { useEffect } from "react";
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
                <div className="mb-10 flex sm:flex-row flex-col gap-24">
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
                    <div className="flex flex-col flex-1">
                        <h2 className="text-white text-3xl font-bold mb-5">
                            <span className="text-indigo-500">Your</span> Translator:
                        </h2>
                        <Translator />
                    </div>
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
