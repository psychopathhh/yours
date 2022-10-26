import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer } from './components';
import { ArtistDetails, TopArtists, AroundYou, Explore, Search, SongDetails, TopCharts, GenreSongs } from './pages';
const App = () => {
  const { activeSong } = useSelector((state) => state.player);


  return (
    <div className="flex md:flex-row flex-col">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#1b262c]">
        <div className="px-6 h-[100vh] overflow-y-scroll hide-scrollbar">
          <Searchbar />
          <div className='mt-[20px]'>
            <Routes>
              <Route path="/genre-songs:genreId" element={<GenreSongs />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="*" element={<Navigate to="/explore" replace />}
              />
            </Routes>

          </div>

        </div>

      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-[#293942] rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
