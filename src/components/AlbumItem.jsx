import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AlbumItem = ({ name, artists, id, image }) => {
  // console.log("Image Data:", image);
  // console.log("Image URL:", image && image[2] && image[2].link);

  return (
    <>
      <Link
        to={`/albums/${id}`}
        className="w-[160px] max-h-[220px] overflow-y-clip flex flex-col justify-center items-center gap-3 rounded-lg"
      >
        <img
          src={image?.[2]?.link}
          alt=""
          className="rounded-lg max-w-full h-auto"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        <div className="text-[13px] w-full flex flex-col justify-center items-center">
          <span className="text-gray-100 font-semibold overflow-x-clip">
            {name}
          </span>
          <p className="text-gray-100 font-thin text-xs sm:text-sm">
            {artists.map((artist) => artist.name).join(",").length > 24
              ? artists
                  .map((artist) => artist.name)
                  .join(",")
                  .slice(0, 24) + "..."
              : artists.map((artist) => artist.name).join(",")}
          </p>
        </div>
      </Link>
    </>
  );
};

AlbumItem.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.array,
  title: PropTypes.string,
};

export default AlbumItem;
