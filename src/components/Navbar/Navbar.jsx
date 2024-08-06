import { useState } from "react";

import BtnToggle from "./BtnToggle";

import logo from "../../assets/images/Navbar/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-500 text-black">
      {/* MAIN NAVBAR */}
      <section className="mx-auto flex max-w-7xl items-center justify-between px-[5vw] py-4 2xl:px-0">
        <a
          href="#"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img src={logo} alt="Logo" className="h-[40px]" />
        </a>
        <nav className="hidden space-x-8 text-lg md:block">
          <a href="#" className="hover:opacity-70">
            Home
          </a>
          <a href="#" className="hover:opacity-70">
            Services
          </a>
          <a href="#" className="hover:opacity-70">
            About
          </a>
          <a href="#" className="hover:opacity-70">
            Locations
          </a>
          <a href="#" className="hover:opacity-70">
            Contact
          </a>
        </nav>
        <BtnToggle isToggled={isToggled} handleClick={handleClick} />
      </section>
      {/* MOBILE MENU */}
      <section
        className={`${
          isToggled ? "flex md:hidden" : "hidden"
        } section-min-height animate-open-menu absolute w-full origin-top justify-center`}
        onClick={handleClick}
      >
        <nav className="flex w-full flex-col px-[5vw]">
          <a href="#" className="mt-4 py-4 text-lg hover:opacity-70">
            Home
            <hr className="border-t-black" />
          </a>
          <a href="#" className="mt-4 py-4 text-lg hover:opacity-70">
            Services
            <hr className="border-t-black" />
          </a>
          <a href="#" className="mt-4 py-4 text-lg hover:opacity-70">
            About
            <hr className="border-t-black" />
          </a>
          <a href="#" className="mt-4 py-4 text-lg hover:opacity-70">
            Locations
            <hr className="border-t-black" />
          </a>
          <a href="#" className="mt-4 py-4 text-lg hover:opacity-70">
            Contact
            <hr className="border-t-black" />
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
