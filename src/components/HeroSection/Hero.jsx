import searchIcon from "../../assets/images/HeroSection/search.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-blend-overlay bg-[#221910] min-h-[80vh] px-20"
    >
      <div className="flex flex-col justify-center items-start py-36">
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
          <button className="bg-primary rounded-lg py-2 px-3">
            <img src={searchIcon} alt="Search icon" className="w-4 md:w-6" />
          </button>
          <input
            type="text"
            className="outline-none rounded-lg bg-white bg-opacity-80 w-[40ch] md:w-[50ch] text-secondary placeholder:text-secondary px-5 text-sm md:text-base"
            placeholder="Search Your Happiness in Every Sip"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
