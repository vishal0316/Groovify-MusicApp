// alert(
//   "Sorry, the API server is currently unavailable. Please try again later."
// );

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
// import AlbumItem from "./AlbumItem";
import Slider from "./Slider";

const MainSection = () => {
  const [albums, setAlbums] = useState([]);
  const [trending, setTrending] = useState([]);

  const getHomePageData = async () => {
    const res = await axios.get(
      "https://jiosaavan-harsh-patel.vercel.app/modules?language=hindi,english,punjabi"
    );
    const { data } = res.data;
    setAlbums(data.albums);
    setTrending(data.trending);
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  const trendingAlbums = useMemo(
    () => (Array.isArray(trending.albums) ? trending.albums : []),
    [trending.albums]
  );

  return (
    <section className="my-20">
      <h2 className="text-xl px-5 py-3 font-semibold text-gray-100 w-full lg:w-[78vw] mx-auto">
        Trending Now
      </h2>
      <Slider data={trendingAlbums} />
      <h2 className="text-xl px-5 py-3 font-semibold text-gray-100 w-full lg:w-[78vw] mx-auto">
        Top Albums
      </h2>
      <Slider data={albums} />
    </section>
  );
};

export default MainSection;
