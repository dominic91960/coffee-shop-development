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
    <header className="fixed w-full top-0 z-50 bg-transparent text-white font-manjari uppercase">
      {/* MAIN NAVBAR */}
      <section
        className={`flex items-center justify-between px-[5vw] md:px-[10vw] py-4 ${
          isToggled && "backdrop-blur-sm"
        }`}
      >
        <a
          href="#"
          className="transition-transform duration-300 hover:scale-105 drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
        >
          <img src={logo} alt="Logo" className="h-[40px]" />
        </a>
        <nav className="hidden space-x-8 md:block text-sm">
          <a
            href="#"
            className="hover:text-primary drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-primary drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-primary drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-primary drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
          >
            Locations
          </a>
          <a
            href="#"
            className="hover:text-primary drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
          >
            Contact
          </a>
        </nav>
        <BtnToggle isToggled={isToggled} handleClick={handleClick} />
      </section>
      {/* MOBILE MENU */}
      <section
        className={`${
          isToggled ? "flex md:hidden" : "hidden"
        } section-min-height animate-open-menu absolute w-full origin-top justify-center backdrop-blur-sm`}
        onClick={handleClick}
      >
        <nav className="flex w-full flex-col px-[5vw] text-sm">
          <a
            href="#"
            className="mt-4 py-4 hover:text-primary drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
          >
            Home
            <hr className="border-t-white opacity-10" />
          </a>
          <a
            href="#"
            className="mt-4 py-4 hover:text-primary drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
          >
            Services
            <hr className="border-t-white opacity-10" />
          </a>
          <a
            href="#"
            className="mt-4 py-4 hover:text-primary drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
          >
            About
            <hr className="border-t-white opacity-10" />
          </a>
          <a
            href="#"
            className="mt-4 py-4 hover:text-primary drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
          >
            Locations
            <hr className="border-t-white opacity-10" />
          </a>
          <a
            href="#"
            className="mt-4 py-4 hover:text-primary drop-shadow-[1px_1px_2px_rgb(0,0,0)]"
          >
            Contact
            <hr className="border-t-white opacity-10" />
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
