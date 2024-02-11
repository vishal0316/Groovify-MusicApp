import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MusicContext from "../context/MusicContext";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import SongsList from "../components/SongsList";

const AlbumDetails = () => {
  const { setSongs } = useContext(MusicContext);
  const [album, setAlbum] = useState({});
  const [image, setImage] = useState("");
  const { id } = useParams();

  const getAlbumDetails = async () => {
    try {
      const res = await axios.get(`https://saavn.dev/albums?id=${id}`);
      const { data } = res.data;
      console.log(data);
      setAlbum(data);
      setSongs(data.songs);
      setImage(getImg(data.image));
    } catch (error) {
      console.error("Error fetching album details:", error);
    }
  };

  const getImg = (imageData) => {
    if (Array.isArray(imageData) && imageData.length >= 3) {
      return imageData[2].link;
    } else {
      return "";
    }
  };

  useEffect(() => {
    getAlbumDetails();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 h-screen my-48 lg:my-0 mx-2 lg:mx-auto">
        <div>
          <img
            src={image}
            alt={album.title}
            width={250}
            className="mx-auto mb-4 rounded-lg"
          />
          <div className="w-[250px] ">
            <h1>{album.name}</h1>
            <p>
              by {album.primaryArtists} . {album.songCount} songs
            </p>
          </div>
        </div>
        <div>
          {album.songs?.map((song) => (
            <SongsList key={song.id} {...song} />
          ))}
        </div>
      </div>

      <Player />
    </div>
  );
};

export default AlbumDetails;
