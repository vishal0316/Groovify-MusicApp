import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuHardDriveDownload } from "react-icons/lu";
import VolumeController from "./VolumeController";
import { useState, useContext, useRef, useEffect } from "react";
import MusicContext from "../context/MusicContext";

const Player = () => {
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);
  const { currentSong, playMusic, isPlaying, nextSong, prevSong } =
    useContext(MusicContext);

  return (
    <div className="fixed bottom-0 right-0 left-0 flex flex-col bg-black">
      <input
        type="range"
        name="progess"
        id="progess"
        min={0}
        max={100}
        step={0.1}
        value={0}
        className="w-full h-[5px] text-green-500 "
      />
      <div className="flex justify-between items-center mb-3 px-3">
        {/* 1st div */}
        <div className="flex justify-start items-center gap-3 lg:w[30vh]">
          <img
            src={currentSong?.image}
            alt=""
            width={55}
            className="rounded-lg"
          />
          <div className="hidded lg:block">
            <span>{currentSong?.name}</span>
            <p className="text-xs text-gray-300">
              {currentSong?.PrimaryArtists}
            </p>
          </div>
        </div>
        {/* 2nd div */}
        <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center">
          <BiRepeat className="text-gray-400 cursor-pointer" />
          <IoMdSkipBackward
            onClick={prevSong}
            className="text-white hover:text-gray-500 cursor-pointer"
          />
          {isPlaying ? (
            <FaPause
              className="text-white hover:text-gray-500 cursor-pointer"
              onClick={() =>
                playMusic(
                  currentSong?.audio,
                  currentSong.name,
                  currentSong.duration,
                  currentSong.image,
                  currentSong.id
                )
              }
            />
          ) : (
            <FaPlay
              className="text-white hover:text-gray-500 cursor-pointer"
              onClick={() =>
                playMusic(
                  currentSong.audio,
                  currentSong.name,
                  currentSong.duration,
                  currentSong.image,
                  currentSong.id
                )
              }
            />
          )}

          <IoMdSkipForward
            onClick={nextSong}
            className="text-white hover:text-gray-500 cursor-pointer"
          />
          <PiShuffleBold className="text-white cursor-pointer" />
        </div>
        {/* 3rd div */}
        <div
          className="flex lg:w-[30vw] justify-end items-center "
          onMouseEnter={() => setIsVolumeVisible(true)}
          onMouseLeave={() => setIsVolumeVisible(false)}
        >
          <LuHardDriveDownload className="text-gray-100 hover:text-yellow-300 cursor-pointer text-2xl lg:text-3xl hidden pr-2 lg:block" />
          <HiSpeakerWave className="text-gray-100 hover:text-yellow-300 cursor-pointer text-2xl lg:text-3xl lg:mr-2" />
          <VolumeController isVolumeVisible={isVolumeVisible} />
        </div>
      </div>
    </div>
  );
};

export default Player;
