import coffeeIcon from "../../assets/images/CarouselItem/coffee-icon.png";
import loveIcon from "../../assets/images/CarouselItem/love-icon.png";
import cartIcon from "../../assets/images/CarouselItem/cart-icon.png";
import "./CarouselItem.css";

const CarouselItem = ({ image, title, desc, price }) => {
  return (
    // <article className="aspect-ratio mx-auto mb-[20px] mt-[65px] flex w-[140px] items-center justify-center rounded-3xl bg-[#D39C68] font-manjari font-bold text-secondary sm:mb-[24px] sm:mt-[87px] sm:w-[215px] md:mb-[30px] md:mt-[112px] md:w-[270px]">
    <article className="aspect-ratio mx-auto mb-[20px] mt-[65px] flex w-[140px] items-center justify-center rounded-3xl bg-[#D39C68] font-manjari font-bold text-secondary sm:mb-[24px] sm:mt-[92px] sm:w-[230px] md:rounded-2xl">
      {/* Content with border */}
      <div className="relative h-[90%] w-[90%] rounded-2xl border border-secondary">
        {/* Image section */}
        <div className="h-2/5 w-full">
          <div className="mx-auto w-[90%] -translate-y-[60%]">
            <img
              src={image}
              alt={`A cup of ${title} coffee`}
              className="drop-shadow-xl"
            />
          </div>
        </div>
        {/* Text section */}
        {/* <div className="mx-auto flex h-[55%] w-[90%] -translate-y-[10%] flex-col text-center md:-translate-y-[6%]"> */}
        <div className="mx-auto flex h-[55%] w-[90%] -translate-y-[10%] flex-col text-center md:-translate-y-[6%]">
          {/* Title */}
          {/* <h3 className="text-lift text-xs capitalize sm:text-lg md:text-2xl"> */}
          <h3 className="text-lift text-xs capitalize sm:text-lg">{title}</h3>
          <hr className="mx-auto w-4/5 border-t-secondary" />
          {/* Desc */}
          {/* <p className="mt-2 flex-grow text-[6.2px] sm:text-[11px] md:text-xs"> */}
          <p className="mt-2 flex-grow text-[6.2px] sm:text-[10px]">{desc}</p>
          {/* Options */}
          <div className="mx-auto mt-1 flex w-3/5 justify-between">
            {/* <div className="w-3 transition-transform duration-300 hover:scale-125 sm:w-4 md:w-6"> */}
            <div className="w-3 cursor-pointer transition-transform duration-300 hover:scale-125 sm:w-[18px]">
              <img src={coffeeIcon} alt="Coffee" />
            </div>
            <div className="w-3 cursor-pointer transition-transform duration-300 hover:scale-125 sm:w-[18px]">
              <img src={cartIcon} alt="Add to cart" />
            </div>
            <div className="w-3 cursor-pointer transition-transform duration-300 hover:scale-125 sm:w-[18px]">
              <img src={loveIcon} alt="Add to favourites" />
            </div>
          </div>
        </div>
        {/* Buy button */}
        {/* <button className="absolute left-0 right-0 top-[95%] mx-auto w-fit rounded-lg bg-secondary px-4 pb-1 pt-2 font-manjari text-sm font-bold text-white transition-transform duration-300 hover:scale-105 sm:pt-3 sm:text-lg md:pt-4 md:text-2xl"> */}
        <button className="absolute left-0 right-0 top-[95%] mx-auto w-fit rounded-lg bg-secondary px-4 pb-1 pt-2 font-manjari text-sm font-bold text-white transition-transform duration-300 hover:scale-105 sm:pt-3 sm:text-lg">
          {price}
        </button>
      </div>
    </article>
  );
};

export default CarouselItem;
