import React from "react";
import Slider from "react-slick";

import CarouselItem from "../CarouselItem/CarouselItem";
import americano from "../../assets/images/Carousel/americano.png";
import cappucino from "../../assets/images/Carousel/cappuccino.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    image: cappucino,
    title: "cappucino",
    desc: "A creamy blend of rich espresso and steamed milk, topped with a light layer of frothy foam",
    price: "$ 50.00",
  },
  {
    image: americano,
    title: "americano",
    desc: "A smooth, bold coffee made by diluting rich espresso with hot water, creating a flavorful and aromatic brew.",
    price: "$ 70.00",
  },
  {
    image: cappucino,
    title: "chai latte",
    desc: "A creamy blend of rich espresso and steamed milk, topped with a light layer of frothy foam",
    price: "$ 30.00",
  },
];

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <menu className="bg-slate-400 pb-6">
      <Slider {...settings}>
        {data.map(({ image, title, desc, price }) => (
          <CarouselItem image={image} title={title} desc={desc} price={price} />
        ))}
      </Slider>
    </menu>
  );
};

export default Carousel;
