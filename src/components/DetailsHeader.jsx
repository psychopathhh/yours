import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.attributes
  return (
    <div className="relative flex flex-col w-full">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-52 h-32" />
      <div className="absolute inset-0 flex items-center">
        <img src={artistId ? artist?.artwork?.url : songData?.images?.coverart}
          alt="art"
          className="sm:w-52 w-32 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
              <p className="text-base text-gray-400 mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artist?.genreNames[0]
              : songData?.genres?.primary
            }
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />

    </div>
  )
}

export default DetailsHeader;
