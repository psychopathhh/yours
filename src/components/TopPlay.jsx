import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import 'swiper/css'
import 'swiper/css/free-mode'

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="w-full flex items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg mb-2">
    <h3 className="font-bold text-base text-white mr-3">{i + 1}</h3>
    <div className="flex-1 flex justify-between items-center">
      <img className="w-20 h-20 rounded-lg" src={song?.images?.coverart} alt={song.title} />
      <div className="flex-1 flex flex-col jutify-center mx-3">
        <Link to={`/songs/${song?.key}`} >
          <p className="sm:text-xl text-lg font-bold text-white hover:text-gray-400 transition-colors">
            {song?.title}
          </p>
        </Link>
        <Link to={`/artists/${song?.artists[0]?.adamid}`} >
          <p className="sm:text-base text-sm text-gray-300 mt-1 hover:text-gray-400 transition-colors">
            {song?.subtitle}
          </p>
        </Link>
      </div>
    </div>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
)


const TopPlay = () => {
  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data } = useGetTopChartsQuery()
  const divRef = useRef(null)
  const topPlays = data?.slice(0, 5)

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

  return (
    <div ref={divRef} className="flex-1 flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-2xl">
            ?????????????? ??????????????
          </h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">
              ???????????????? ??????
            </p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => {
            if (song.hasOwnProperty('images') && song.hub.hasOwnProperty('actions')) {
              return (<TopChartCard
                key={song.key}
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, i)}
              />)
            }
          })}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-bold text-2xl">
            ???????????????????? ??????????????????????
          </h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">
              ???????????????? ??????
            </p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.map((song, i) => {
            if (song.hasOwnProperty('artists')) {
              return (
                <SwiperSlide
                  key={song?.key}
                  style={{ width: '25%', height: 'auto' }}
                  className="shadow-lg rounded-full animate-slideright"
                >
                  <Link to={`/artists/${song?.artists[0].adamid}`}>
                    <img src={song?.images.background} alt="name"
                      className="rounded-full w-full object-contain"
                    />
                  </Link>

                </SwiperSlide>
              )
            }
          }
          )}

        </Swiper>
      </div>



    </div>
  )

}

export default TopPlay;
