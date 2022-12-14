import { useSelector } from 'react-redux';
import React, { useRef, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RiArrowUpSLine } from "react-icons/ri";

import { Searchbar, Sidebar, MusicPlayer } from './components';
import { ArtistDetails, TopArtists, AroundYou, Explore, Search, SongDetails, TopCharts, GenreSongs } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [open, setOpen] = useState(false)

  return (
    <div className={`flex md:flex-row flex-col ${open && 'overflow-hidden'}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#1b262c]">
        <div className={`px-6 h-[calc(100vh-62px)] sm:h-[100vh] overflow-y-scroll hide-scrollbar  ${open ? 'overflow-hidden invisible' : 'visible'}`}>
          <Searchbar />
          <div className='mt-[20px] mb-12 sm:mb-0'>
            <Routes>
              <Route path="/genre-songs:genreId" element={<GenreSongs />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="*" element={<Navigate to="/explore" />}
              />
            </Routes>

          </div>

        </div>

      </div>

      {activeSong?.title && (
        <div className={`overflow-hidden absolute ${open ? `h-[100%] flex-col animate-slideup rounded-3xl` : 'sm:h-32 h-24 animate-slowfade rounded-t-3xl'} bg-[#293942] bottom-[-10px] sm:bottom-0 left-0 right-0 flex z-40`}>
          <MusicPlayer open={open} setOpen={setOpen} />
          <div className={`absolute right-8 top-3 text-white text-[38px] sm:hidden ${open ? 'hidden' : 'block'}`} onClick={() => window.innerWidth < 640 && setOpen(true)}>
            <RiArrowUpSLine />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
