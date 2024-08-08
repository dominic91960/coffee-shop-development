import Carousel from "../Carousel/Carousel";

import branch from "../../assets/images/HeroSection/branch.png";

const Menu = ({ isTriggered, handleClick }) => {
  return (
    <section
      id="menu"
      className="relative pt-[270px] md:pt-[300px] lg:pt-[150px]"
    >
      <img
        src={branch}
        alt="Branch"
        className="absolute -top-28 -z-10 md:-top-52 lg:-top-72"
      />
      <h2 className="mt-10 font-noto-sans-tamil text-xl font-extrabold text-secondary sm:text-2xl md:text-3xl lg:ps-20 lg:text-left lg:text-4xl xl:text-5xl">
        <span className="border border-secondary p-1 pe-0">
          Discover Our Coffee Sel
        </span>
        ection
      </h2>
      <div className="mb-10 lg:mt-14 xl:mt-0 xl:flex xl:items-center xl:px-[5vw]">
        <div
          className={`mb-10 xl:w-3/5 ${
            isTriggered ? "cursor-default" : "2xl:cursor-pointer"
          }`}
          onClick={handleClick}
        >
          <Carousel visible={isTriggered} />
        </div>
        <div className="px-[10vw] pt-5 md:px-[5vw] xl:translate-y-5 xl:px-0 xl:pl-8 xl:text-left">
          <h4 className="mb-5 hidden font-noto-sans-tamil text-xl font-extrabold text-primary sm:block lg:text-[29px]">
            Explore Our Coffee Menu
          </h4>
          <p className="mb-5 font-manjari text-xs font-bold sm:text-sm md:text-base lg:text-lg">
            Immerse yourself in our handcrafted coffee menu, featuring a variety
            of bold espressos, creamy lattes, and refreshing iced coffees, each
            expertly prepared to elevate your coffee experience.
          </p>
          <button className="rounded-lg bg-[#825917] px-8 pb-1 pt-2 font-noto-sans-tamil text-sm font-extrabold text-white transition-transform duration-300 hover:scale-105 lg:px-10 lg:text-xl">
            More Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
