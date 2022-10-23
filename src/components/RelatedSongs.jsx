import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
  songs
}) => {
  let realIndex = 0
  return (
    <div className="flex flex-col mb-[180px]">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      <div className="my-6 w-full flex flex-col">
        {data?.map((song, i) => {
          if ((song.hasOwnProperty('images') && song.hub.hasOwnProperty('actions')) || artistId) {
            return (<SongBar
              key={`${i}-${artistId}`}
              song={song}
              i={i + realIndex}
              artistId={artistId}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}

            />)
          }
          else {
            realIndex -= 1
          }
        }
        )}
      </div>
    </div>

  )
}

export default RelatedSongs;
