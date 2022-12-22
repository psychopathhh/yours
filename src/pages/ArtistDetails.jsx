import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BackBtn, DetailsHeader, Error, Loader, RelatedSongs } from "../components";


const ArtistDetails = () => {
  const [artistData, setArtistData] = useState({})
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id: artistId } = useParams()
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3a23e27febmsha60912837278edcp13c984jsna5d698b1d8b6',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(`https://shazam-core.p.rapidapi.com/v2/artists/details?artist_id=${artistId}`, options)
      .then(response => response.json())
      .then(response => setArtistData(response?.data[0]))
      .catch(err => console.error(err));
  }, [])
  console.log(artistData)
  return (
    <>
      <BackBtn url='' />
      <div className="flex flex-col">
        <DetailsHeader
          artistId={artistId}
          artistData={artistData}
        />
        {artistData?.attributes?.bornOrFormed && (<p className="text-xl py-3 text-gray-200">{artistData?.attributes?.name}'s birthday: <span className="text-xl py-3 text-white">{artistData?.attributes?.bornOrFormed}</span></p>)
        }
        {artistData?.attributes?.origin &&
          (<p className="text-xl py-3 text-gray-200">The country: {artistData?.attributes?.origin}</p>)
        }
        {artistData?.attributes?.artistBio &&
          (<><div className="relative sm:hidden">
            <img className="opacity-40 w-[100%] mx-auto" src={artistData?.attributes?.editorialArtwork?.centeredFullscreenBackground?.url} alt="" />
            <h2 className="absolute top-[calc(50%-15px)] left-[calc(50%-15px)] font-bold sm:text-3xl text-xl text-white">About</h2>
          </div>
            <h2 className="hidden sm:block font-bold sm:text-3xl text-xl text-white">About</h2>
            <p dangerouslySetInnerHTML={{ __html: artistData?.attributes?.artistBio }} className="text-base text-[#dcdcdc] py-3" />
          </>)
        }
        <RelatedSongs
          data={artistData?.views?.['top-songs']?.data}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />

      </div>
    </>
  )
};

export default ArtistDetails;
