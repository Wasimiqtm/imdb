"use client";
import { BsFillBrightnessHighFill, BsFillMoonFill } from "react-icons/bs";
import React from "react";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {currentTheme === 'dark' ? (
        <BsFillBrightnessHighFill className=" text-xl cursor-pointer hover:text-amber-600" onClick={() => setTheme('light')}></BsFillBrightnessHighFill>
      ) : (
        <BsFillMoonFill className=" text-xl cursor-pointer hover:text-amber-600" onClick={() => setTheme('dark')}></BsFillMoonFill>
        
      )}
    </>
  );
}
