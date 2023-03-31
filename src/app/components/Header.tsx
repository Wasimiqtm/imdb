import React from "react";
import { AiFillHome } from "react-icons/ai";
import HeaderItems from "./HeaderItems";

export default function Header() {
  return (
    <div>
      <div className="">
        <HeaderItems title="HOME" address="/" Icon={AiFillHome}></HeaderItems>
      </div>
      <div className=""></div>
    </div>
  );
}
