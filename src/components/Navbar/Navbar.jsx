import { useState } from "react";

import logo from "../../assets/images/Navbar/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled((previousState) => !previousState);
  };

  return (
    <nav
      className={`fixed top-0 z-20 w-full ${
        isToggled && "h-screen bg-secondary bg-opacity-40 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-[10vw] py-4 md:px-[5vw]">
        <a href="#hero" className="h-[40px] w-auto">
          <img
            src={logo}
            alt="logo"
            className="h-full drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105"
            onClick={() => {
              isToggled && handleClick();
            }}
          />
        </a>
        {/* main navbar */}
        <ul className="hidden items-center gap-12 font-manjari uppercase text-white lg:flex xl:gap-16">
          <li className="cursor-pointer drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105 hover:text-primary">
            <a href="#hero">Home</a>
          </li>
          <li className="cursor-pointer drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105 hover:text-primary">
            <a href="#menu">Menu</a>
          </li>
          <li className="cursor-pointer drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105 hover:text-primary">
            <a href="#locations">Locations</a>
          </li>
          <li className="cursor-pointer drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105 hover:text-primary">
            <a href="#about">About</a>
          </li>
          <li className="cursor-pointer drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105 hover:text-primary">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          id="hamburger-button"
          onClick={handleClick}
          className={`relative h-8 w-8 text-3xl drop-shadow-[1px_1px_2px_rgb(0,0,0)] lg:hidden ${
            isToggled && "toggle"
          }`}
        >
          <div className="absolute h-[2px] w-8 rounded bg-white content-[''] before:absolute before:left-0 before:top-0 before:-mt-2 before:h-[2px] before:w-8 before:rounded before:bg-white before:content-[''] after:absolute after:left-0 after:top-0 after:mt-2 after:h-[2px] after:w-8 after:rounded after:bg-white after:content-['']"></div>
        </button>
      </div>
      {/* mobile navbar */}
      <ul
        className={`animate-open-menu origin-top flex-col items-center gap-y-8 px-[10vw] pt-5 font-manjari uppercase text-white md:px-[5vw] lg:hidden xl:gap-16 ${
          isToggled ? "flex" : "hidden"
        }`}
        onClick={handleClick}
      >
        <li className="w-full cursor-pointer text-left drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105 hover:text-primary">
          <a href="#hero">Home</a>
          <hr className="opacity-10" />
        </li>
        <li className="mx-10 w-full cursor-pointer text-left drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105 hover:text-primary">
          <a href="#menu">Menu</a>
          <hr className="opacity-10" />
        </li>
        <li className="mx-10 w-full cursor-pointer text-left drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105 hover:text-primary">
          <a href="#locations">Locations</a>
          <hr className="opacity-10" />
        </li>
        <li className="mx-10 w-full cursor-pointer text-left drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105 hover:text-primary">
          <a href="#about">About</a>
          <hr className="opacity-10" />
        </li>
        <li className="mx-10 w-full cursor-pointer text-left drop-shadow-[1px_1px_2px_rgb(0,0,0)] transition-transform duration-300 hover:scale-105 hover:text-primary">
          <a href="#contact">Contact</a>
          <hr className="opacity-10" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
