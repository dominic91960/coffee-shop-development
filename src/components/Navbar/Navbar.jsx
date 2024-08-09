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
    <header className="fixed top-0 z-50 w-full font-manjari uppercase text-white">
      {/* MAIN NAVBAR */}
      <section
        className={`flex items-center justify-between px-[5vw] py-4 md:px-[10vw] ${isToggled && "bg-secondary bg-opacity-30"}`}
      >
        <a
          href="#"
          className="bg-opacity-15 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
        >
          <img src={logo} alt="Logo" className="h-[40px]" />
        </a>
        <nav className="text-lift hidden space-x-8 text-sm md:block">
          <a href="#" className="hover:text-primary">
            Home
          </a>
          <a href="#" className="hover:text-primary">
            Services
          </a>
          <a href="#" className="hover:text-primary">
            About
          </a>
          <a href="#" className="hover:text-primary">
            Locations
          </a>
          <a href="#" className="hover:text-primary">
            Contact
          </a>
        </nav>
        <BtnToggle isToggled={isToggled} handleClick={handleClick} />
      </section>
      {/* MOBILE MENU */}
      <section
        className={`${
          isToggled ? "0 flex md:hidden" : "hidden"
        } section-min-height animate-open-menu absolute w-full origin-top justify-center bg-secondary bg-opacity-30`}
        onClick={handleClick}
      >
        <nav className="text-lift flex w-full flex-col px-[5vw] text-sm">
          <a href="#" className="mt-4 py-4 hover:text-primary">
            Home
            <hr className="border-t-white opacity-10" />
          </a>
          <a href="#" className="mt-4 py-4 hover:text-primary">
            Services
            <hr className="border-t-white opacity-10" />
          </a>
          <a href="#" className="mt-4 py-4 hover:text-primary">
            About
            <hr className="border-t-white opacity-10" />
          </a>
          <a href="#" className="mt-4 py-4 hover:text-primary">
            Locations
            <hr className="border-t-white opacity-10" />
          </a>
          <a href="#" className="mt-4 py-4 hover:text-primary">
            Contact
            <hr className="border-t-white opacity-10" />
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
