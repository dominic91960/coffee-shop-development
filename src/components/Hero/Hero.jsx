import { useState } from "react";

import bgHero from "../../assets/images/Hero/bg-hero.png";
import search from "../../assets/images/Hero/search.png";
import coffeeCup from "../../assets/images/Hero/coffee-cup.png";
import logoIcon from "../../assets/images/Hero/logo-icon.png";
import coffeeBeansSmall from "../../assets/images/Hero/coffee-beans-small.png";
import coffeeBeans from "../../assets/images/Hero/coffee-beans.png";
import "./Hero.css";

const Hero = () => {
  const [isShown, setIsShown] = useState(true);
  const handleClick = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <section
      className="relative flex h-[30vh] min-h-[280px] flex-col items-center justify-start bg-[#221910] bg-opacity-80 bg-cover bg-center px-[5vw] pt-20 bg-blend-overlay sm:min-h-[340px] md:h-[70vh] md:items-start md:justify-center md:px-[10vw] md:pt-0"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* Quote */}
      <blockquote className="relative rounded border border-primary px-[3ch] font-manjari capitalize text-primary sm:border-2 sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        <p className="absolute left-[3%] top-0 text-5xl sm:left-[4%] sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[150px]">
          &#8220;
        </p>
        <h1 className="pt-0.5 sm:pb-1 sm:pt-2 lg:pb-2 lg:pt-4">
          Where every cup tells a story
        </h1>
        <p className="absolute right-[3%] top-full text-5xl sm:right-[4%] sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[150px]">
          &#8221;
        </p>
      </blockquote>
      <div className="flex flex-col items-center text-center font-manjari md:flex-col-reverse md:items-start md:text-left">
        {/* Search Bar */}
        <search className="flex w-fit gap-1 pt-4">
          <button className="rounded bg-primary bg-opacity-70 p-0.5 transition-transform duration-300 hover:scale-105">
            <img src={search} alt="Search" className="h-4 lg:h-5 xl:h-6" />
          </button>
          <input
            type="text"
            placeholder="Search Your Happiness in Every Sip"
            className="w-[38ch] rounded bg-white bg-opacity-70 px-4 pt-1 text-[9px] text-secondary placeholder:text-secondary sm:text-[10px] md:text-[11px] lg:text-xs xl:pb-1 xl:pt-2 xl:text-sm 2xl:text-base"
          />
        </search>
        {/* Welcome Text */}
        <p className="pt-4 text-[8px] text-white sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Welcome to <span className="font-bold">EspressoZen Cafe</span>, <br />
          where you can search your happiness in every perfectly brewed cup.
        </p>
      </div>
      {/* Image Area */}
      <div className="absolute bottom-0 w-[200px] translate-y-[100px] rounded-full bg-none sm:w-[250px] sm:translate-y-[120px] md:right-[10%] md:w-[30%] md:translate-y-[50%] md:bg-white md:bg-opacity-50">
        {/* Coffee cup */}
        <img
          src={coffeeCup}
          alt="A cup of coffee"
          className={`${isShown ? "block" : "block md:hidden"} md:cursor-pointer`}
          onClick={handleClick}
        />
        {/* Logo icon */}
        <div className="relative -z-20 scale-75 rounded-full bg-white bg-opacity-50">
          <img
            src={logoIcon}
            alt="Logo icon"
            className={`${isShown ? "hidden" : "animate-opacity hidden md:block"} md:cursor-pointer`}
          />
        </div>
        <div className="relative">
          {/* Image of coffee beans for small screens */}
          <div className="absolute -bottom-[35px] -z-10 w-[250px] -translate-x-[25px] sm:-bottom-[50px] sm:w-[330px] sm:-translate-x-[40px] md:hidden">
            <img src={coffeeBeansSmall} alt="Coffee Beans" className="w-full" />
          </div>
          {/* Image of coffee beans for all other screens */}
          <div className="absolute -bottom-[100px] -z-10 hidden translate-x-[60px] md:block lg:-bottom-[140px] lg:translate-x-[80px] xl:-bottom-[180px] xl:translate-x-[100px] 2xl:-bottom-[220px] 2xl:translate-x-[120px]">
            <img src={coffeeBeans} alt="Coffee Beans" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
