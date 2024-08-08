import coffeeIcon from "../../assets/images/HeroSection/coffee-icon.png";
import cartIcon from "../../assets/images/HeroSection/shopping-cart-icon.png";
import wishlistIcon from "../../assets/images/HeroSection/love-icon.png";

const CarouselCard = ({ image, title, text, price, visible }) => {
  return (
    <div className="flex justify-center">
      <div className="sm relative mb-5 mt-32 h-[230px] w-[160px] rounded-xl bg-[#DBC1A8] p-3 sm:h-[240px] sm:w-[220px]">
        <div className="h-full rounded-xl border border-[#221807]">
          <div className="relative flex justify-center">
            <img
              src={image}
              alt={title}
              className={`absolute -top-[60px] w-[100px] ${
                visible
                  ? "scale-125 opacity-100 transition-all delay-[2s] duration-1000 ease-out sm:scale-[180%]"
                  : "scale-125 sm:scale-[180%] 2xl:scale-100 2xl:opacity-0"
              }`}
            />
          </div>
          <div className="flex h-full translate-y-[5%] flex-col justify-center sm:translate-y-[16%]">
            <h3 className="font-manjari text-lg font-bold text-[#221807] sm:text-[24px]">
              {title}
            </h3>
            <hr className="mx-auto mb-2 w-4/5 border-t-2 border-t-[#221807]" />
            <p className="mb-2 px-1 font-manjari text-[9px] font-bold text-[#221807] drop-shadow-[1px_1px_5px_rgba(0,0,0,0.5)] sm:text-[10px]">
              {text}
            </p>
            <div className="flex justify-center gap-x-4">
              <img
                src={coffeeIcon}
                alt="Coffee icon"
                className="h-5 w-5 cursor-pointer transition-transform duration-300 hover:scale-125"
              />
              <img
                src={cartIcon}
                alt="Cart icon"
                className="h-5 w-5 cursor-pointer transition-transform duration-300 hover:scale-125"
              />
              <img
                src={wishlistIcon}
                alt="Wishlist icon"
                className="h-5 w-5 cursor-pointer transition-transform duration-300 hover:scale-125"
              />
            </div>
            <button className="absolute -bottom-[5%] left-0 right-0 mx-auto w-fit rounded-lg bg-[#B88351] px-5 pb-1 pt-3 font-manjari text-lg font-bold text-white transition-transform duration-300 hover:scale-105 sm:bottom-[2%]">
              <p className="drop-shadow-[1px_1px_2px_rgba(0,0,0,0.8)]">
                {price}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
