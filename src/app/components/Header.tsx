import React from "react";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import HeaderItems from "./HeaderItems";
import { BsFillBrightnessHighFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className=" flex justify-between px-20 py-5 bg-slate-200">
      <div className=" flex space-x-5 items-center">
        <HeaderItems title="HOME" address="/" Icon={AiFillHome}></HeaderItems>
        <HeaderItems title="ABOUT" address="/about" Icon={AiFillInfoCircle}></HeaderItems>
      </div>
      <div className=" flex items-center space-x-5">
        <BsFillBrightnessHighFill></BsFillBrightnessHighFill>
        <button className=" bg-orange-400 px-4 py-1 rounded-xl">IMDB</button>
        <span>Clone</span>
      </div>
    </div>
  );
}
