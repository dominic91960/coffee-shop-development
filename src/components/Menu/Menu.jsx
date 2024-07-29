import Carousel from "../Carousel/Carousel";

import branch from "../../assets/images/HeroSection/branch.png";

const Menu = ({ isTriggered, handleClick }) => {
  return (
    <section
      id="menu"
      className="pt-[270px] md:pt-[300px] lg:pt-[150px] relative"
    >
      <img
        src={branch}
        alt="Branch"
        className="absolute -top-28 md:-top-52 lg:-top-72 -z-10"
      />
      <h2 className="font-noto-sans-tamil font-extrabold text-secondary text-2xl md:text-3xl lg:text-4xl lg:text-left lg:ps-20 mt-10">
        <span className="border border-secondary p-1 pe-0">
          Discover Our Coffee Sel
        </span>
        ection
      </h2>
      <div className="xl:px-20 xl:flex xl:items-center mb-10 lg:mt-14 xl:mt-0">
        <div
          className={`xl:w-3/5 mb-10 ${
            isTriggered ? "cursor-default" : "cursor-pointer"
          }`}
          onClick={handleClick}
        >
          <Carousel visible={isTriggered} />
        </div>
        <div className="xl:text-left xl:pl-8 px-10 md:px-20 xl:px-0 pt-5 xl:translate-y-5">
          <h4 className="font-noto-sans-tamil font-extrabold text-2xl mb-5 text-primary lg:text-3xl">
            Explore Our Coffee Menu
          </h4>
          <p className="font-manjari font-bold mb-5 lg:text-lg">
            Immerse yourself in our handcrafted coffee menu, featuring a variety
            of bold espressos, creamy lattes, and refreshing iced coffees, each
            expertly prepared to elevate your coffee experience.
          </p>
          <button className="bg-[#825917] font-noto-sans-tamil font-black text-white px-8 lg:px-10 pt-2 pb-1 rounded-lg transition-transform duration-300 hover:scale-105 text-xl lg:text-2xl">
            More Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
