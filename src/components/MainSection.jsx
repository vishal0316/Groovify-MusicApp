import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import AlbumItem from "./AlbumItem";

const MainSection = () => {
  const [albums, setAlbums] = useState([]);
  const [trending, setTrending] = useState([]);

  const getHomePageData = async () => {
    const res = await axios.get("https://saavn.me/modules?language=hindi");
    const { data } = res.data;
    setAlbums(data.albums);
    setTrending(data.trending);
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  return (
    <>
      {albums?.map((album) => (
        <AlbumItem key={album.id} {...album} />
      ))}
      <div>
        <AlbumItem />
      </div>
    </>
  );
};

export default MainSection;
