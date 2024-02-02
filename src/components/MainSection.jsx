import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const MainSection = () => {
  const [albums, setAlbums] = useState([]);
  const [trending, setTrending] = useState([]);

  const getHomePageData = async () => {
    const res = await axios.get(
      "https://saavn.me/modules?language=hindi,english,punjabi"
    );
    const { data } = res.data;
    setAlbums(data.albums);
    setTrending(data.trending);
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default MainSection;
