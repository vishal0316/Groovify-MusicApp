import { GoPlay } from "react-icons/go";
import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const SongsList = ({
  name,
  primaryArtists,
  duration,
  downloadUrl,
  image,
  id,
}) => {
  const convertTime = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds}`;
  };

  const { isPlaying, currentSong, playMusic } = useContext(MusicContext);

  return (
    <div className="flex justify-between items-center w-[80vw] lg:w-[50vw] mb-2 bg-black rounded-md lg:mb-1 p-1 px-3 hover:bg-[#5800ff] hover:shadow-md  hover:rounded-md">
      <GoPlay
        className="text-3xl   transition-all ease-in-out duration-300 cursor-pointer"
        onClick={() =>
          playMusic(downloadUrl, name, duration, image, id, primaryArtists)
        }
      />

      <div className="flex flex-col lg:flex-row gap-2 justify-between items-start w-[80%]">
        <span
          className={`font-bold text-xs ${
            id === currentSong?.id && "text-white"
          }`}
        >
          {name}
        </span>
        <span
          className="font-thin text-xs text-white 
        "
        >
          {primaryArtists}
        </span>
      </div>

      <div>
        <span className="font-thin text-xs text-white hidden lg:block">
          {convertTime(duration)}
        </span>
      </div>
    </div>
  );
};

export default SongsList;
