import searchIcon from "../../assets/images/HeroSection/search.png";
import coffeeCup from "../../assets/images/HeroSection/coffee-cup.png";
import logoIcon from "../../assets/images/HeroSection/logo-icon.png";
import coffeeBeans from "../../assets/images/HeroSection/coffee-beans.png";
import "./Hero.css";

const Hero = ({ isTriggered, handleClick }) => {
  return (
    <section
      id="hero"
      className="hero-background relative z-10 min-h-[300px] bg-[#221910] bg-cover px-[10vw] bg-blend-overlay md:px-[5vw]"
    >
      <div className="flex flex-col items-center justify-center pt-24 md:items-start md:pt-32">
        {/* Main text */}
        <div className="relative mb-5 h-fit w-fit border-2 border-primary px-[5vw] pb-0.5 pt-2 font-manjari text-[18px] text-primary sm:text-3xl lg:text-4xl xl:text-5xl">
          <span className="absolute left-[1vw] top-0 text-5xl sm:text-6xl md:text-7xl">
            &#8220;
          </span>
          <h1>Where Every Cup Tells a Story</h1>
          <span className="absolute right-[1vw] translate-y-1 text-5xl sm:text-6xl md:text-7xl">
            &#8221;
          </span>
        </div>
        {/* Desc */}
        <p className="mb-5 text-center font-manjari text-[9px] text-white sm:text-xs md:text-left md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
          Welcome to <span className="font-bold">EspressoZen Cafe</span>, <br />
          where you can search your happiness in every perfectly brewed cup.
        </p>
        {/* Search */}
        <div className="flex gap-x-2">
          <button className="rounded bg-primary px-0.5 transition-transform duration-300 hover:scale-105">
            <img src={searchIcon} alt="Search icon" className="w-5 sm:w-6" />
          </button>
          <input
            type="text"
            className="w-[38ch] rounded bg-white bg-opacity-70 pb-1 ps-4 pt-2 font-manjari text-[11px] text-secondary outline-none placeholder:text-secondary sm:text-sm"
            placeholder="Search Your Happiness in Every Sip"
          />
        </div>
      </div>
      {/* Coffee */}
      <div className="relative flex h-[170px] w-full justify-center sm:h-[180px] md:h-[190px] lg:h-[140px] lg:justify-end lg:p-[5vw] xl:h-[150px] 2xl:h-[160px]">
        <div className="absolute -bottom-[150px] h-[300px] w-[300px] sm:-bottom-[160px] sm:h-[320px] sm:w-[320px] md:-bottom-[180px] md:h-[350px] md:w-[350px] lg:-bottom-[185px] lg:h-[380px] lg:w-[380px] xl:-bottom-[220px] xl:h-[450px] xl:w-[450px]">
          <div className="absolute left-0 top-0 h-full w-full rounded-full bg-white bg-opacity-70"></div>
          <div className="absolute left-[10%] top-[10%] h-4/5 w-4/5 rounded-full bg-white bg-opacity-50"></div>
          <img
            src={coffeeCup}
            alt="Coffee cup"
            className={`absolute left-0 top-0 z-10 transition-opacity delay-[3s] duration-1000 ${
              isTriggered
                ? "move-cup 2xl:opacity-0"
                : "opacity-100 2xl:cursor-pointer"
            }`}
            onClick={handleClick}
          />
          <img
            src={logoIcon}
            alt="Logo icon"
            className={`absolute -left-[5%] -top-[4%] scale-75 transition-opacity duration-1000 ${
              isTriggered ? "2xl:opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={coffeeBeans}
            alt="Coffee beans"
            className="absolute left-[95px] top-[165px] scale-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
