import searchIcon from "../../assets/images/HeroSection/search.png";
import coffeeCup from "../../assets/images/HeroSection/coffee-cup.png";
import coffeeBeans from "../../assets/images/HeroSection/coffee-beans.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-blend-overlay bg-[#221910] min-h-[80vh] px-20 relative bg-cover"
    >
      <div className="flex flex-col justify-center items-start pt-36">
        {/* Main text */}
        <div className="border border-primary font-manjari text-4xl md:text-6xl text-primary w-fit pt-4 md:pt-6 pb-1 md:pb-3 md:px-20 px-10 relative h-fit mb-7">
          <span className="text-6xl md:text-8xl absolute top-0 md:left-10 left-4">
            &#8220;
          </span>
          <h1>Where Every Cup Tells a Story</h1>
          <span className="text-6xl md:text-8xl absolute right-4 md:right-10 translate-y-1">
            &#8221;
          </span>
        </div>
        {/* Desc */}
        <p className="font-manjari text-xl md:text-3xl text-left text-white md:mb-16 mb-8 sm:text-2xl">
          Welcome to <span className="font-bold">EspressoZen Cafe</span>, <br />{" "}
          where you can search your happiness in every perfectly brewed cup.
        </p>
        {/* Search */}
        <div className="flex gap-x-2">
          <button className="bg-primary rounded-lg py-2 px-3 hover:scale-105 transition-transform duration-300">
            <img src={searchIcon} alt="Search icon" className="w-4 md:w-6" />
          </button>
          <input
            type="text"
            className="outline-none rounded-lg bg-white bg-opacity-80 w-[40ch] md:w-[50ch] text-secondary placeholder:text-secondary px-5 text-sm md:text-base"
            placeholder="Search Your Happiness in Every Sip"
          />
        </div>
      </div>
      {/* Coffee */}
      <div className="flex w-full lg:p-[5vw] justify-center lg:justify-end relative h-[200px] sm:h-[230px] md:h-[260px] lg:h-[200px]">
        <div className="w-[300px] h-[300px] absolute -bottom-[150px] sm:w-[320px] sm:h-[320px] sm:-bottom-[160px] md:w-[350px] md:h-[350px] md:-bottom-[180px] lg:w-[380px] lg:h-[380px] lg:-bottom-[185px] xl:w-[450px] xl:h-[450px] xl:-bottom-[220px]">
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white bg-opacity-70"></div>
          <img
            src={coffeeCup}
            alt="Coffee cup"
            className="absolute top-0 left-0 z-10"
          />
          <img
            src={coffeeBeans}
            alt="Coffee beans"
            className="absolute top-[120px] left-[80px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
