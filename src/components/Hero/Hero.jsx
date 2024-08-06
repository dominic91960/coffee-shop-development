import bgHero from "../../assets/images/Hero/bg-hero.png";
import search from "../../assets/images/Hero/search.png";

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-[5vw] md:px-[10vw] min-h-[400px] h-[40vh] bg-cover bg-center bg-[#221910] bg-blend-overlay bg-opacity-80 md:items-start"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <blockquote className="text-primary font-manjari capitalize border border-primary px-[3ch] rounded pt-1 sm:text-2xl lg:text-3xl 2xl:text-4xl relative">
        <p className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl absolute top-0 left-[3%] sm:left-[4%]">
          &#8220;
        </p>
        <h1>Where every cup tells a story</h1>
        <p className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl absolute top-full right-[3%] sm:right-[4%]">
          &#8221;
        </p>
      </blockquote>
      <div className="flex flex-col items-center text-center font-manjari md:text-left md:items-start md:flex-col-reverse">
        <search className="flex w-fit gap-1 pt-4">
          <button className="p-0.5 bg-primary rounded bg-opacity-70">
            <img src={search} alt="Search" className="h-4" />
          </button>
          <input
            type="text"
            placeholder="Search Your Happiness in Every Sip"
            className="text-[9px] bg-white bg-opacity-70 pt-1 px-4 rounded text-secondary placeholder:text-secondary w-[38ch]"
          />
        </search>
        <p className="text-white text-[8px] sm:text-xs lg:text-sm 2xl:text-base pt-4">
          Welcome to <span className="font-bold">EspressoZen Cafe</span>, <br />
          where you can search your happiness in every perfectly brewed cup.
        </p>
      </div>
    </section>
  );
};

export default Hero;
