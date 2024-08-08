import Slider from "react-slick";

import CarouselCard from "./CarouselCard";
import cappucino from "../../assets/images/HeroSection/cappuccino.png";
import americano from "../../assets/images/HeroSection/americano.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const data = [
  {
    image: cappucino,
    title: "Cappucino",
    text: "A creamy blend of rich espresso and steamed milk, topped with a light layer of frothy foam.",
    price: "$ 50.00",
  },
  {
    image: americano,
    title: "Americano",
    text: "A smooth, bold coffee made by diluting rich espresso with hot water, creating a flavorful and aromatic brew.",
    price: "$ 70.00",
  },
  {
    image: cappucino,
    title: "Chai Latte",
    text: "A creamy blend of rich espresso and steamed milk, topped with a light layer of frothy foam.",
    price: "$ 30.00",
  },
  {
    image: cappucino,
    title: "Cappucino",
    text: "A creamy blend of rich espresso and steamed milk, topped with a light layer of frothy foam.",
    price: "$ 50.00",
  },
  {
    image: americano,
    title: "Americano",
    text: "A smooth, bold coffee made by diluting rich espresso with hot water, creating a flavorful and aromatic brew.",
    price: "$ 70.00",
  },
  {
    image: cappucino,
    title: "Chai Latte",
    text: "A creamy blend of rich espresso and steamed milk, topped with a light layer of frothy foam.",
    price: "$ 30.00",
  },
  {
    image: cappucino,
    title: "Cappucino",
    text: "A creamy blend of rich espresso and steamed milk, topped with a light layer of frothy foam.",
    price: "$ 50.00",
  },
  {
    image: americano,
    title: "Americano",
    text: "A smooth, bold coffee made by diluting rich espresso with hot water, creating a flavorful and aromatic brew.",
    price: "$ 70.00",
  },
  {
    image: cappucino,
    title: "Chai Latte",
    text: "A creamy blend of rich espresso and steamed milk, topped with a light layer of frothy foam.",
    price: "$ 30.00",
  },
];

const Carousel = ({ visible }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      // {
      //   breakpoint: 1280,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={`2xl:-translate-x-[100vw] ${visible && "slide-in"}`}>
      <Slider {...settings}>
        {data.map(({ image, title, text, price }, index) => (
          <CarouselCard
            key={index}
            image={image}
            title={title}
            text={text}
            price={price}
            visible={visible}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
