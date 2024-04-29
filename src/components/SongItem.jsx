import { useContext } from "react";
import PropTypes from "prop-types";
import MusicContext from "../context/MusicContext";

const SongItem = ({
  name,
  image,
  duration,
  downloadUrl,
  id,
  primaryArtists,
}) => {
  const { playMusic } = useContext(MusicContext);

  return (
    <div className="w-[160px] max-h-[220px] overflow-y-clip flex flex-col justify-center items-center gap-3 rounded-lg">
      <img
        src={image[2].link}
        alt=""
        className="rounded-lg cursor-pointer"
        onClick={() =>
          playMusic(downloadUrl, name, duration, image, id, primaryArtists)
        }
      />
      <div className="text-[13px] w-full flex flex-col justify-center items-center">
        <span className="font-semibold overflow-x-clip">{name}</span>
      </div>
    </div>
  );
};

SongItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  duration: PropTypes.string.isRequired,
  downloadUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  primaryArtists: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SongItem;
