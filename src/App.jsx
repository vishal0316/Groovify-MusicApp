import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlbumDetails from "./pages/AlbumDetails";
import MusicContext from "./context/MusicContext";
import { useState } from "react";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const playMusic = async (
    music,
    name,
    duration,
    image,
    id,
    primaryArtists
  ) => {
    if (currentSong && currentSong.id === id) {
      if (isPlaying) {
        setIsPlaying(false);
        currentSong.audio.pause();
      } else {
        setIsPlaying(true);
        await currentSong.audio.play();
      }
    } else {
      if (currentSong) {
        currentSong.audio.pause();
        setIsPlaying(false);
      }
      const newAudio = new Audio(music[4].link);
      setCurrentSong({
        name,
        duration,
        image: image[2].link,
        id,
        audio: newAudio,
        primaryArtists,
      });
      setIsPlaying(true);
      console.log(currentSong);
      await newAudio.play();
    }
  };
  return (
    <MusicContext.Provider
      value={{
        songs,
        setSongs,
        playMusic,
        isPlaying,
        currentSong,
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
