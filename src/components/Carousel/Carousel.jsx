import React from "react";
import Slider from "react-slick";

import CarouselItem from "../CarouselItem/CarouselItem";
import americano from "../../assets/images/Carousel/americano.png";
import cappucino from "../../assets/images/Carousel/cappuccino.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

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
  // Errors in 767, 639, 374 px breakpoints
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          speed: 1500,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          speed: 1500,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 374,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: true,
          speed: 1500,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <menu className="px-[5vw] pb-12 pt-5 md:w-1/2 md:px-0 2xl:w-[60%]">
      <Slider {...settings}>
        {data.map(({ image, title, desc, price }) => (
          <CarouselItem image={image} title={title} desc={desc} price={price} />
        ))}
      </Slider>
    </menu>
  );
};

export default Carousel;
