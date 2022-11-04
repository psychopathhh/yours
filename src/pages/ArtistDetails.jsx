import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BackBtn, DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";


const ArtistDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id: artistId } = useParams()
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ artistId })

  const handlePauseClick = () => {
    dispatch(playPause(true))
  }
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }))
    dispatch(playPause(false))
  }

  if (isFetchingArtistDetails) return <Loader title="Loading artists details" />
  if (error) return <Error />

  return (
    <>
      <BackBtn url='' />
      <div className="flex flex-col">
        <DetailsHeader
          artistId={artistId}
          artistData={artistData}
        />

        <RelatedSongs
          data={Object.values(artistData?.songs)}
          songs={artistData}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />

      </div>
    </>
  )
};

export default ArtistDetails;
