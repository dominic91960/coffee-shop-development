import bgHero from "../../assets/images/Hero/bg-hero.png";
import search from "../../assets/images/Hero/search.png";

const Hero = () => {
  return (
    <section
      className="flex h-[40vh] min-h-[400px] flex-col items-center justify-center bg-[#221910] bg-opacity-80 bg-cover bg-center px-[5vw] bg-blend-overlay md:items-start md:px-[10vw]"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <blockquote className="relative rounded border border-primary px-[3ch] pt-1 font-manjari capitalize text-primary sm:text-2xl lg:text-3xl 2xl:text-4xl">
        <p className="absolute left-[3%] top-0 text-5xl sm:left-[4%] sm:text-6xl lg:text-7xl 2xl:text-8xl">
          &#8220;
        </p>
        <h1>Where every cup tells a story</h1>
        <p className="absolute right-[3%] top-full text-5xl sm:right-[4%] sm:text-6xl lg:text-7xl 2xl:text-8xl">
          &#8221;
        </p>
      </blockquote>
      <div className="flex flex-col items-center text-center font-manjari md:flex-col-reverse md:items-start md:text-left">
        <search className="flex w-fit gap-1 pt-4">
          <button className="rounded bg-primary bg-opacity-70 p-0.5">
            <img src={search} alt="Search" className="h-4" />
          </button>
          <input
            type="text"
            placeholder="Search Your Happiness in Every Sip"
            className="w-[38ch] rounded bg-white bg-opacity-70 px-4 pt-1 text-[9px] text-secondary placeholder:text-secondary"
          />
        </search>
        <p className="pt-4 text-[8px] text-white sm:text-xs lg:text-sm 2xl:text-base">
          Welcome to <span className="font-bold">EspressoZen Cafe</span>, <br />
          where you can search your happiness in every perfectly brewed cup.
        </p>
      </div>
    </section>
  );
};

export default Hero;
