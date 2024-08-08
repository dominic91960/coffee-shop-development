import { useEffect } from "react";
import AOS from "aos";

import Input from "./Input";

import coffeeCup from "../../assets/images/SectionFour/coffee-cup.png";
import coffeeBeans from "../../assets/images/SectionFour/coffee-beans.png";
import "aos/dist/aos.css";
import "./SectionFour.css";

const SectionFour = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="section-four-background">
      <section id="about" className="group scroll-mt-[260px]">
        <div className="flex items-center justify-around bg-secondary text-white">
          <h3 className="font-offside text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            1987
          </h3>
          <div className="w-1/5 scale-[240%] xl:scale-[200%]">
            <img
              src={coffeeCup}
              alt="Coffee cup"
              data-aos="rotate-coffee-cup"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1000"
            />
            <img
              src={coffeeBeans}
              alt="Coffee beans"
              className="absolute top-[8vw] -z-10 translate-x-1 scale-90 xl:scale-[85%]"
            />
          </div>
          <h3 className="font-offside text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            2024
          </h3>
        </div>
        <div className="flex flex-col gap-5 px-[10vw] pt-[30vw] md:px-[5vw] lg:flex-row lg:justify-between lg:pt-16">
          <p className="font-manjari text-xs font-semibold text-secondary sm:text-sm md:text-base lg:w-1/3 lg:text-left lg:text-lg xl:text-xl">
            Since 1987, EspressoZen Cafe has been synonymous with quality,
            crafting each cup with a blend of expertise and passion that has
            stood the test of time. As we mark over three decades of serving our
            community, we remain committed to delivering exceptional coffee
            experiences that evoke nostalgia while embracing innovation.
          </p>
          <p className="font-manjari text-xs font-semibold sm:text-sm md:text-base lg:w-1/3 lg:text-right lg:text-lg xl:text-xl">
            With a legacy rooted in meticulous craftsmanship and dedication to
            our craft, EspressoZen Cafe has been a beloved destination since
            1987. From our humble beginnings to becoming a cherished part of
            daily routines, we continue to elevate the coffee experience,
            welcoming each guest to share in our journey of flavor, tradition,
            and excellence.
          </p>
        </div>
        <div className="flex flex-col items-center px-[10vw] md:px-[5vw] lg:pt-10 xl:pt-0">
          <p className="pb-2 pt-6 font-manjari text-xs font-semibold sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Join us at EspressoZen Cafe and experience the timeless blend of
            tradition and innovation in every sip, as we continue to redefine
            the art of coffee since 1987.
          </p>
          <hr className="w-1/4 border-t-4 border-t-secondary" />
        </div>
      </section>
      <section id="contact" className="px-[10vw] pt-8 md:px-[5vw]">
        <h2 className="mb-16 pt-16 font-noto-sans-tamil text-xl font-extrabold uppercase sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Bo
          <span className="border border-primary py-1 pe-10">
            ok Your Table
          </span>
        </h2>
        <div className="mx-auto flex flex-col items-center pb-10 lg:pb-20 xl:w-4/5">
          <div className="flex w-full flex-wrap justify-between">
            <Input type="text" placeholder="name" />
            <Input type="email" placeholder="email address" />
            <Input type="tel" placeholder="phone no" />
            <Input type="number" placeholder="number of guests" />
            <Input type="date" placeholder="date of reservation" />
            <Input type="time" placeholder="time of reservation" />
          </div>
          <textarea
            placeholder="special requests and comments"
            className="mb-5 w-full border border-primary bg-transparent px-5 pb-1 pt-2 font-manjari text-xs font-bold uppercase tracking-wide sm:text-sm md:text-base lg:text-lg xl:px-7 xl:pb-2 xl:pt-4 xl:text-xl"
          ></textarea>
        </div>
      </section>
    </div>
  );
};

export default SectionFour;
