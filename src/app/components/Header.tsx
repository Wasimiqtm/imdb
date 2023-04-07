import React from "react";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import HeaderItems from "./HeaderItems";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";


export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex space-x-5">
        <HeaderItems title="HOME" address="/" Icon={AiFillHome} />
        <HeaderItems title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <Link href='/cms'>
              <span className="text-xl hidden sm:inline">CMS</span>
            </Link>
          </h2>
        </Link>
      </div>
    </div>
  );
}
