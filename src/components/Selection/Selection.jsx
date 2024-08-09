import Carousel from "../Carousel/Carousel";
import branch from "../../assets/images/Selection/branch.png";

const Selection = () => {
  return (
    <section
      className="bg-contain bg-left-top bg-no-repeat px-[5vw] pb-10 pt-48 text-center md:px-[10vw] md:pb-20 md:text-left 2xl:pt-60"
      style={{ backgroundImage: `url(${branch})` }}
    >
      <h2 className="font-noto-sans-tamil font-bold capitalize text-secondary sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <span className="-me-[2px] border border-secondary pb-0.5 pe-0.5 ps-1 pt-1 sm:border-2">
          discover our coffee
        </span>
        &#160;selection
      </h2>
      <div className="md:mt-[5%] md:flex md:flex-row-reverse md:items-center">
        <div className="md:ps-[5vw]">
          <h3 className="hidden font-noto-sans-tamil font-bold capitalize text-primary md:block md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            Explore our coffee menu
          </h3>
          <p className="mt-4 font-manjari text-[9px] font-bold text-secondary sm:text-xs lg:text-sm 2xl:text-base">
            Immerse yourself in our handcrafted coffee menu, featuring a variety
            of bold espressos, creamy lattes, and refreshing iced coffees, each
            expertly prepared to elevate your coffee experience.
          </p>
          <button className="mt-4 hidden rounded bg-[#825917] px-4 pb-0.5 pt-1 font-noto-sans-tamil font-bold text-white transition-transform duration-300 hover:scale-105 md:block 2xl:text-lg">
            More Details
          </button>
        </div>
        <Carousel />
      </div>
      <button className="mt-4 rounded bg-[#825917] px-4 pb-0.5 pt-1 font-noto-sans-tamil text-sm font-bold text-white transition-transform duration-300 hover:scale-105 sm:text-base md:hidden">
        More Details
      </button>
    </section>
  );
};

export default Selection;
