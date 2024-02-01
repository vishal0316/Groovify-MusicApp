import { BiRepeat } from "react-icons/bi";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { PiShuffleBold } from "react-icons/pi";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuHardDriveDownload } from "react-icons/lu";
import React, { useState } from "react";
import VolumeController from "./VolumeController";

const Player = () => {
  const [isVolumeVisible, setIsVolumeVisible] = useState(false);

  return (
    <div className="fixed bottom-0 right-0 left-0 flex flex-col">
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
            src="https://c.saavncdn.com/artists/Imagine_Dragons_50x50.jpg"
            alt=""
            width={55}
            className="rounded-lg"
          />
          <div className="hidded lg:block">
            <span>Lorem, ipsum.</span>
            <p className="text-xs text-gray-300">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        {/* 2nd div */}
        <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center ">
          <BiRepeat className="text-gray-100  hover:text-yellow-300 cursor-pointer" />
          <IoMdSkipBackward className="text-gray-100 hover:text-yellow-300 cursor-pointer" />
          <FaPlay className="text-gray-100  hover:text-yellow-300 cursor-pointer" />
          <IoMdSkipForward className="text-gray-100 hover:text-yellow-300 cursor-pointer" />
          <PiShuffleBold className="text-gray-100 hover:text-yellow-300 cursor-pointer" />
        </div>
        {/* 3rd div */}
        <div
          className="flex lg:w-[30vw] justify-end items-center "
          onMouseEnter={() => setIsVolumeVisible(true)}
          onMouseLeave={() => setIsVolumeVisible(false)}
        >
          <LuHardDriveDownload className="text-gray-100 hover:text-yellow-300 cursor-pointer text-2xl lg:text-3xl hidden  lg:block" />
          <HiSpeakerWave className="text-gray-100 hover:text-yellow-300 cursor-pointer text-2xl lg:text-3xl lg:mr-2" />
          <VolumeController isVolumeVisible={isVolumeVisible} />
        </div>
      </div>
    </div>
  );
};

export default Player;
