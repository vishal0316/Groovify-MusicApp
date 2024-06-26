import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import { useContext, useState } from "react"; // Import useState
import MusicContext from "../context/MusicContext";

const Navbar = () => {
  const { setSearchedSongs } = useContext(MusicContext);
  const [searchTimeout, setSearchTimeout] = useState(null); // Add state for search timeout

  const searchSongs = async (e) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout); // Clear previous timeout if exists
    }
    const query = e.target.value;
    setSearchTimeout(
      setTimeout(async () => {
        try {
          const res = await axios.get(
            `https://jiosaavan-harsh-patel.vercel.app/search/songs?query=${query}&page=1&limit=2`
          );
          const { data } = await res.data;
          if (data.results.length === 0 || query === " " || query === 0) {
            setSearchedSongs([]);
          } else {
            setSearchedSongs(data.results);
          }
          console.log(data.results);
        } catch (error) {
          console.error("Error fetching songs:", error);
        }
      }, 500) // Set a delay of 500 milliseconds between each search request
    );
  };

  return (
    <>
      <nav className="p-2 flex justify-between items-center py-0 border-none lg:border px-2 fixed top-0 left-0 right-0 z-20 bg-black ">
        {/* 1st div */}
        <div className="flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0  ">
          <div className="flex justify-between items-center gap-2 mr-4">
            <img src="/logo.png" alt="logo" width={50} />
            <Link to="/" className="font-extrabold text-lg ">
              Groovify
            </Link>
          </div>
          <div className=" text-[24px] lg:text-[15px] gap-5 font-semibold h-full hidden lg:flex">
            <li className="list-none">Music</li>
            <li className="list-none">Podcast</li>
            <li className="list-none">Go Pro</li>
          </div>
        </div>

        {/* 2nd div */}

        <div className=" ml-10 flex">
          <input
            type="text"
            name="search"
            id="search"
            className="py-2 rounded-full w-full lg:w-[50vw] outline-none text-center border text-black"
            placeholder="Search for songs"
            autoComplete="off"
            autoCorrect="off"
            onChange={searchSongs}
          />
        </div>

        {/* 3rd div */}

        <div className="hidden lg:flex justify-between items-center gap-4">
          <div className="flex justify-center gap-2 ">
            <div className="flex flex-col text-sm">
              <span className="text-[14px] font-semibold">Music Language</span>
              <span className="text-[12px] ">Hindi</span>
            </div>
            <MdKeyboardArrowDown className="text-xl mt-2 text-gray-200 " />
          </div>
          <div className="flex text-[15px] gap-5 font-semibold">
            <li className="list-none">Log In</li>
            <li className="list-none">Sign Up</li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
