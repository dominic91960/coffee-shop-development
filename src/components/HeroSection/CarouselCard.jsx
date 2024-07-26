import coffeeIcon from "../../assets/images/HeroSection/coffee-icon.png";
import cartIcon from "../../assets/images/HeroSection/shopping-cart-icon.png";
import wishlistIcon from "../../assets/images/HeroSection/love-icon.png";

const CarouselCard = ({ image, title, text, price }) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-xl bg-[#DBC1A8] w-[200px]  p-4 mt-32 mb-5 h-[265px] ">
        <div className="border border-[#221807] rounded-xl">
          <div className="flex justify-center relative h-[70px] ">
            <img
              src={image}
              alt={title}
              className="absolute -top-[60px]  scale-150 w-[100px] "
            />
          </div>
          <h3 className="font-manjari font-bold text-2xl text-[#221807]">
            {title}
          </h3>
          <hr className="border-t-2 border-t-[#221807] w-4/5 mx-auto my-1" />
          <p className="text-[#221807] font-manjari font-bold px-1 text-xs drop-shadow-[1px_1px_5px_rgba(0,0,0,0.5)] mb-3">
            {text}
          </p>
          <div className="flex justify-center gap-x-4">
            <img src={coffeeIcon} alt="Coffee icon" className="w-5 h-5" />
            <img src={cartIcon} alt="Cart icon" className="w-5 h-5" />
            <img src={wishlistIcon} alt="Wishlist icon" className="w-5 h-5" />
          </div>
          <div className="flex justify-center relative h-[25px]">
            <button className="bg-[#B88351] text-white rounded-lg hover:scale-105 transition-transform duration-300 font-manjari font-bold text-xl pt-3  pb-1 px-5 absolute -bottom-[30px]">
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
