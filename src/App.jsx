import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlbumDetails from "./pages/AlbumDetails";
import MusicContext from "./context/MusicContext";
import { useState } from "react";

export default function App() {
  const [songs, setSongs] = useState([]);

  return (
    <MusicContext.Provider
      value={{
        songs,
        setSongs,
        // playMusic,
        // isPlaying,
        // currentSong,
        // nextSong,
        // prevSong,
        // setSearchedSongs,
        // searchedSongs,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
        </Routes>
      </BrowserRouter>
    </MusicContext.Provider>
  );
}
