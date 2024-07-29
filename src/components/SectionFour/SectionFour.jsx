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
      <section id="about" className="scroll-mt-[260px] group">
        <div className="flex items-center justify-around bg-secondary text-white">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-offside">
            1987
          </h3>
          <div className="w-1/5 scale-[240%] xl:scale-[200%]">
            <img
              src={coffeeCup}
              alt="Coffee cup"
              // className="group-hover:-rotate-180 transition-transform duration-[2s] ease-out"
              data-aos="rotate-coffee-cup"
              data-aos-anchor-placement="top-center"
              data-aos-delay="1000"
            />
            <img
              src={coffeeBeans}
              alt="Coffee beans"
              className="absolute top-[8vw] -z-10 scale-90 xl:scale-[85%] translate-x-1"
            />
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-offside">
            2024
          </h3>
        </div>
        <div className="pt-[30vw] lg:pt-16 px-10 md:px-20 flex flex-col lg:flex-row lg:justify-between gap-5">
          <p className="font-manjari font-semibold text-sm md:text-base xl:text-xl lg:w-1/3 lg:text-left">
            Since 1987, EspressoZen Cafe has been synonymous with quality,
            crafting each cup with a blend of expertise and passion that has
            stood the test of time. As we mark over three decades of serving our
            community, we remain committed to delivering exceptional coffee
            experiences that evoke nostalgia while embracing innovation.
          </p>
          <p className="font-manjari font-semibold text-sm md:text-base xl:text-xl lg:w-1/3 lg:text-right">
            With a legacy rooted in meticulous craftsmanship and dedication to
            our craft, EspressoZen Cafe has been a beloved destination since
            1987. From our humble beginnings to becoming a cherished part of
            daily routines, we continue to elevate the coffee experience,
            welcoming each guest to share in our journey of flavor, tradition,
            and excellence.
          </p>
        </div>
        <div className="px-10 md:px-20 flex flex-col items-center lg:pt-10 xl:pt-0">
          <p className="font-manjari font-semibold text-sm md:text-base xl:text-xl pt-6 pb-2">
            Join us at EspressoZen Cafe and experience the timeless blend of
            tradition and innovation in every sip, as we continue to redefine
            the art of coffee since 1987.
          </p>
          <hr className="border-t-4 border-t-secondary w-1/4" />
        </div>
      </section>
      <section id="contact" className="px-20 pt-8">
        <h2 className="font-noto-sans-tamil font-extrabold text-[26px] md:text-4xl lg:text-5xl uppercase pt-16 xl:pt-32 mb-16">
          Bo
          <span className="border border-primary py-1 pe-10">
            ok Your Table
          </span>
        </h2>
        <div className="flex flex-col items-center xl:w-4/5 mx-auto pb-10 lg:pb-20">
          <div className="flex flex-wrap justify-between w-full">
            <Input type="text" placeholder="name" />
            <Input type="email" placeholder="email address" />
            <Input type="tel" placeholder="phone no" />
            <Input type="number" placeholder="number of guests" />
            <Input type="date" placeholder="date of reservation" />
            <Input type="time" placeholder="time of reservation" />
          </div>
          <textarea
            placeholder="special requests and comments"
            className="bg-transparent border border-primary font-manjari font-bold uppercase lg:text-xl pt-2 xl:pt-4 pb-1 xl:pb-2 px-5 xl:px-7 mb-5 tracking-wide w-full"
          ></textarea>
        </div>
      </section>
    </div>
  );
};

export default SectionFour;
