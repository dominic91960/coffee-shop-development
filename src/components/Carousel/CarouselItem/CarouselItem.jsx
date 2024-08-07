import americano from "../../../assets/images/Carousel/americano.png";
import coffeeIcon from "../../../assets/images/CarouselItem/coffee-icon.png";
import loveIcon from "../../../assets/images/CarouselItem/love-icon.png";
import cartIcon from "../../../assets/images/CarouselItem/cart-icon.png";
import "./CarouselItem.css";

const CarouselItem = () => {
  return (
    <article className="flex h-[180px] w-[160px] items-center justify-center rounded-3xl bg-[#D39C68] font-manjari font-bold text-secondary">
      {/* Content with border */}
      <div className="relative h-[90%] w-[90%] rounded-3xl border-2 border-secondary">
        {/* Image section */}
        <div className="h-2/5 w-full">
          <div className="mx-auto w-[90%] -translate-y-[60%]">
            <img
              src={americano}
              alt="A cup of Americano coffee"
              className="drop-shadow-xl"
            />
          </div>
        </div>
        {/* Text section */}
        <div className="mx-auto flex h-[55%] w-4/5 -translate-y-[10%] flex-col text-center">
          {/* Title */}
          <h3 className="text-lift text-sm">Cappucino</h3>
          <hr className="border-t-secondary" />
          {/* Desc */}
          <p className="mt-2 flex-grow text-[7px]">
            A smooth, bold coffee made by diluting rich espresso with hot water,
            creating a flavorful and aromatic brew.
          </p>
          {/* Options */}
          <div className="mx-auto mt-1 flex w-3/5 justify-between">
            <div className="w-3 transition-transform duration-300 hover:scale-125">
              <img src={coffeeIcon} alt="Coffee" />
            </div>
            <div className="w-3 transition-transform duration-300 hover:scale-125">
              <img src={cartIcon} alt="Add to cart" />
            </div>
            <div className="w-3 transition-transform duration-300 hover:scale-125">
              <img src={loveIcon} alt="Add to favourites" />
            </div>
          </div>
        </div>
        {/* Buy button */}
        <button className="absolute left-0 right-0 top-[95%] mx-auto w-fit rounded-lg bg-secondary px-4 pb-1 pt-2 font-manjari font-bold text-white transition-transform duration-300 hover:scale-105">
          $ 70.00
        </button>
      </div>
    </article>
  );
};

export default CarouselItem;
